// Custom Scripts
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  

  document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            // Изменяем основное изображение
            mainImage.src = this.src;

            // Убираем активный класс у всех миниатюр
            thumbnails.forEach((thumb) => thumb.classList.remove("active"));

            // Добавляем активный класс выбранной миниатюре
            this.classList.add("active");
        });
    });
});

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='block') {
  const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector)
  function hideTabContent() {
      content.forEach(item => {
          item.style.display = 'none'
      });
      tab.forEach(item => {
          item.classList.remove(activeClass)
      });
  }
  function showTabContent(i = 0) {
  content[i].style.display = display
  tab[i].classList.add(activeClass)
  }
  hideTabContent()
  showTabContent()
  header.addEventListener('click', e => {
      const target = e.target
      if (target.classList.contains(tabSelector.replace(/\./, '')) || 
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
          tab.forEach((item, i) => {
              if ( target == item || target.parentNode == item ) {
                  hideTabContent()
                  showTabContent(i)
              }
          });
      }
  })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')

function toggleFavorite(button) {
  const favoriteIcon = button.querySelector('.favorite-icon');
  const inactiveSrc = '../img/favoriteli.png';
  const activeSrc = '../img/favoriteactive.png';

  // Проверяем текущее изображение и переключаем его
  if (favoriteIcon.src.includes('favoriteli.png')) {
      favoriteIcon.src = activeSrc;
  } else {
      favoriteIcon.src = inactiveSrc;
  }
}
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // Количество слайдов по умолчанию
  spaceBetween: 10, // Расстояние между слайдами
  breakpoints: {
      // Когда ширина окна <= 768px
      768: {
          slidesPerView: 2, // Показывать 2 слайда
      },
      // Когда ширина окна <= 480px
      480: {
          slidesPerView: 1, // Показывать 1 слайд
      },
      320: {
        slidesPerView: 1, // Показывать 1 слайд
    }
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});

