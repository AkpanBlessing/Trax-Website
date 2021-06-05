
                // ADDING CLICK EVENTS TO TOGGLE MENU BAR

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close')
const mobileMenu = document.querySelector('#mobile-list-wrap');
const searchIcon = document.querySelector('#search-icon')
const searchTxt = document.querySelector('.search-txt')
const searchIconTwo = document.querySelector('#search-icon-2')
const searchTxtTwo = document.querySelector('.search-txt-2')


menuOpen.addEventListener('click', function(){
  if(mobileMenu.classList.contains('tw-hidden')){
    mobileMenu.classList.remove('tw-hidden')
  }
    menuClose.addEventListener('click', function(){
      mobileMenu.classList.add('tw-hidden')
    })
})

searchIcon.addEventListener('click', function(){
  searchTxt.focus();

})
searchIconTwo.addEventListener('click', function(){
  searchTxtTwo.focus();
})

$(window).scroll(function(){
  $('.nav-bg').toggleClass('scrolled',$(this).scrollTop()>50);
  $('.bar1').toggleClass('scrolled',$(this).scrollTop()>50);
  $('.bar2').toggleClass('scrolled',$(this).scrollTop()>50);
  $('.bar3').toggleClass('scrolled',$(this).scrollTop()>50);
  $('.txt-color').toggleClass('scrolled',$(this).scrollTop()>50);
  $('.nav-li').toggleClass('scrolled',$(this).scrollTop()>50);
  $('.nav-a').toggleClass('scrolled',$(this).scrollTop()>50);
  $('#home').toggleClass('scrolled',$(this).scrollTop()>50);
  $('.search-icon').toggleClass('scrolled',$(this).scrollTop()>50);
  $('#menu-open').toggleClass('scrolled',$(this).scrollTop()>50);
  $('.pad-scroll').toggleClass('scrolled',$(this).scrollTop()>50);
})

// INITIALIZING slidder

$(document).ready(function(){
  $('.slidder').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
  });
});
