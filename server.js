const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (express)
app.use(express.json());                                   // parse JSON request bodies
app.use(express.static(path.join(__dirname, "public")));   // serve HTML/CSS/JS

// In-memory "database" (resets when the server restarts)
const messages = [];
 
// GET: read data
app.get("/api/projects", (req, res) => {
  res.json([
    { title: "Jonathan Wan Personal Website", description: "Built with Node and Express" },
    { title: "Project Two", description: "Something I made"}
  ]);
});

// POST: receive data
app.post("/api/messages", (req, res) => {
  const { name, text } = req.body;

  if (!name || !text) {
    return res.status(400).json({ error: "name and text are required" });
  }

  const message = { id: messages.length + 1, name, text };
  messages.push(message);
  res.status(201).json(message);
});

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// 404 for anything else
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
