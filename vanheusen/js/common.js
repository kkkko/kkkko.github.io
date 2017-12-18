
"use strict";

var banners = document.querySelector(".top-banners");


var bannerMen = document.querySelector(".top__banner_men");
var menIndicators = bannerMen.querySelector(".carousel-indicators");
var menSocial = bannerMen.querySelectorAll(".social-btn");
var menTitle = bannerMen.querySelectorAll(".top__banner-title");
var menSlideNumber = bannerMen.querySelectorAll(".slide-number");


var bannerWomen = document.querySelector(".top__banner_women");
var womenIndicators = bannerWomen.querySelector(".carousel-indicators");
var womenSocial = bannerWomen.querySelectorAll(".social-btn");
var womenTitle = bannerWomen.querySelectorAll(".top__banner-title");
var womenSlideNumber = bannerWomen.querySelectorAll(".slide-number");


function menSocialShow () {
  for (var i = 0; i < menSocial.length; i++){
  	menSocial[i].classList.remove("hidden");
  }
}
function menSocialHide () {
  for (var i = 0; i < menSocial.length; i++){
  	menSocial[i].classList.add("hidden");
  }
}
function menTitleShow () {
  for (var i = 0; i < menTitle.length; i++){
  	menTitle[i].classList.remove("hidden");
  }
}
function menTitleHide () {
  for (var i = 0; i < menTitle.length; i++){
  	menTitle[i].classList.add("hidden");
  }
}
function menSlideNumberShow () {
  for (var i = 0; i < menSlideNumber.length; i++){
  	menSlideNumber[i].classList.remove("hidden");
  }
}
function menSlideNumberHide () {
  for (var i = 0; i < menSlideNumber.length; i++){
  	menSlideNumber[i].classList.add("hidden");
  }
}
function menTitleMargin () {
  for (var i = 0; i < menTitle.length; i++){
  	menTitle[i].style.marginTop="-5%";
  }
}
function menSlideNumberMargin () {
  for (var i = 0; i < menSlideNumber.length; i++){
  	menSlideNumber[i].style.bottom="-65%";
  }
}


function womenSocialShow () {
  for (var i = 0; i < womenSocial.length; i++){
  	womenSocial[i].classList.remove("hidden");
  }
}
function womenSocialHide () {
  for (var i = 0; i < womenSocial.length; i++){
  	womenSocial[i].classList.add("hidden");
  }
}
function womenTitleShow () {
  for (var i = 0; i < womenTitle.length; i++){
  	womenTitle[i].classList.remove("hidden");
  }
}
function womenTitleHide () {
  for (var i = 0; i < womenTitle.length; i++){
  	womenTitle[i].classList.add("hidden");
  }
}
function womenSlideNumberShow () {
  for (var i = 0; i < womenSlideNumber.length; i++){
  	womenSlideNumber[i].classList.remove("hidden");
  }
}
function womenSlideNumberHide () {
  for (var i = 0; i < womenSlideNumber.length; i++){
  	womenSlideNumber[i].classList.add("hidden");
  }
}
function WomenTitleMargin () {
  for (var i = 0; i < womenTitle.length; i++){
  	womenTitle[i].style.marginTop="-5%";
  }
}
function WomenSlideNumberMargin () {
  for (var i = 0; i < womenSlideNumber.length; i++){
  	womenSlideNumber[i].style.bottom="-65%";
  }
}


bannerMen.onmouseover = function shomMen (event) {
	bannerMen.classList.add("top__banner_men-hover");
  menIndicators.classList.remove("hidden");
	menSocialShow();
	menTitleShow();
	menSlideNumberShow();
}

bannerMen.onmouseout = function hideMen (event) {
	bannerMen.classList.remove("top__banner_men-hover");
	menIndicators.classList.add("hidden");
	menSocialHide();
	menTitleHide();
	menSlideNumberHide();
}

bannerWomen.onmouseover = function (event) {
	bannerWomen.classList.add("top__banner_women-hover")
	womenIndicators.classList.remove("hidden");
	womenSocialShow();
	womenTitleShow();
	womenSlideNumberShow();
}

bannerWomen.onmouseout = function (event) {
	bannerWomen.classList.remove("top__banner_women-hover")
	womenIndicators.classList.add("hidden");
	womenSocialHide();
	womenTitleHide();
	womenSlideNumberHide();
}

bannerMen.onclick = function (event) {
  bannerWomen.style.visibility="hidden";
  bannerMen.classList.remove("top__banner_men-hover");
	bannerMen.classList.add("top__banner_men-all-width");
	menIndicators.style.left="0";
	menTitleMargin();
	menSlideNumberMargin();
	bannerMen.onmouseout = function (event) {
    bannerWomen.style.visibility="hidden";
		bannerMen.classList.remove("top__banner_men-hover");
    bannerMen.classList.add("top__banner_men-all-width");
		menIndicators.style.left="0";
	}
	bannerMen.onmouseover = function (event) {
    bannerWomen.style.visibility="hidden";
		bannerMen.classList.remove("top__banner_men-hover");
    bannerMen.classList.add("top__banner_men-all-width");
		menIndicators.style.left="0";
	}
}

bannerWomen.onclick = function (event) {
  bannerMen.style.visibility="hidden";
	bannerWomen.classList.remove("top__banner_women-hover");
  bannerWomen.classList.add("top__banner_women-all-width");
	womenIndicators.style.right="0";
	WomenTitleMargin();
	WomenSlideNumberMargin();
	bannerWomen.onmouseout = function (event) {
    bannerMen.style.visibility="hidden";
		bannerWomen.classList.remove("top__banner_women-hover");
    bannerWomen.classList.add("top__banner_women-all-width");
		womenIndicators.style.right="0";
	}
	bannerWomen.onmouseover = function (event) {
    bannerMen.style.visibility="hidden";
		bannerWomen.classList.remove("top__banner_women-hover");
    bannerWomen.classList.add("top__banner_women-all-width");
		womenIndicators.style.right="0";
	}
}
function scrollTo(element) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

document.getElementById("carouselExampleIndicators").addEventListener('click', function () {
  scrollTo(document.getElementById("men"));
});