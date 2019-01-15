import mongoose from "mongoose";
const Schema = mongoose.Schema;

const universeSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  // Will be used to define the single public universe that all users can see
  public: {
    type: Boolean,
    default: false
  },
  users: {
    type: [Schema.Types.ObjectId]
  },
  // Hold a list of all nodes that have been shared with this universe
  // Allows for easier queries
  // Not done for all nodes as its easy to query nodes by their primaryUniverse field
  sharedNodes: {
    type: [Schema.Types.ObjectId]
  }
});

export default mongoose.model("Universe", universeSchema);
