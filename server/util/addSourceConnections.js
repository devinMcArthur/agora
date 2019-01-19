import Node from "../models/node";
import Connection from "../models/connection";
import mongoose from "mongoose";
import { rejects } from "assert";

export function addSourceConnections(node, data) {
  return new Promise(async (resolve, reject) => {
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
        for (var i = 0; i < oldSourcesConnections.length; i++) {
          let sourceConnection = oldSourcesConnections[i];
          let connection = await Connection.findById(sourceConnection);
          // Remove connection from current node
          node = await Node.findByIdAndUpdate(
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
        }

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
          for (var i = 0; i < newSourceConnections.length; i++) {
            let sourceConnection = newSourceConnections[i];
            // Create Connection Object
            let connection = new Connection({
              sourceNode: sourceConnection,
              subtopicNode: nodeId,
              author
            });
            // Add Connection to this node (subtopic node)
            node = await Node.findByIdAndUpdate(
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
          }
        }
        resolve(node);
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
        resolve(node);
      }
    } catch (e) {
      console.log(e);
      let errors = {};
      errors.general = e;
      reject(errors);
    }
  });
}
