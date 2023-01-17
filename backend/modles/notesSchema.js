import mongoose from "mongoose";
//Notes Schema
const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    noteContent: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Notes", notesSchema);
