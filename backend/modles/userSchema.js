import mongoose from "mongoose";
//user signup Schema
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
