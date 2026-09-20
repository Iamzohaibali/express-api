const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Express API",
    version: "1.0.0",
  });
});

// Health endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "express-api",
  });
});

// Users endpoint
app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Alice",
    },
    {
      id: 2,
      name: "Bob",
    },
  ]);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express API listening on port ${PORT}`);
});