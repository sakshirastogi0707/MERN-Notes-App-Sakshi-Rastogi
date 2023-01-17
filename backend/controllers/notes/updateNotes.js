import notesSchema from "../../modles/notesSchema.js";
//Controller for updating Notes
const updateNotesData = async (req, res) => {
  try {
    const isItemUpdated = await notesSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (isItemUpdated) {
      return res.status(200).json({
        message: "Your post updated successfully!",
        success: true,
      });
    } else {
      return res.status(500).json({ message: "Internal Server Error !" });
    }
  } catch (e) {
    return res.status(500).json({ error: "something went wrong !" });
  }
};
export default updateNotesData;
