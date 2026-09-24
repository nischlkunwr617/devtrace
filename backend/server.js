const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Issue = require("./models/Issue");

require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("DevTrace API is running");
});

// Create issue
app.post("/api/issues", async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({
      message: "Could not create issue",
    });
  }
});

// Get all issues
app.get("/api/issues", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (error) {
    res.status(500).json({
      message: "Could not get issues",
    });
  }
});

// Update issue
app.patch("/api/issues/:id", async (req, res) => {
  try {
    const issue = await Issue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(issue);
  } catch (error) {
    res.status(500).json({
      message: "Could not update issue",
    });
  }
});

// Delete issue
app.delete("/api/issues/:id", async (req, res) => {
  try {
    await Issue.findByIdAndDelete(req.params.id);

    res.json({
      message: "Issue deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Could not delete issue",
    });
  }
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error);
  });