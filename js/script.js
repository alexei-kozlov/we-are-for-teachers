;(function ($) {

  // Slider Congratulations
  $('.congratulations__slider').slick({
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    centerMode: true,
    variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // Slider Cards
  $('.cards__slider').slick({
    centerMode: true,
    variableWidth: true,
    centerPadding: '38px',
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          centerPadding: '60px',
          dots: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          centerPadding: '30px',
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // Toggle mobile-menu
  $('.nav__menu-field').on('click', function () {
    $('.nav .inner').toggleClass('inner--menu-wrapper');
    $('.nav__menu').toggleClass('nav__menu--active');
    $('.nav__menu-field').toggleClass('nav__menu-field--active');
  });

  // Toggle mobile-menu after choose menu-item
  $('.nav__item').on('click', function () {
    $('.nav .inner').removeClass('inner--menu-wrapper');
    $('.nav__menu').toggleClass('nav__menu--active');
    $('.nav__menu-field').toggleClass('nav__menu-field--active');
  });

  // Navigation work as sticky-fixed after scroll
  $(window).on('scroll', function () {
    let header = $('.header').height();
    let promo = $('.promo').height();
    if ($(this).scrollTop() > (header + promo)) {
      $('.nav .inner').addClass('inner--sticky');
      $('.nav__camera-roll').addClass('nav__camera-roll--hidden');
    } else {
      $('.nav .inner').removeClass('inner--sticky');
      $('.nav__camera-roll').removeClass('nav__camera-roll--hidden');
    }
  });

  // Add trigger some events
  $(document).ready(function () {
    $(window).trigger('scroll');
  });
})(jQuery);