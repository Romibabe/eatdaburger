// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//This is for the root. Also a get request:
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/", function(req, res) {
  console.log(req.body);
  burger.insertOne(
    {
      burger_name: req.body.name,
      devoured: 0
    }
    , function() {
    res.redirect("/");
  });

});

//This is a put route. When the user clicks on the submit button, the new burger is then added to the DB.
router.put("/:id", function(req, res) {
  burger.updateOne(
  {
    devoured: req.body.devoured
  },
  {
    id: req.params.id
  }, function() {
    res.redirect("/");
  });
});


//Exporting to server.js:
module.exports = router;


