import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies?.accessToken || req.headers;
    // console.log(token);

    if (!token) {
      console.log("Access token missing");
      return res.json({ success: false, message: "Access token missing." });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized." });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(201).json({
      seccuss: false,
      message: error.message,
    });
  }
};

export default adminAuth;
