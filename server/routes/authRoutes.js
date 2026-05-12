let generatedOTP = "";
const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json("User already exists");
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
      role
    });

    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    res.json(userResponse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json("Invalid credentials");

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    };

    res.json({
      token,
      user: userResponse
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/send-otp", (req, res) => {
  generatedOTP = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  res.json({
    message: "OTP generated successfully",
    otp: generatedOTP
  });
});
router.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp === generatedOTP) {
    return res.json({ message: "OTP verified" });
  }

  return res.status(400).json({
    message: "Invalid OTP"
  });
});

module.exports = router;