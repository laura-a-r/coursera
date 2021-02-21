$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  }); 
});

window.onload = function(){
  var home = new XMLHttpRequest();
home.onreadystatechange = function() {
  console.log("ku");
  console.log(home.readyState)
  console.log(home.status)
  if (home.readyState == 4 && home.status == 200) {
    document.getElementById("main-content").innerHTML =
    home.responseText;  
      // var objJason = JSON.parse(this.responseText); 
      // console.log(objJason);
      console.log(home.responseText); 
  }
};
home.open("GET", "home.snippet.html", true);
home.send();
  console.log("issiusta")
}

// document.getElementById("").addEventListener("click", function(){
//   var home = new XMLHttpRequest();
// home.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     document.getElementById("main-content").innerHTML =
//     this.responseText;  
//       // var objJason = JSON.parse(this.responseText); 
//       // console.log(objJason);
//       console.log(this.responseText); 
//   }
// };
// home.open("GET", "menu-categories.snippet", true);
// home.send();
// })