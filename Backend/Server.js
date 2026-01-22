const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./Routes/authRoutes");
const bannedRoutes = require("./Routes/bannedRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Local MongoDB not found. Starting In-Memory MongoDB...");
    try {
      const { MongoMemoryServer } = require("mongodb-memory-server");
      const mongod = await MongoMemoryServer.create();
      await mongoose.connect(mongod.getUri());
      console.log("MongoDB Connected (In-Memory)");
    } catch (innerErr) {
      console.error("Failed to start In-Memory MongoDB", innerErr);
    }
  }
};

connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/banned-suppliers", bannedRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
