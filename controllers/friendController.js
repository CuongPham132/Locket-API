import Friend from "../models/friendModel.js";

// GET all
export const getAllFriends = async (req, res, next) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (err) {
    next(err);
  }
};

// GET by ID
export const getFriendById = async (req, res, next) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) return res.status(404).json({ message: "Friend not found" });
    res.json(friend);
  } catch (err) {
    next(err);
  }
};

// POST
export const createFriend = async (req, res, next) => {
  try {
    const friend = new Friend(req.body);
    await friend.save();
    res.status(201).json(friend);
  } catch (err) {
    next(err);
  }
};

// PUT
export const updateFriend = async (req, res, next) => {
  try {
    const friend = await Friend.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!friend) return res.status(404).json({ message: "Friend not found" });
    res.json(friend);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteFriend = async (req, res, next) => {
  try {
    await Friend.findByIdAndDelete(req.params.id);
    res.json({ message: "Friend deleted" });
  } catch (err) {
    next(err);
  }
};
