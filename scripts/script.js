
document.addEventListener("click", (is_close) => {

    if (is_close.target.className == "donate") {

        document.querySelector('.overlay').classList.add('active');
        document.querySelector('.modal').classList.add('active');

    }

    if (is_close.target.className == "modal__form__button") {

        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('.modal').classList.remove('active');

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


window.addEventListener('scroll', () => {
  var currentScrollPos = window.pageYOffset;

  if(currentScrollPos > 1000) {
    document.querySelector('.refund').classList.add('active');
  }

  else {
    document.querySelector('.refund').classList.remove('active');
  }
})