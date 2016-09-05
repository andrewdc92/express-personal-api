console.log("Sanity Check: JS is working!");

var place_listtwo = "./places.js"
var $placesList;
var template;

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 8
  });
}


$(document).on("ready",function(){
  $concertsList = $('#concertsList');


  var source = $('#concerts-li-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/concerts',
    success: onSuccess,
    error: onError
  });

  $('#newConcertForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/concerts',
      data: $(this).serialize(),
      success: newConcertSuccess,
      error: newConcertError
    });
  });

  $concertsList.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/books/'+$(this).attr('data-id'),
      success: deleteConcertSuccess,
      error: deleteConcertError
    });
  });
});

function render() {
  $concertsList.empty();
  var concertsHtml = template({ concerts: allConcerts });
  $concertsList.append(concertsHtml);
};

function onSuccess(json) {
    allConcerts = json;
    render();
}
function onError(e) {
  console.log("Sorry, that didn't work out!");
  $('#concertsList').text('Could not load concerts');
}

function newConcertSuccess(json) {
  $('#newConcertForm input').val('');
  allConcerts.push(json);
  render();
}

function newConcertError() {

}

function deleteConcertSuccess(json) {
  var book = json;
  var bookId = book._id;

  for(var index = 0; index < allConcerts.length; index++) {
    if(allConcerts[index]._id === concertId) {
      allConcerts.splice(index, 1);
      break;
    }
  }
  render();
}
function deleteConcertError() {

}
