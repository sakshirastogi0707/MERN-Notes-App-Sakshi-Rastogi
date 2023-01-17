import express from "express";
import getEmojis from "../../controllers/emojis/emoji.js";
// Route for get all emojis
const emojis = express();
emojis.get("/emoji", async (req, res) => {
  return await getEmojis(req.body, res);
});
export default emojis;
