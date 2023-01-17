import pkg from "node-emoji";
const { emoji } = pkg;
// Emoji controller Logic
const getEmojis = async (req, res) => {
  try {
    return res.status(200).json({
      emoji: emoji,
      success: true,
    });
  } catch (e) {
    return res.status(401).json({
      message: "somthing went wrong",
      success: false,
    });
  }
};
export default getEmojis;
