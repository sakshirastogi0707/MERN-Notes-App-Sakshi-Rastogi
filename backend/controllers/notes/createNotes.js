import notesSchema from "../../modles/notesSchema.js";
const createNotes = async (req, res) => {
  //   console.log(notesSchema);
  try {
    const notes = req.body;
    const title = notes.title;
    const newNotes = new notesSchema({ ...notes });
    const dbData = await notesSchema.findOne({ title: title });
    //Check if data exixt then won't store in the DB
    if (dbData) {
      return res.status(400).json({
        meassage: "This is already exist",
        success: false,
      });
    } else {
      const saved = await newNotes.save();
      return res.status(201).json({
        Notes: saved,
        meassage: "Your Note Saved Successfully",
        success: true,
      });
    }
  } catch (e) {
    return res.status(400).json({
      meassage: "Somthing went wrong",
      success: false,
    });
  }
};
export default createNotes;
