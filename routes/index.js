const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("../views/authors/index");
});

module.exports = router;
