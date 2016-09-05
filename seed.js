// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');


var place_list = [
  {
  city: "New York City",
  state: "New York",
  country: "United States",
  },
  {
  city: "New York City",
  state: "New York",
  country: "United States",
  },
  {
  city: "Brooklyn",
  state: "New York",
  country: "United States",
  },
  {
  city: "New York City",
  state: "New York",
  country: "United States",
  }
];

var concert_list = [
  {
  artist: "Lamb of God",
  venue: "Roseland Ballroom",
  location: "New York City"
  },
  {
    artist: "Ratatat",
    venue: "Terminal 5",
    location: "New York City"
  },
  {
    artist: "Jack Beats, AC Slater",
    venue: "Verboten",
    location: "New York City"
  },
  {
    artist: "Twiddle",
    venue: "Irving Plaza",
    location: "New York City"
  },
];






db.Place.create(place_list, function(err, place){
  if (err){
    return console.log("Error", err)
  }
// });
// db.Concert.create(concert_list, function(err, concert){
//   if (err){
//     return console.log("Error:", err);
//   }

// db.Place.create(place_list, function(err, place){
//   if (err){
//     return console.log("Error", err)
//   }
// });
  process.exit();
});
// db.Concert.create(concert_list, function(err, concert){
//   if (err){
//     return console.log("Error:", err);
//   }
  // console.log(concert_list);
//     db.Place.remove({}, function(err, places) {
//     console.log('removed all places');
//     db.Place.create(place_list, function(err, places){
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log('recreated all authors');
//       console.log("created", authors.length, "authors");
//     db.Concert.remove({}, function(err, concerts){
//         console.log('removed all concerts');
//         concert_list.forEach(function (concertData) {
//         var concert = new db.Concert({
//           artist: concertData.artist,
//           venue: concertData.venue,
//         });
//       });
//     });
//   });
// });
      // db.Concert.create(concert_list, function(err, concert){
      //   if (err){
      //     return console.log("Error:", err);
      //   }
      //   return console.log("concert created!")
      // });
