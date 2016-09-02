// require express and other modules
var express = require('express'),
    app = express();


// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS"

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/
var mongoose = require('mongoose');
var db = require('./models');

// var concert = new Object();
//   concert.venue = "Roseland Ballroom";
//   concert.artist = "Lamb of God";
//   concert.city = "New York City";
//
// var place = new Object();
//   place.state = "New Jersey";
//   place.city = "Newark";
  // place.gps = 40.7357° N, 74.1724° W;

  var profile_data =
  {
      name: "Andrew Cordivari",
      documentationUrl: "https://github.com/andrewdc92/andrewdc92.github.io",
      baseUrl: "https://floating-crag-42747.herokuapp.com/",
      currentCity: "San Francisco",
      pets:[{name: "Kevin", species: "cat", breed: "Abyssinian", color: "Orange/Striped"}],
      familyMembers: [
        { name: 'Raquel Cordivari', relationship: 'sister'},
        { name: 'Matt Cordivari', relationship: 'brother'},
        { name: 'William Cordivari', relationship: 'brother'},
        { name: 'Jackie McGill-Cordivari', relationship: 'sister'},
      ]
    }

/**********
 * ROUTES *
 **********/
 app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

/*
 * JSON API Endpoints
 */
 // A first draft of your Documented API Endpoints
 // A Profile Endpoint
 // The GET route that responds with all of your custom resources.
 // For example, if you did pets, you should be able to GET /api/pets.


app.get('/api', function(req, res){
        res.json(profile_data);
    });


app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/profile', function(req, res){
      res.json(profile_data);
  });

app.get('/api/concerts'), function(req, res){
  res.json()
}

app.post('/api/concerts', function (req, res) {
  // create new book with form data (`req.body`)
  var newConcert = new db.Concert ({
    venue: req.body.venue,
    artist: req.body.artist,
    city: req.body.city,
  });
});

app.post('/api/places', function (req, res) {
  // create new book with form data (`req.body`)
  var newPlace = new db.Place ({
    city: req.body.city,
    state: req.body.state,
    gps: req.body.gps,
  });
});

// Schema = mongoose.Schema;
//
// var profile = new Object();
//   firstName: "Andrew";
//   lastName: "Cordivari";
  // githubLink: "https://github.com/andrewdc92/andrewdc92.github.io";
//   githubProfileImage: "";
//   personalSiteLink: "https://andrewdc92.github.io/";
//   currentCity: "San Francisco";
//   pets: [name: "Kevin", species: "cat", breed: "Abyssinian", color: "Orange/Striped"]
//
// var ProfileSchema = new Schema ({
//   firstName: String,
//   lastName: String,
//   githubLink: String,
//   githubProfileImage: String,
//   personalSiteLink: String,
//   currentCity: String,
//   pets: Array,
// })


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
