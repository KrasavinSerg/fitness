$(function () {
  $('.offer-top__wrap-left').on('mousemove', function (e) {
    $('.first').css({
      left: -e.pageX / 10 + 100,
      top: -e.pageY / 10 + 100
    });
    $('.second').css({
      left: e.pageX / 50 + 200,
      top: e.pageY / 50 + 200
    });
  });
});