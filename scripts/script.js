
document.addEventListener("click", (is_close) => {

    if (is_close.target.className == "donate") {

      document.querySelector('.overlay').classList.add('active');
      document.querySelector('.modal').classList.add('active');

    }

    if (is_close.target.className == "modal__form__button") {

      document.querySelector('.overlay').classList.remove('active');
      document.querySelector('.modal').classList.remove('active');

    }
    if (is_close.target.className == "header__burger") {

      document.querySelector('.modal__nav').classList.add('active');
      document.querySelector('.overlay').classList.add('active');
    }
    if (is_close.target.className == "modal__nav__close_line") {

      document.querySelector('.modal__nav').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
    }
    if (is_close.target.className == "modal__nav__ref") {

      document.querySelector('.modal__nav').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
    }


});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let offset = 0;
const sliderLine = document.querySelector('.articles__bottom');

// document.querySelector('').addEventListener('click', function(){
//     offset = offset + 256;
//     if (offset > 768) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

document.querySelector('.row').addEventListener('click', function () {
  console.log('fsaf')
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';
});

