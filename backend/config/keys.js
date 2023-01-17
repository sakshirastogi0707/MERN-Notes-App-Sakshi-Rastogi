import dotenv from "dotenv";
//App secrate keys
dotenv.config();
const KeysValue = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URL,
  SECRET: process.env.SECRET,
};

export default KeysValue;
