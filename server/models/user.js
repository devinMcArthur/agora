import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  active: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
  dateCreated: { type: Date, default: Date.now, required: true }
});

export default mongoose.model("User", userSchema);
