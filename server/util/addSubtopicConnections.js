import Node from "../models/node";
import Connection from "../models/connection";
import mongoose from "mongoose";
import { rejects } from "assert";

export function addSubtopicConnections(node, data) {
  return new Promise(async (resolve, reject) => {
    try {
      let subtopicConnections = data.subtopics;
      let author = data.author;
      let nodeId = mongoose.Types.ObjectId(node._id);
      if (subtopicConnections && subtopicConnections.length > 0) {
        // Find items that have been removed, remove source relationship in that node
        let oldSubtopicConnections = await node.subtopicConnections.filter(
          existingConnection =>
            !subtopicConnections.includes(existingConnection.toString())
        );
        // Remove oldSubtopicConnections from both nodes involved, and delete connection object
        for (var i = 0; i < oldSubtopicConnections.length; i++) {
          let subtopicConnection = oldSubtopicConnections[i];
          let connection = await Connection.findById(subtopicConnection);
          // Remove connection from current node
          node = await Node.findByIdAndUpdate(
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
        }

        // Find objects that are new, add source relationship in that node
        if (subtopicConnections.length > 0) {
          let newSubtopicConnections = await subtopicConnections.filter(
            newSubtopicConnection =>
              !node.subtopicConnections.some(existingSubtopicConnection =>
                existingSubtopicConnection.equals(
                  mongoose.Types.ObjectId(newSubtopicConnection)
                )
              )
          );
          for (var i = 0; i < newSubtopicConnections.length; i++) {
            let subtopicConnection = newSubtopicConnections[i];
            // Create Connection Object
            let connection = new Connection({
              sourceNode: nodeId,
              subtopicNode: subtopicConnection,
              author
            });
            await connection.save();
            // Add connection to this node
            node = await Node.findByIdAndUpdate(
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
          }
        }
        resolve(node);
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
