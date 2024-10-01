import validator from "validator";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const creatToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({ message: "User does not exists." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({ message: "Password not matched." });
    }
    const token = creatToken(user._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(201).json({
      seccuss: false,
      message: error.message,
    });
  }
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input data
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    let existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(409).json({ message: "User already has an account." });
    }

    //validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.status(409).json({ message: "Please enter a valid email." });
    }
    if (password.length < 8) {
      return res
        .status(409)
        .json({ message: "Please enter a strong password." });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //const hashedPassword =    bcrypt.hash(password, 10);

    //creating user
    let newUser = new User({
      email,
      name,
      password: hashedPassword,
    });

    // const createdUser = await User.findById(registerData._id).select(
    //     "-password -refreshToken"
    // )

    const user = await newUser.save();
    const token = creatToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(201).json({
      seccuss: false,
      message: error.message,
    });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials." });
    }
  } catch (error) {
    console.log(error);
    res.status(201).json({
      seccuss: false,
      message: error.message,
    });
  }
};

export { loginUser, registerUser, adminLogin };
