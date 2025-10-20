import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    imageUrl:  { type: String, required: true},
    caption:   { type: String},
    sender:    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    receiver:  { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    createdAt: { type: Date, default: Date.now}
});

export default mongoose.model("Post", postSchema);