import express from "express";
import getAllNotes from "../../controllers/notes/getNotes.js";
const getNotes = express();
// create notes route to get all the notes
getNotes.get("/getNotes", async (req, res) => {
  return await getAllNotes(req.body, res);
});
export default getNotes;
