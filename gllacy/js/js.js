var searchPopup = document.querySelector(".search-show");
var searchForm = searchPopup.querySelector("form");
var searchContains = searchPopup.querySelector("[name=search]");

var loginPopup = document.querySelector(".login-show");
var loginForm = loginPopup.querySelector(".login-form")
var login = loginPopup.querySelector("[name=login]");
var password = loginPopup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

var feedbackLink = document.querySelector(".index-feedback-btn");
var feedbackPopup = document.querySelector(".modal-content-feedback");
var feedbackOpen = document.querySelector(".js-open-feedback");
var feedbackClose = document.querySelector(".feedback-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var feedbackName = feedbackPopup.querySelector("[name=name]");
var feedbackMail = feedbackPopup.querySelector("[name=mail]");
var feedbackText = feedbackPopup.querySelector(".feedback-text");

var overlay = document.querySelector(".overlay-off");

searchForm.addEventListener("submit", function(event) {
  if (!searchContains.value) {
      event.preventDefault ();
      searchPopup.classList.add("modal-error");
  } else {
      localStorage.setItem("search", searchContains.value);
   }
  });

searchForm.addEventListener("mouseout", function(event) {
  event.preventDefault();
  searchPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
      event.preventDefault ();
      loginPopup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

loginForm.addEventListener("mouseout", function(event) {
  event.preventDefault();
  loginPopup.classList.remove("modal-error");
});

feedbackLink.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("feedback-show");
  overlay.classList.add("overlay-on");
});


feedbackForm.addEventListener("submit", function(event) {
  if (!feedbackName.value || !feedbackMail.value || !feedbackText.value) {
      event.preventDefault ();
      feedbackPopup.classList.add("modal-error");
  } else {
      localStorage.setItem("feedbackName", feedbackName.value);
  }
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("feedback-show");
  feedbackPopup.classList.remove("modal-error");
  overlay.classList.remove("overlay-on");
  }); 

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (feedbackPopup.classList.contains("feedback-show")) {
      feedbackPopup.classList.remove("feedback-show");
       overlay.classList.remove("overlay-on");
      }
    }
});

