import Node from "../models/node";
import { ObjectId } from "mongodb";

export async function addSource(node, sources) {
  try {
    let nodeId = ObjectId(node._id);
    if (sources.length > 0) {
      // Find items that have been removed, remove subtopic relationship in that node
      let oldSources = node.sources.filter(
        x => !sources.includes(x.toString())
      );
      oldSources.forEach(async source => {
        await Node.findByIdAndUpdate(
          source,
          { $pull: { subtopics: nodeId } },
          { new: true }
        );
      });

      // Find objects that are new, add subtopic relationship in that node
      let newSources = sources.filter(
        newSource => !node.sources.includes(ObjectId(newSource))
      );
      newSources.forEach(async source => {
        await Node.findByIdAndUpdate(
          source,
          { $push: { subtopics: nodeId } },
          { new: true }
        );
      });
      node.sources = sources;
      await node.save();
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
