var h1 = document.createElement('h1');
h1.innerHTML = "OMBD Movies About Pizza";
document.body.appendChild(h1);

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.omdbapi.com/?s=pizza');
xhr.addEventListener('load', function(){
  var response = JSON.parse(xhr.responseText);

  for (var i = 0; i < response.Search.length; i++) {


    var a = document.createElement('a');
    a.innerHTML = response.Search[i].Title;
    var url = "/show.html?" + "i=" + response.Search[i].imdbID;
    a.href = url
    var p = document.createElement('p');
    p.appendChild(a);
    document.body.appendChild(p);
  };
});
xhr.send(null);
