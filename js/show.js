function parseQueryString (queryString) {
var splitUrl = {};
    splitUrl = document.location.search
    splitUrl = splitUrl.replace("?", "");
    splitUrl = splitUrl.split("&");
var imdbObject = {};
  for (var i = 0; i < splitUrl.length; i++) {
    var imdbId = splitUrl[i].split("=")
      imdbObject[imdbId[0]] = imdbId[1];
  }
  return imdbObject
};

var id = parseQueryString().i;

var req = new XMLHttpRequest;
var getUrl = "http://www.omdbapi.com/?i=" + id;
req.open('GET', getUrl);
req.addEventListener('load', function(){
  var response = JSON.parse(req.responseText);
  

    for (var key in response) {
      if (key === "Title") {
        var h1 = document.createElement('h1')
        h1.innerHTML = response[key]
        document.body.appendChild(h1)
      } else if (key === "Poster") {
        var img = document.createElement('img')
        img.src = response[key]
        document.body.appendChild(img);
      }  else {
        var p = document.createElement('p')
        p.innerHTML = key + ": " + response[key]
        document.body.appendChild(p);
      }
    }
});
req.send(null);
