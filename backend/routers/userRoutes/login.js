import express from "express";
import loginUser from "../../controllers/userAuth/login.js";
const login = express();
//Router for user Login
login.post("/login", async (req, res) => {
  return await loginUser(req.body, res);
});
export default login;
