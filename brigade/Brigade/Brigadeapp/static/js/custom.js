$(document).ready(function(){
    const nav = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const menuToggle = document.querySelector('.nav__toggle');
    let isMenuOpen = false;
    
    
    // TOGGLE MENU ACTIVE STATE
    menuToggle.addEventListener('click', e => {
      e.preventDefault();
      isMenuOpen = !isMenuOpen;
      
      // toggle a11y attributes and active class
      menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
      menu.hidden = !isMenuOpen;
      nav.classList.toggle('nav--open');
    });
    
    
    // TRAP TAB INSIDE NAV WHEN OPEN
    nav.addEventListener('keydown', e => {
      // abort if menu isn't open or modifier keys are pressed
      if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }
      
      // listen for tab press and move focus
      // if we're on either end of the navigation
      const menuLinks = menu.querySelectorAll('.nav__link');
      if (e.keyCode === 9) {
        if (e.shiftKey) {
          if (document.activeElement === menuLinks[0]) {
            menuToggle.focus();
            e.preventDefault();
          }
        } else if (document.activeElement === menuToggle) {
          menuLinks[0].focus();
          e.preventDefault();
        }
      }
    });
    

    $('#catidalCar').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots:true
            },
            600:{
                items:3,
                nav:false,
                dots:true
            },
            1000:{
                items:7,
                nav:true,
                loop:true
            }
        }
    });
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 100) {
          $('header').addClass('fixed');
         }
         else {
          $('header').removeClass('fixed');
         }
      });
    $('#gallery-img').owlCarousel({
        loop:true,
        margin:10,
        slideTransition: 'linear',
        responsiveClass:true,
        center: true,
        responsive:{
            0:{
                items:2,
                nav:false,
                dots:true
            },
            600:{
                items:2,
                nav:false,
                dots:true
            },
            1000:{
                items:2,
                nav:true,
                loop:true,
                slideBy:1
            }
        }
    });
    $(".owl-prev").html('<i class="fas fa-arrow-left"></i>');
    $(".owl-next").html('<i class="fas fa-arrow-right"></i>');
    $("header .btn-type1").click(function(){
        $("#modalFormOne").modal("show");
    });
    $(".dwnbro").click(function(){
        $("#modalBrouchure").modal("show");
    });
    $(".intrested").click(function(){
        $("#intrested").modal("show");
    });
    $(".fancybox-fac").fancybox({
        prevEffect	: 'none',
        nextEffect	: 'none',
        helpers	: {
            title	: {
                type: 'outside'
            },
            thumbs	: {
                width	: 50,
                height	: 50
            }
        }
    });
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.navbar-nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+1
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $('.mob-enq').click(function(){
        $('.footerForm').fadeToggle();
    })
    $('.footerForm .btn-close').click(function(){
        $('.footerForm').fadeOut();
    })

})
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
// document.querySelectorAll('.nav-item a[href^="#"]').forEach($anchor => {
//     $anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start' //scroll to top of the target element
//         });
//     });
// });

