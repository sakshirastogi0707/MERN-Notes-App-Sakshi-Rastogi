import emoji from "node-emoji";
// Filtering Emojies
const filterEmojisByfirstLetter = async (emojis, res) => {
  try {
    const emojiName = emojis.emoji;
    const filterEmojies = emoji.search(emojiName);
    return await res.status(200).json({
      filterEmojis: filterEmojies,
      success: true,
    });
  } catch (e) {
    return await res.status(401).json({
      message: "Somthing went wrong",
      success: false,
    });
  }
};
export default filterEmojisByfirstLetter;
