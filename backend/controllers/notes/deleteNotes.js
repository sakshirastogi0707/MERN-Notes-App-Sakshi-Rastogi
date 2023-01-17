import notesSchema from "../../modles/notesSchema.js";
//Controller for deleting Notes
const deleteNotesData = async (req, res) => {
  try {
    let isNoteDeleted = await notesSchema.findByIdAndDelete(req.params.id);
    if (isNoteDeleted) {
      return res.status(200).json({
        message: "Your post deleted successfully!",
        success: true,
      });
    } else {
      return res.status(500).json({ message: "Internal Server Error !" });
    }
  } catch (e) {
    return res.status(500).json({ Error: e });
  }
};
export default deleteNotesData;
