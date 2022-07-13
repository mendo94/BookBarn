const express = require("express");
const app = express();
const cors = require("cors");
const { Op } = require("sequelize");
const models = require("./models");
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

// app.get('/', async (req, res) => {
//     const

//     const books = await models.Book.findAll()

// })
app.get("/", async (req, res) => {
  const books = await models.Book.findAll();
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
