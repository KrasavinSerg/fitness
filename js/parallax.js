$(function () {
  $('.offer-top__wrap-left').on('mousemove', function (e) {
    $('.first').css({
      left: -e.pageX / 50 + 1,
      top: -e.pageY / 50 + 1
    });
  });
});

$(function () {
  $('.offer-top__wrap-right').on('mousemove', function (e) {
    $('.second').css({
      left: e.pageX / 50 + 1,
      top: e.pageY / 50 + 1
    });
  });
});