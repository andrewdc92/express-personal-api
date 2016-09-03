console.log("Sanity Check: JS is working!");

var place_listtwo = "./places.js"
var $placesList;

$(document).on("ready",function(){
    initMap();
    $placesList = $.ajax({
      method: "GET",
      url: place_list
  })
    .done(function(response){
      console.log("success!");
      var place_list = response.place_listtwo
    })

var source = $('#places-li-template').html();

var template = Handlebars.compile(source);

var placesHtml = template({
  city: place_list.city,
  state: place_list.state,
  country: place_list.country,
});
console.log(placesHtml);

$("#places_list").append(placesHtml);
// your code

});
