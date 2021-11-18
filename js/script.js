;(function ($) {

  // Slider Congratulations
  $('.congratulations__slider').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    infinite: true,
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

  // Slider Congratulations
  $('.cards__slider').slick({
    centerMode: true,
    centerPadding: '38px',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
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
        breakpoint: 425,
        settings: {
          centerPadding: '20px',
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  });

  // Toggle mobile-menu
  $('.nav__menu-field').on('click', function () {
    $('.nav__menu').toggleClass('nav__menu--active');
    $('.nav__menu-field').toggleClass('nav__menu-field--active');
  });

  // Navigation work as sticky-fixed after scroll
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.nav .inner').addClass('inner--sticky');
    } else {
      $('.nav .inner').removeClass('inner--sticky');
    }
  });

  // Add trigger some events
  $(document).ready(function () {
    $(window).trigger('scroll');
  });
})(jQuery);