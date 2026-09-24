const express = require("express");
const mongoose = require("mongoose");
const Issue = require("./models/Issue");

require("dotenv").config();

const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("DevTrace API is running");
});

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