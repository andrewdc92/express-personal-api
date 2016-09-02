var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlaceSchema = new Schema ({
  country: String,
  city: String,
  state: String,
  // gps: {
  //   lat: Number,
  //   lng: Number,
  // }
});

var Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;
