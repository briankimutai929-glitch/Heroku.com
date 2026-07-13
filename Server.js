const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: "SocialApp API is running!" });
});

// Placeholder: auth, posts, friends routes will go here

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});