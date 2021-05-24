
                // ADDING CLICK EVENTS TO TOGGLE MENU BAR

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close')
const mobileMenu = document.querySelector('#mobile-list-wrap');

menuOpen.addEventListener('click', function(){
  if(mobileMenu.classList.contains('tw-hidden')){
    mobileMenu.classList.remove('tw-hidden')
  }
    menuClose.addEventListener('click', function(){
      mobileMenu.classList.add('tw-hidden')
    })
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
  $('#search-icon').toggleClass('scrolled',$(this).scrollTop()>50);
  $('#menu-open').toggleClass('scrolled',$(this).scrollTop()>50);

})
