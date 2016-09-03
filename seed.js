// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');



var concert_list = [
  {
  venue: "Roseland Ballroom",
  artist: "Lamb of God",
  },
  {
    venue: "Terminal 5",
    artist: "Ratatat",
  },
  {
    venue: "Verboten",
    artist: "Jack Beats, AC Slater"
  },
  {
    venue: "Irving Plaza",
    artist: "Twiddle",
  },
];



var place_list = [
  {
  state: "New Jersey",
  city: "Newark",
  },
  {
  state: "Florida",
  city: "West Palm Beach",
  },
  {
  state: "New York",
  city: "Bronx",
  },
];

db.Concert.create(concert_list, function(err, concert){
  if (err){
    return console.log("Error:", err);
  }
  console.log(concert_list);
  // db.Concert.remove({}, function(err, concerts){
  //     console.log('removed all concerts');
  //     db.Concert.create(concert_list, function(err, concert){
  //       if (err){
  //         return console.log("Error:", err);
  //       }
  //       return console.log("concert created!")
  //     });
      process.exit()
    });
