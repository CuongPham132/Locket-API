// routes/postRoutes.js
import express from "express";
const router = express.Router();
import Post from "../models/postModel.js";

// GET tất cả posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// GET post theo id
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

// POST tạo post mới
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

// PUT sửa post theo id
router.put("/:id", async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

// DELETE post theo id
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

export default router;
