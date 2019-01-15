import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Defines source/subtopic connection between nodes

const connectionSchema = new Schema({
  sourceNode: {
    type: Schema.Types.ObjectId,
    ref: "node"
  },
  // To determine if this connection transcends universes
  // Can limit subtopic/source viewing so not to link to private universe from public
  sourceNodePrivate: {
    type: Boolean,
    default: false
  },
  subtopicNode: {
    type: Schema.Types.ObjectId,
    ref: "node"
  },
  subtopicNodePrivate: {
    type: Boolean,
    default: false
  },
  // Upvote/Downvote ratio of connection
  // Allows ranking of subtopic node in a given context
  value: {
    type: Number,
    default: 0
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

export default mongoose.model("Connection", connectionSchema);
