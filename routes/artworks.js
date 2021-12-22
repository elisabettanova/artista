var express = require("express");
var router = express.Router();
var Artwork = require("../models/artwork")

// READ
/* GET artworks listing. */
// TODO: We should update correct error code
router.get("/:id", function (req, res, next) {
  const id = req.params.id
  Artwork.one(id, function(err, artwork){
    if (err) {
      response.status(404, "The artwork is not found").send();
    } else {
      res.format({
        html: function () {
          console.log(artwork)
          res.render("artwork", artwork);
        },
        json: function () {
          res.status(200).json(artwork);
        },
      });
    }
  });
});

// TODO: Update the router, if there is an error, send the correct status
router.get("/", function (req, res, next) {
  Artwork.all(function(err, artworks){
    res.format({
      json: function () {
        res.status(200).json(artworks);
      },
    });
  })
});

// CREATE
// I think we need the callback here
// what if we had some error in the model side
// TODO: Update the router, if there is an error, send the correct status
router.post("/", function (req, res, next) {
  const newArtwork = req.body;
  Artwork.add(newArtwork);
  response.status(201).json();
});

// UPDATE
// TODO: We should update correct error code
// TODO: Request should be req to be compatible with other functions
router.put("/:id", (request, response) => {
  const id = request.params.id;
  const updatedArtwork = request.body;
  updatedArtwork.id = parseInt(id);
  Artwork.update(updatedArtwork, (err, data) => {
    if (err) {
      response.status(404, "The artwork is not found").send();
    } else {
      response.status(204).send(data);
    }
  });
});

// DELETE
// TODO: We should update correct error code
router.delete("/:id", (request, response) => {
  const id = parseInt(request.params.id);
  Artwork.delete(id, (err) => {
    console.log(err)
    if (err) {
      response.status(404).send();
    } else {
      response.status(200).send();
    }
  });
});

module.exports = router;
