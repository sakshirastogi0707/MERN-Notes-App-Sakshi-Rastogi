import notesSchema from "../../modles/notesSchema.js";
export default async function getAllNotes(Notes, res) {
  try {
    const response = await notesSchema.find({});
    return res.status(200).json({
      Notes: response,
      success: true,
    });
  } catch (error) {
    return res.status(403).json({
      message: "Somthing went wrong",
      error: error,
    });
  }
}
