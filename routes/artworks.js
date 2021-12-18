var express = require("express");
var router = express.Router();
var Artwork = require("../models/artwork")

/* GET artworks listing. */
router.get("/one", function (req, res, next) {
  let data = {
    artwork: { title: "Fikrisabit", description: "Hali vakti yerinde" },
  };

  res.format({
    html: function () {
      res.render("artwork", data);
    },
    json: function () {
      res.status(200).json(data);
    },
  });
});

router.get("/", function (req, res, next) {
  let allArtworks = Artwork.all();
  res.format({
    json: function () {
      res.status(200).json(allArtworks);
    },
  });
});

module.exports = router;
