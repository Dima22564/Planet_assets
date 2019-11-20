"use strict";

$(document).ready(function () {
  $('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.js-main-prev-btn'),
    nextArrow: $('.js-main-next-btn') // variableWidth: true

  });
  $('.range-slider__input').ionRangeSlider({
    // type: "double",
    min: 0,
    max: 100000,
    grid: false,
    hide_min_max: true,
    hide_from_to: true // onChange: function (data) {
    //   $('.js-num-from').text(data.from)
    //   $('.js-num-to').text(data.to)
    // },

  });
  $('.js-feedback__video-items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 992,
      settings: 'unslick'
    }]
  });
  $(window).on('resize', function () {
    $('.js-feedback__video-items').slick('resize');
  });
  $('.js-strategy-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false // variableWidth: true

  });
  $('.js-detail-items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 577,
      settings: 'unslick'
    }]
  });
  $(window).on('resize', function () {
    $('.js-detail-items').slick('resize');
  });
});