queryString.parse(url);

var req = new XMLHttpRequest;
var imdbArray = [];
function findImdbId() {
  for (var i = 0; i < response.Search.length; i++) {
  imdbArray[i] = response.Search[i].imdbID
  }
  return imdbArray
};


var imdbId = imdbArray[i];
var url = "http://www.omdbapi.com/?i=" + parseInt(imdbId);
req.open('GET', url)
req.addEventListener('load', function(){
  var response = JSON.parse(req.responseText);
  var h1 = document.createElement('h1');
  h1.innerHTML = response.Title
  document.appendChild('h1');
});
req.send(null);
