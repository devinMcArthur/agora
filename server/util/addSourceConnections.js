import Node from "../models/node";
import Connection from "../models/connection";
import mongoose from "mongoose";

export async function addSourceConnections(node, data) {
  try {
    let sourceConnections = data.sources;
    let author = data.author;
    let nodeId = mongoose.Types.ObjectId(node._id);
    if (sourceConnections && sourceConnections.length > 0) {
      // Find items that have been removed, remove subtopic relationship from that node
      let oldSourcesConnections = node.sourceConnections.filter(
        existingConnection =>
          !sourceConnections.includes(existingConnection.toString())
      );
      oldSourcesConnections.forEach(async sourceConnection => {
        let connection = await Connection.findById(sourceConnection);
        // Remove connection from current node
        await Node.findByIdAndUpdate(
          nodeId,
          { $pull: { sourceConnections: connection._id } },
          { new: true }
        );
        // Remove connection from other (source) node
        await Node.findByIdAndUpdate(
          connection.sourceNode,
          { $pull: { subtopicConnections: connection._id } },
          { new: true }
        );
        await Connection.findByIdAndRemove(sourceConnection);
      });

      // Find objects that are new, add subtopic relationship from that node
      if (sourceConnections.length > 0) {
        let newSourceConnections = sourceConnections.filter(
          newSourceConnection =>
            !node.sourceConnections.some(existingSourceConnection =>
              existingSourceConnection.equals(
                mongoose.Types.ObjectId(newSourceConnection)
              )
            )
        );
        newSourceConnections.forEach(async sourceConnection => {
          // Create Connection Object
          let connection = new Connection({
            sourceNode: sourceConnection,
            subtopicNode: nodeId,
            author
          });
          // Add Connection to this node (subtopic node)
          await Node.findByIdAndUpdate(
            nodeId,
            { $push: { sourceConnections: connection._id } },
            { new: true }
          );
          // Add connection to other node (source node)
          await Node.findByIdAndUpdate(
            sourceConnection,
            { $push: { subtopicConnections: connection._id } },
            { new: true }
          );
          await connection.save();
        });
      }

      await node.save();
      return;
    } else {
      // Remove from subtopic of related nodes
      node.sources.forEach(async source => {
        await Node.findByIdAndUpdate(
          source,
          { $pull: { subtopics: nodeId } },
          { new: true }
        );
      });
      node.sources = [];
      await node.save();
      return;
    }
  } catch (e) {
    console.log(e);
    let errors = {};
    errors.general = e;
    return new Error(errors);
  }
}
