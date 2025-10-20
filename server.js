// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Import route
import friendRoutes from "./routes/friendRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";

// Import middleware
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

// Middleware để parse JSON
app.use(express.json());

// Routes
app.use("/api/friends", friendRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

// Middleware xử lý lỗi toàn cục
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
