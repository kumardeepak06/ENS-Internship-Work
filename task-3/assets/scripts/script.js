

// Slide Show
// $(document).ready(function () {
//   $(".slideshow-image").slick({
//     slidesToShow: 1,
//     infinite: true,
//     arrows: true,
//     dots: true,
//     autoplay: true,
//     autoplaySpeed: 2000,

//   });
// });

$(document).ready(function () {
  $(".slideshow-image").slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,

  });

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
