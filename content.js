// $('#content').load('/main/aboutme.html');

/*
var content = document.querySelector('#content');

var aboutmeXHR = new XMLHttpRequest();
aboutmeXHR.open('get', '/main/aboutme.html', true);
aboutmeXHR.send();
aboutmeXHR.onload = () => {
    var div = document.createElement('div');
    div.classList.add('aboutme');
    // div.classList.add('hidden');
    div.innerHTML = aboutmeXHR.responseText;
    content.appendChild(div);

    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.src = '/main/js/aboutme.js';
    content.appendChild(scr);
};

var articleXHR = new XMLHttpRequest();
articleXHR.open('get', '/main/articles.html', true);
articleXHR.send();
articleXHR.onload = () => {
    var div = document.createElement('div');
    div.classList.add('articles');
    div.classList.add('hidden');
    div.innerHTML = articleXHR.responseText;
    content.appendChild(div);
    
    // var scr = 
}
*/

var content = document.querySelector("#content");

var jsonXHR = new XMLHttpRequest();
jsonXHR.open("get", "/main/main_data.json");
jsonXHR.onload = () => {
  var jsonobj = jsonXHR.responseText;
  jsonobj = JSON.parse(jsonobj);

  var data = jsonobj["data"];

  for (var d of data) {
    var dataXHR = new XMLHttpRequest();
    dataXHR.open("get", d["HTMLURL"], false);
    dataXHR.onload = () => {
      var div = document.createElement("div");
      div.classList.add(d["name"]);
      div.classList.add("hidden");
      div.innerHTML = dataXHR.responseText;
      content.appendChild(div);

      if (d["hasJS"]) {
        var scr = document.createElement("script");
        scr.type = "text/javascript";
        scr.src = d["JSURL"];
        content.appendChild(scr);
      }
    };
    dataXHR.send();
  }
};
jsonXHR.onloadend = () => {
  var contentList = document.querySelectorAll("#content div");
  contentList[1].classList.remove("hidden");
  // console.log(contentList[1]);
};
jsonXHR.send();
