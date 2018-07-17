var offer = document.querySelector('#top__btn');
var modal1 = document.querySelector('#modal1');
var modal2 = document.querySelector('#modal2');
// var modal3 = document.querySelector('#modal3');
var close1 = document.querySelector('#close1');
var close2 = document.querySelector('#close2');
// var close3 = document.querySelector('#close3');
var address = document.querySelector('#address');
var address_bottom = document.querySelector('#address_bottom');
// var video = document.querySelector('#video');


offer.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal1.classList.add('modal-show');
});

close1.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal1.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal1.classList.contains('modal-show')) {
      modal1.classList.remove('modal-show');
    }
  }
});

address.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal2.classList.add('modal-show');
});

close2.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal2.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal2.classList.contains('modal-show')) {
    modal2.classList.remove('modal-show');
    }
  }
});

address_bottom.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal2.classList.add('modal-show');
});

close2.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal2.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal2.classList.contains('modal-show')) {
    modal2.classList.remove('modal-show');
    }
  }
});

// video.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   modal3.classList.add('modal-show');
// });

// close3.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   modal3.classList.remove('modal-show');
// });

// window.addEventListener('keydown', function (evt) {
//   if (evt.keyCode === 27) {
//     if (modal3.classList.contains('modal-show')) {
//       modal3.classList.remove('modal-show');
//     }
//   }
// });
