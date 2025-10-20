import Post from "../models/postModel.js";

// GET all
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("sender").populate("receiver");
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

// GET by ID
export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate("sender").populate("receiver");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// POST
export const createPost = async (req, res, next) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// PUT
export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deletePost = async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    next(err);
  }
};
