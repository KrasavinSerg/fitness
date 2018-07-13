$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
    $('.header__container').addClass('header__container--min');
  }
  else{
    $('.header__container').removeClass('header__container--min');
  }
});
