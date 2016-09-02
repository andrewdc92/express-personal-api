// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var concert_list = [
  {
  venue: "Roseland Ballroom",
  artist: "Lamb of God",
  city: "New York City",
},
  {
    venue: "Terminal 5",
    artist: "Ratatat",
    city: "New York City",
  },
  {
    venue: "Verboten",
    artist: "Jack Beats, AC Slater"
    city: "Brooklyn"
  },
  {
    venue: "Irving Plaza",
    artist: "Twiddle",
    city: "New York City",
  }
];



var place_list = [
  {
  state: "New Jersey",
  city: "Newark",
  // gps:
  },
  {
  state: "Florida",
  city: "West Palm Beach",
  },
  {
  state: "New York",
  city: "Bronx",
  },
]


  // SET UP THE DELETE FUNCTIONS HERE

// db.Profile.create(new_profile, function(err, profile){
//   if (err){
//     return console.log("Error:", err);
//   }
//     console.log("Created new profile",)
//     process.exit();
// })

// db.Place.create(new_place, function(err, place){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new place"),
//   process.exit();
// })
//
//
// db.Concert.create(new_concert, function(err, concert){
//   if (err){
//     return console.log("Error:", err);
//   }
//
//   console.log("Created new concert").
//   process.exit();
// })
