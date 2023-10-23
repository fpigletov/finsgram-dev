'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const wrapper = document.querySelector('.wrapper');
  const headerMenu = document.querySelector('.header__menu');
  const headerBurger = document.querySelector('.header__burger');
  const registerBtn = document.querySelector('.header__register');
  const headerActions = document.querySelector('.header__actions');
  const headerBtns = document.querySelector('.header__btns');
  const scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';

  //Header Menu
  function headerMenuActions() {
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      if (headerMenu.classList.contains('active')) {
        document.body.style.paddingRight = scrollWidth;
        header.style.paddingRight = scrollWidth;
        document.body.classList.add('hidden');

      } else {
        document.body.classList.remove('hidden');
        document.body.style.paddingRight = '';
        header.style.paddingRight = '';
      }
    }
  }

  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');

    headerMenuActions();

    let ariaLabel = headerBurger.getAttribute('aria-label');
    if (ariaLabel === 'Открыть меню') {
      headerBurger.setAttribute('aria-label', 'Закрыть меню');
    } else {
      headerBurger.setAttribute('aria-label', 'Открыть меню');
    }

  });

  document.addEventListener('keydown', (e) => {

    if (e.code === 'Escape') {
      removeClasses();
    }

  });

  function removeClasses() {
    if (headerMenu.classList.contains('active')) {
      headerMenu.classList.remove('active');
      headerMenuActions();
    }

    if (headerBurger.classList.contains('active')) {
      headerBurger.classList.remove('active');
    }
  }

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('header__link')) {
      e.preventDefault();
      removeClasses();
    }

  });

  //Active Header
  function headerOnScroll() {
    if (window.scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }

  //Header Dinamic Adaptiv
  function dinamicAdaptiv() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);

    if (viewportWidth <= 768) {
      headerActions.append(registerBtn);
    } else {
      headerBtns.prepend(registerBtn)
    }

  }

  window.addEventListener('resize', () => {
    dinamicAdaptiv();
  });

  window.addEventListener('scroll', () => {
    headerOnScroll();
  });

  window.addEventListener('load', () => {
    dinamicAdaptiv();
    headerOnScroll();
  });
});


