var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  city: String,
  state: String,
  country: String,
});

var Place = mongoose.model('Place', PlaceSchema);

module.exports = Place;


// var place_list = [
//   {
//   state: "New Jersey",
//   city: "Newark",
//   country: "United States",
//   },
//   {
//   state: "Florida",
//   city: "West Palm Beach",
//   country: "United States",
//   },
//   {
//   state: "New York",
//   city: "Bronx",
//   country: "United States",
//   },
// ];
