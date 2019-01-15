import Node from "../models/node";
import mongoose from "mongoose";

export async function addSubtopic(node, subtopics) {
  try {
    let nodeId = mongoose.Types.ObjectId(node._id);
    if (subtopics.length > 0) {
      // Find items that have been removed, remove source relationship in that node
      let oldSubtopics = node.subtopics.filter(
        x => !subtopics.includes(x.toString())
      );
      console.log(oldSubtopics);
      oldSubtopics.forEach(async subtopic => {
        await Node.findByIdAndUpdate(
          subtopic,
          { $pull: { sources: nodeId } },
          { new: true }
        );
      });

      // Find objects that are new, add source relationship in that node
      let newSubtopics = subtopics.filter(
        newSubtopic =>
          !node.subtopics.some(subtopic =>
            subtopic.equals(mongoose.Types.ObjectId(newSubtopic))
          )
      );
      console.log(newSubtopics);
      newSubtopics.forEach(async subtopic => {
        await Node.findByIdAndUpdate(
          subtopic,
          { $addToSet: { sources: nodeId } },
          { new: true }
        );
      });
      node.subtopics = subtopics;
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
