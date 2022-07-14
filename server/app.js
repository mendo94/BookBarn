const express = require("express");
const app = express();
const cors = require("cors");
const { Op } = require("sequelize");
const models = require("./models");
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

// app.post("/", async (req, res) => {
//   const { title, genre, publisher, year, imageURL } = req.body;

//   const books = await models.Book.build({
//     title: title,
//     genre: genre,
//     publisher: publisher,
//     year: year,
//     imageURL: imageURL,
//   });
//   const persistedBooks = await books.save();
//   if (persistedBooks != null) {
//     res.json({ success: true });
//   }
// });

app.post("/", (req, res) => {
  const { title, genre, publisher, year, imageURL } = req.body;

  const addBooks = models.Book.build({
    title: title,
    genre: genre,
    publisher: publisher,
    year: year,
    imageURL: imageURL,
  });
  addBooks.save().then((BookSave) => {
    res.json({ success: true });
  });
});

app.get("/", async (req, res) => {
  const books = await models.Book.findAll();
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
