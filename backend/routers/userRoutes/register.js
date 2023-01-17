import express from "express";
import userSignup from "../../controllers/userAuth/ragister.js";
const register = express();
//Router for user Registeration
register.post("/register", async (req, res) => {
  return await userSignup(req.body, res);
});
export default register;
