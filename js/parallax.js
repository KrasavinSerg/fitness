$(function () {
  $('.offer-top__wrap-right').on('mousemove', function (e) {
    $('.parallax').css({
      left: e.pageX / 50 + 1,
      top: e.pageY / 50 + 1
    });
  });
});