import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  user:      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  message:   { type: String, required: true },                                      
  isRead:    { type: Boolean, default: false },                                     
  createdAt: { type: Date, default: Date.now }                                      
});

// Đổi tên model thành "Message"
export default mongoose.model("Message", messageSchema);
