import mongoose from "mongoose";
const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  sourceNode: {
    type: Schema.Types.ObjectId,
    ref: "node"
  },
  subtopicNode: {
    type: Schema.Types.ObjectId,
    ref: "node"
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

export default mongoose.model("Connection", connectionSchema);
