import expess from "express";
import deleteNotesData from "../../controllers/notes/deleteNotes.js";
const deleteNotes = expess();
deleteNotes.delete("/delete/:id", async (req, res) => {
  return await deleteNotesData(req, res);
});
export default deleteNotes;
