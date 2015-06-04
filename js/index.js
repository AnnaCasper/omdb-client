var button = document.getElementById('search-button');

button.addEventListener('click', function(){
  event.preventDefault();
  var h1 = document.createElement('h1');
  var input = document.getElementsByTagName('input')[0].value;
  h1.innerHTML = "";
  h1.innerHTML = "OMDB Movies About" + " " + "'" + input + "'";
  document.body.appendChild(h1);

  var xhr = new XMLHttpRequest;
  xhr.open('GET', 'http://www.omdbapi.com/?s=' + input);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.responseText);

    for (var i = 0; i < response.Search.length; i++) {
      var a = document.createElement('a');
      a.innerHTML = "";
      a.innerHTML = response.Search[i].Title;
      var url = "";
      url = "/show.html?" + "i=" + response.Search[i].imdbID;
      a.href = url;
      var p = document.createElement('p');
      p.appendChild(a);
      document.body.appendChild(p);
  };
});
  xhr.send(null);
});
