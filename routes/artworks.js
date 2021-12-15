var express = require("express");
var router = express.Router();

/* GET artworks listing. */
router.get("/", function (req, res, next) {
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

module.exports = router;
