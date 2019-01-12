import Node from "../models/node";
import { ObjectId } from "mongodb";

export async function addSubtopic(node, subtopics) {
  try {
    let nodeId = ObjectId(node._id);
    if (subtopics.length > 0) {
      // Find items that have been removed, remove source relationship in that node
      let oldSubtopics = node.subtopics.filter(
        x => !subtopics.includes(x.toString())
      );
      oldSubtopics.forEach(async subtopic => {
        await Node.findByIdAndUpdate(
          subtopic,
          { $pull: { sources: nodeId } },
          { new: true }
        );
      });

      // Find objects that are new, add source relationship in that node
      let newSubtopics = subtopics.filter(
        newSubtopic => !node.subtopics.includes(ObjectId(newSubtopic))
      );
      newSubtopics.forEach(async subtopic => {
        await Node.findByIdAndUpdate(
          subtopic,
          { $push: { sources: nodeId } },
          { new: true }
        );
      });
      node.subtopics = subtopics;
      await node.save();
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
