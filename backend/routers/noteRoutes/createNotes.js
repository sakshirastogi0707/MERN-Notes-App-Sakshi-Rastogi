import express from "express";
import createNotes from "../../controllers/notes/createNotes.js";
const Notes = express();
// create notes route
Notes.post("/create", async (req, res) => {
  return await createNotes(req, res);
});
export default Notes;
