$(document).ready(function () {
    $(".img-slide").slick({
      slidesToShow: 4,
      infinite: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  });