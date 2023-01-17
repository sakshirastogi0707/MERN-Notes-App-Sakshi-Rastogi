import consola from "consola";
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
// setup data connection
const connectDb = async (DB_URL) => {
  try {
    const OPTIONS = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    };
    await mongoose.connect(DB_URL, OPTIONS);
    consola.success("SuccessFully Connected");
  } catch (err) {
    consola.error(`You are not connected to mongoDB ${err}`);
  }
};
export default connectDb;
