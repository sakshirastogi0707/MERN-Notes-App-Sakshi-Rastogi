import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import consola from "consola";
import connectDb from "./config/dbConn.js";
dotenv.config();
import KeysValue from "./config/keys.js";
// import allowCrossDomain from "./utils/cors.js";
import register from "./routers/userRoutes/register.js";
import login from "./routers/userRoutes/login.js";
import Notes from "./routers/noteRoutes/createNotes.js";
import updateNotes from "./routers/noteRoutes/updateNotes.js";
import deleteNotes from "./routers/noteRoutes/deleteNotes.js";
import emojis from "./routers/emojisRoutes/emoji.js";
import filterEmojis from "./routers/emojisRoutes/filterEmojis.js";
import filterNotes from "./routers/noteRoutes/filterNotes.js";
import getNotes from "./routers/noteRoutes/getNotes.js";
const PORT = KeysValue.PORT;
connectDb(KeysValue.DB_URL); //passing DB connection string URL
const app = express();
app.use(cors()); // cors middilware
app.use(express.json());
// app.use(allowCrossDomain);
//routes Load
app.use(register);
app.use(login);
app.use(Notes);
app.use(updateNotes);
app.use(deleteNotes);
app.use(emojis);
app.use(filterEmojis);
app.use(filterNotes);
app.use(getNotes);
// server connection setup here
app.listen(PORT, () => {
  consola.success(`Server running at: http://localhost:${PORT}`);
});
