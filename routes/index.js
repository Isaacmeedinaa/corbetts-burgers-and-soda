const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile("public/index.html", {
    root: "./",
  });
});

router.get("/our-menu", function (req, res, next) {
  res.sendFile("public/our-menu.html", {
    root: "./",
  });
});

router.get("/gallery", function (req, res, next) {
  res.sendFile("public/gallery.html", {
    root: "./",
  });
});

router.get("/contact-us", function (req, res, next) {
  res.sendFile("public/contact-us.html", {
    root: "./",
  });
});

module.exports = router;
