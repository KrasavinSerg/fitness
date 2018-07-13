var clock = $('.counter__clock').FlipClock({
  // clockFace : 'DailyCounter',
  autoStart : false,
  language:'ru-ru',
  callbacks : {
    stop : function () {
      $('.message').html('Время истекло');
    }
  }
});

var dt = ('2018/07/13 23:59:59'); //Дата до которой нужен таймер
var first = new Date(dt);
var last = Date.now();
var remaining = first - last;
remaining /= 1000;

clock.setTime(remaining);
clock.setCountdown(true);
clock.start();
