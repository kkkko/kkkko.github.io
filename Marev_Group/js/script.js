var PopupLink = document.querySelector(".main-btn");
var Popup = document.querySelector(".popup");
var PopupClose = document.querySelector(".popup-close");

var overlay = document.querySelector(".overlay-off");

PopupLink.addEventListener("click", function(event) {
  event.preventDefault();
  Popup.classList.add("popup-show");
  overlay.classList.add("overlay-on");
});


PopupClose.addEventListener("click", function(event) {
  event.preventDefault();
  Popup.classList.remove("popup-show");
  overlay.classList.remove("overlay-on");
  }); 

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (Popup.classList.contains("popup-show")) {
      Popup.classList.remove("popup-show");
      overlay.classList.remove("overlay-on");
      }
    }
});