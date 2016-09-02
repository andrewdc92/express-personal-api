var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personal-api");

// module.exports.Campsite = require("./campsite.js.example");
module.exports.Concert = require("./concerts.js")
module.exports.Place = require("./places.js")
// do i want or need a module for profile here? ie, i want to reference
// profile on 1st page, no need to reference it through a module?
