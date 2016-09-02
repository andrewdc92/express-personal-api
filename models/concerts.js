var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// pulling in data for a bunch of the concerts I attended in NYC
var ConcertSchema = new Schema ({
  venue: String,
  artist: String,
});

var Concert = mongoose.model('Concert', ConcertSchema);

module.exports = Concert;
