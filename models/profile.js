var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var ProfileSchema = new Schema ({
   firstName: String,
   lastName: String,
   githubLink: String,
   githubProfileImage: String,
   personalSiteLink: String,
   currentCity: String,
   pets: Array,
   familyMembers: Array,
 })

 var Profile = mongoose.model('Profile', ProfileSchema);

 module.exports.Profile = require("./profile.js")


 var profile_data =
 {
     name: "Andrew Cordivari",
     personalSiteLink: "https://github.com/andrewdc92/andrewdc92.github.io",
     githubLink: "https://andrewdc92.github.io",
     currentCity: "San Francisco",
     pets:[{name: "Kevin", species: "cat", breed: "Abyssinian", color: "Orange/Striped"}],
     familyMembers: [
       { name: 'Raquel Cordivari', relationship: 'sister'},
       { name: 'Matt Cordivari', relationship: 'brother'},
       { name: 'William Cordivari', relationship: 'brother'},
       { name: 'Jackie McGill-Cordivari', relationship: 'sister'},
     ]
   }
