// routes/userRoutes.js
import express from "express";
const router = express.Router();
import User from "../models/userModel.js";

// GET tất cả users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET user theo id
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// POST tạo user mới
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// PUT sửa user theo id
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

// DELETE user theo id
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

export default router;
