// routes/messageRoutes.js
import express from "express";
const router = express.Router();
import Message from "../models/messageModel.js";

// GET tất cả messages
router.get("/", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

// GET message theo id
router.get("/:id", async (req, res) => {
  const message = await Message.findById(req.params.id);
  res.json(message);
});

// POST tạo message mới
router.post("/", async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.json(message);
});

// PUT sửa message theo id
router.put("/:id", async (req, res) => {
  const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(message);
});

// DELETE message theo id
router.delete("/:id", async (req, res) => {
  await Message.findByIdAndDelete(req.params.id);
  res.json({ message: "Message deleted" });
});

export default router;
