const menuIcon = document.getElementById('menuIcon')
const mobileMenu = document.getElementById('mobileMenu')
const content = document.querySelector('.page-main')

// Обработчик клика по иконке меню
menuIcon.addEventListener('click', function () {
  this.classList.toggle('active')
  mobileMenu.classList.toggle('active')
  content.classList.toggle('active')
})

// Обработчик клика по пункту меню
mobileMenu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    menuIcon.classList.remove('active')
    mobileMenu.classList.remove('active')
    content.classList.remove('active')
  }
})
