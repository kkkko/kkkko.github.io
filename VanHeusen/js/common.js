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


bannerMen.onmouseover = function shomMen (event) {
	bannerMen.style.maxHeight="85vh";
	bannerMen.style.left="5%";
	bannerMen.style.opacity="1";
	bannerMen.style.zIndex="20";
	menIndicators.classList.remove("hidden");
	menSocialShow();
	menTitleShow();
	menSlideNumberShow();
}

bannerMen.onmouseout = function hideMen (event) {
	bannerMen.style.maxHeight="80vh";
	bannerMen.style.left="0%";
	bannerMen.style.opacity="0.5";
	bannerMen.style.zIndex="1";
	menIndicators.classList.add("hidden");
	menSocialHide();
	menTitleHide();
	menSlideNumberHide();
}

bannerWomen.onmouseover = function (event) {
	bannerWomen.style.maxHeight="85vh";
	bannerWomen.style.right="5%";
	bannerWomen.style.opacity="1";
	bannerWomen.style.zIndex="10";
	womenIndicators.classList.remove("hidden");
	womenSocialShow();
	womenTitleShow();
	womenSlideNumberShow();
}

bannerWomen.onmouseout = function (event) {
	bannerWomen.style.maxHeight="80vh";
	bannerWomen.style.right="0";
	bannerWomen.style.opacity="0.5";
	bannerMen.style.zIndex="1";
	womenIndicators.classList.add("hidden");
	womenSocialHide();
	womenTitleHide();
	womenSlideNumberHide();
}

bannerMen.onclick = function (event) {
	bannerMen.style.left="50%";
	bannerMen.style.opacity="1";
	bannerMen.style.transition="1s";
	menIndicators.style.left="0";
	bannerMen.onmouseout = function (event) {
		bannerMen.style.left="50%";
		bannerMen.style.opacity="1";
		bannerMen.style.transition="1s";
		menIndicators.style.left="0";
	}
	bannerMen.onmouseover = function (event) {
		bannerMen.style.left="50%";
		bannerMen.style.opacity="1";
		bannerMen.style.transition="1s";
		menIndicators.style.left="0";
	}
}

bannerWomen.onclick = function (event) {
	bannerWomen.style.right="50%";
	bannerWomen.style.opacity="1";
	bannerWomen.style.transition="1s";
	womenIndicators.style.right="0";
	bannerWomen.onmouseout = function (event) {
		bannerWomen.style.right="50%";
		bannerWomen.style.opacity="1";
		bannerWomen.style.transition="1s";
		womenIndicators.style.right="0";
	}
	bannerWomen.onmouseover = function (event) {
		bannerWomen.style.right="50%";
		bannerWomen.style.opacity="1";
		bannerWomen.style.transition="1s";
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

document.getElementById("carouselExampleIndicators").addEventListener('click', () => {
  scrollTo(document.getElementById("men"));
});