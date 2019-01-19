import Node from "../models/node";
import Connection from "../models/connection";
import mongoose from "mongoose";

export async function addSubtopicConnections(node, data) {
  try {
    let subtopicConnections = data.subtopics;
    let author = data.author;
    let nodeId = mongoose.Types.ObjectId(node._id);
    if (subtopicConnections && subtopicConnections.length > 0) {
      // Find items that have been removed, remove source relationship in that node
      let oldSubtopicConnections = node.subtopicConnections.filter(
        existingConnection =>
          !subtopicConnections.includes(existingConnection.toString())
      );
      // Remove oldSubtopicConnections from both nodes involved, and delete connection object
      oldSubtopicConnections.forEach(async subtopicConnection => {
        let connection = await Connection.findById(subtopicConnection);
        // Remove connection from current node
        await Node.findByIdAndUpdate(
          nodeId,
          { $pull: { subtopicConnections: connection._id } },
          { new: true }
        );
        await Node.findByIdAndUpdate(
          connection.subtopicNode,
          { $pull: { sourceConnections: connection._id } },
          { new: true }
        );
        await Connection.findByIdAndRemove(subtopicConnection);
      });

      // Find objects that are new, add source relationship in that node
      if (subtopicConnections.length > 0) {
        let newSubtopicConnections = subtopicConnections.filter(
          newSubtopicConnection =>
            !node.subtopicConnections.some(existingSubtopicConnection =>
              existingSubtopicConnection.equals(
                mongoose.Types.ObjectId(newSubtopicConnection)
              )
            )
        );
        newSubtopicConnections.forEach(async subtopicConnection => {
          // Create Connection Object
          let connection = new Connection({
            sourceNode: nodeId,
            subtopicNode: subtopicConnection,
            author
          });
          // Add connection to this node
          await Node.findByIdAndUpdate(
            nodeId,
            { $push: { subtopicConnections: connection._id } },
            { new: true }
          );
          // Add connection to other node
          await Node.findByIdAndUpdate(
            subtopicConnection,
            { $push: { sourceConnections: connection._id } },
            { new: true }
          );
          await connection.save();
        });
      }

      await node.save();
      return;
    } else {
      // Remove from source of related nodes
      node.subtopics.forEach(async source => {
        await Node.findByIdAndUpdate(
          source,
          { $pull: { sources: nodeId } },
          { new: true }
        );
      });
      node.subtopics = [];
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
