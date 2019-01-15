import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Defines keeps a record of all previous versions of a node

const nodeVersionsSchema = new Schema({
  node: {
    type: Schema.Types.ObjectId,
    ref: "node"
  },
  versions: [
    {
      string: {
        type: String
      },
      highlightArray: {
        type: [Number]
      },
      authorArray: {
        type: [Schema.Types.ObjectId]
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      version: {
        type: Number,
        default: 0
      }
    }
  ]
});

export default mongoose.model("NodeVersions", nodeVersionsSchema);
