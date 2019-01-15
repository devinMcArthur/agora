import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Highlight Array Legend
// 0: Nothing
// 1: Speculation
// 2: Opinion
// 3: Fact
// 4: Incorrect Statement
// 5: Question
// 6: Command
// 7: Axiom

const nodeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    string: {
      type: String
    },
    highlightArray: {
      type: [Number]
    },
    // Can be used to have a set of words reference multiple other nodes
    nodeReferenceArray: [
      {
        type: [Schema.Types.ObjectId]
      }
    ],
    authorArray: {
      type: [Schema.Types.ObjectId]
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    version: {
      type: Number,
      default: 0
    }
  },
  versionsReference: {
    type: Schema.Types.ObjectId,
    ref: "nodeVersions"
  },
  subtopics: {
    type: [Schema.Types.ObjectId]
  },
  subtopicConnections: {
    type: [Schema.Types.ObjectId]
  },
  sources: {
    type: [Schema.Types.ObjectId]
  },
  sourceConnections: {
    type: [Schema.Types.ObjectId]
  },
  // Determine whether this is a public or private node
  public: {
    type: Boolean,
    default: true
  },
  // If Private: this is the universe that this node exists in
  originUniverse: {
    type: Schema.Types.ObjectId,
    ref: "universe"
  },
  // Universes that this node is shared in, can be used if this node is public
  sharedUniverses: {
    type: [Schema.Types.ObjectId]
  },
  // Can be toggled to only show this node to particular users even within a Private Universe
  hidden: {
    type: Boolean,
    default: false
  },
  // List of users that can view this node when hidden
  hiddenWhitelist: {
    type: [Schema.Types.ObjectId]
  }
});

export default mongoose.model("Node", nodeSchema);
