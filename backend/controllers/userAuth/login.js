import jwt from "jsonwebtoken";
import userSchema from "../../modles/userSchema.js";
import KeysValue from "../../config/keys.js";
// Login Controller Logic
const loginUser = async (userDets, res) => {
  const phone = userDets.phone;
  const User = await userSchema.findOne({ phone: phone });
  if (!User) {
    return res.status(403).json({
      meassage: "User not found",
      success: false,
    });
  } else {
    let token = jwt.sign(
      {
        _id: User._id,
        username: User.username,
        phone: User.phone,
      },
      KeysValue.SECRET,
      { expiresIn: "7 days" }
    );
    let result = {
      _id: User._id,
      username: User.username,
      token: `Bearer ${token}`,
      expiresIn: 168,
    };
    return res.status(200).json({
      ...result,
      meassage: "Congratulation!,You Logged in",
      success: true,
    });
  }
};
export default loginUser;
