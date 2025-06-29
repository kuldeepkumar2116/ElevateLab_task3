const express = require("express");
const app = express();
const bookRoutes = require("./routes/books");

app.use(express.json()); // middleware to parse JSON

app.use("/books", bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
