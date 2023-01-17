import express from "express";
import filterNotesByTitle from "../../controllers/notes/filterNotes.js";
const filterNotes = express();
// Filter Notes Route
filterNotes.post("/filterNotes", async (req, res) => {
  return await filterNotesByTitle(req.body, res);
});
export default filterNotes;
