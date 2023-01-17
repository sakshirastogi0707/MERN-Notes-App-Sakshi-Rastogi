import express from "express";
import filterEmojisByfirstLetter from "../../controllers/emojis/filterEmojis.js";
const filterEmojis = express();
filterEmojis.post("/emojiFilter", async (req, res) => {
  return await filterEmojisByfirstLetter(req.body, res);
});
export default filterEmojis;
