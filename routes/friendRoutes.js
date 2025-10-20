// routes/friendRoutes.js
import express from "express";
const router = express.Router();
import Friend from "../models/friendModel.js";

// GET tất cả friends
router.get("/", async (req, res) => {
  const friends = await Friend.find();
  res.json(friends);
});

// GET friend theo id
router.get("/:id", async (req, res) => {
  const friend = await Friend.findById(req.params.id);
  res.json(friend);
});

// POST tạo friend mới
router.post("/", async (req, res) => {
  const friend = new Friend(req.body);
  await friend.save();
  res.json(friend);
});

// PUT sửa friend theo id
router.put("/:id", async (req, res) => {
  const friend = await Friend.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(friend);
});

// DELETE friend theo id
router.delete("/:id", async (req, res) => {
  await Friend.findByIdAndDelete(req.params.id);
  res.json({ message: "Friend deleted" });
});

export default router;
