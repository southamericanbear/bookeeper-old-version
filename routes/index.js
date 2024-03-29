const express = require("express");
const router = express.Router();
const Book = require("../models/book");

router.get("/", async (req, res) => {
  let books;
  try {
    books = await Book.find()
      .populate("author")
      .sort({ createdAt: "desc" })
      .limit(10)
      .exec();
  } catch {
    books = [];
  }

  res.render("index", { books: books, searchOptions: req.query });
});

module.exports = router;
