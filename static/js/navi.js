// $('#navigator > .navi_btn').on('click', function(e) {
//     if($(e.target).is('a')) {
//         var str = e.target.innerText;
//         str = str.toLowerCase().replace(' ', '');
//         // console.log(str);
//         $('#content').load('/main/' + str + '.html');
//     }
// });

var contentList = document.querySelectorAll("#content div");

var naviBtns = document.querySelectorAll("#navigator > .navi_btn");
for (var btn of naviBtns) {
  btn.addEventListener("click", function (event) {
    // textContent(Non-Styled) is better than innerText(Styled -> Reflow, Repaint) when you wanna get only text.
    var btnText = event.target.textContent.toLowerCase().replace(" ", "");
    for (var content of contentList) {
      var classList = content.classList;
      if (classList.contains(btnText)) {
        if (classList.contains("hidden")) classList.remove("hidden");
      } else {
        if (!classList.contains("hidden")) classList.add("hidden");
      }
    }
  });
}
