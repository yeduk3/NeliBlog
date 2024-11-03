// $('#header').load('/static/html/header.html');
// post로 하면 오류!!
var headerXHR = new XMLHttpRequest();
headerXHR.open("get", "/static/html/header.html", true);
headerXHR.send();
headerXHR.onload = () => {
  document.querySelector("#header").innerHTML = headerXHR.responseText;
};

// $('#navigator').load('/static/html/navi.html');
var naviXHR = new XMLHttpRequest();
naviXHR.open("get", "/static/html/navi.html", true);
naviXHR.send();
naviXHR.onload = () => {
  var navi = document.querySelector("#navigator");
  navi.innerHTML = naviXHR.responseText;

  // it is invalid from html 5 since security issue
  // navi.insertAdjacentHTML('afterbegin', responses[0] + '<SCRIPT DEFER>' + '<script' + responses[1]);'

  // 여기까지 굳이 파일을 읽을 필요가...
  var scr = document.createElement("script");
  scr.type = "text/javascript";
  scr.src = "/static/js/navi.js";
  navi.appendChild(scr);
};

// $('#footer').load('/static/html/footer.html');
var footerXHR = new XMLHttpRequest();
footerXHR.open("get", "/static/html/footer.html", true);
footerXHR.send();
footerXHR.onload = () => {
  document.querySelector("#footer").innerHTML = footerXHR.responseText;
};
