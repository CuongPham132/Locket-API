import Message from "../models/messageModel.js";

// GET all
export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().populate("user");
    res.json(messages);
  } catch (err) {
    next(err);
  }
};

// GET by ID
export const getMessageById = async (req, res, next) => {
  try {
    const message = await Message.findById(req.params.id).populate("user");
    if (!message) return res.status(404).json({ message: "Message not found" });
    res.json(message);
  } catch (err) {
    next(err);
  }
};

// POST
export const createMessage = async (req, res, next) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    next(err);
  }
};

// PUT
export const updateMessage = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!message) return res.status(404).json({ message: "Message not found" });
    res.json(message);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteMessage = async (req, res, next) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted" });
  } catch (err) {
    next(err);
  }
};
