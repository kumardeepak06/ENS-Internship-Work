$(document).ready(function () {
    $(".announcement-content").slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 700,
      vertical: false,
      verticalSwiping: false,
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });