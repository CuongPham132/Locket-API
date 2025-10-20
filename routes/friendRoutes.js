import express from "express";
import {
  getAllFriends,
  getFriendById,
  createFriend,
  updateFriend,
  deleteFriend
} from "../controllers/friendController.js";

const router = express.Router();

router.get("/", getAllFriends);
router.get("/:id", getFriendById);
router.post("/", createFriend);
router.put("/:id", updateFriend);
router.delete("/:id", deleteFriend);

export default router;
