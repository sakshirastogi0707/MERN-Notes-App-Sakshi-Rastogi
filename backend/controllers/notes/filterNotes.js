import notesSchema from "../../modles/notesSchema.js";
//Controller for Filter Notes data.
const filterNotesByTitle = async (notes, res) => {
  try {
    const Title = notes.title;
    const filterData = await notesSchema.find({ title: { $regex: Title } });
    if (filterData.length > 0) {
      return res.status(200).json({
        Data: filterData,
        message: "Notes find successfully",
        success: true,
      });
    } else {
      return res.status(401).json({
        message: "Not found",
        success: false,
      });
    }
  } catch (e) {
    return res.status(400).json({
      Error: e,
      message: "Somthing went wrong",
      success: false,
    });
  }
};
export default filterNotesByTitle;
