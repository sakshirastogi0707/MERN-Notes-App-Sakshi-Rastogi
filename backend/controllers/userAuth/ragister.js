import userSchema from "../../modles/userSchema.js";
// Signup Controller Logic
const userSignup = async (userDets, res) => {
  try {
    let usernameTaken = await validateUsername(userDets.username);
    console.log(userDets.username, "userDets.username");
    let phoneNumber = await validatePhone(userDets.phone);
    //Check
    if (usernameTaken) {
      return res.status(400).json({
        meassage: "username is already taken",
        success: false,
      });
    } else if (phoneNumber) {
      return res.status(400).json({
        meassage: "Number is already taken",
        success: false,
      });
    } else {
      const newUser = new userSchema({
        ...userDets,
      });
      const saved = await newUser.save();
      console.log(saved);
      return res.status(201).json({
        user: saved,
        meassage: "you are Signed up successfully",
        success: true,
      });
    }
  } catch (e) {
    return res.status(500).json({
      meassage: "Unable to create your account",
      success: false,
    });
  }
};
const validateUsername = async (username) => {
  let userName = await userSchema.findOne({
    username: username,
  });
  return userName ? true : false;
};
const validatePhone = async (phone) => {
  let PhoneNumber = await userSchema.findOne({
    phone: phone,
  });
  return PhoneNumber ? true : false;
};

export default userSignup;
