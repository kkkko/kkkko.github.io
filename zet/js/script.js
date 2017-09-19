$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

$(window).scroll(function() {
    $('.services-column' ).each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+970) {
      	$(this).addClass('animated');
        $(this).addClass('fadeInDown');
      }
    });
    $('.team-profile-col' ).each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1800) {
      	$(this).addClass('animated');
        $(this).addClass('fadeInDown');
      }
    });
  });
