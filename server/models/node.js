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
    authorArray: {
      type: [Schema.Types.ObjectId]
    }
  },
  subtopics: {
    type: [Schema.Types.ObjectId]
  },
  sources: {
    type: [Schema.Types.ObjectId]
  },
  version: {
    type: Number,
    required: true,
    default: 0
  },
  versions: {
    type: [Schema.Types.ObjectId]
  }
});

export default mongoose.model("Node", nodeSchema);
