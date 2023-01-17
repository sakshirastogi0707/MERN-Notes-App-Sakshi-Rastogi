import expess from "express";
import updateNotesData from "../../controllers/notes/updateNotes.js";
const updateNotes = expess();
updateNotes.patch("/update/:id", async (req, res) => {
  return await updateNotesData(req, res);
});
export default updateNotes;
