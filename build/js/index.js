"use strict";

$(document).ready(function () {
  $('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    appendDots: $('.slider-dots'),
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
    arrows: false,
    dots: true,
    appendDots: $('.strategy-slider-dots') // variableWidth: true

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
  $('.js-case-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.js-case-slider-prev'),
    nextArrow: $('.js-case-slider-next'),
    appendDots: $('.js-slider-dots') // variableWidth: true

  });
  $('.js-about-slider').slick({
    slidesToShow: 3,
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
    $('.js-about-slider').slick('resize');
  });
  $('.js-faq').click(function (e) {
    // $('.faq-item__text').slideUp()
    $(this).parent().find('.faq-item__text').slideToggle();
  });
  $('.faq-item__text').hover(function (e) {
    $(this).show();
  }, function (e) {
    $(this).slideUp();
  });
  $('.js-drop-menu').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('nav__item_active');
    $('.js-nav-drop').slideToggle();
  });
  $('.js-drop-menu').hover(function (e) {
    $('.js-nav-drop').slideDown();
    $(this).addClass('nav__item_active');
  });
  $('.js-nav-drop').hover(function (e) {
    $(this).show();
  }, function (e) {
    $(this).slideUp();
    $('.js-drop-menu').removeClass('nav__item_active');
  });
  $('.js-lang').click(function (e) {
    $('.langs__list').slideToggle();
  });
  $('.langs__list').hover(function (e) {
    $(this).show();
  }, function (e) {
    $(this).slideUp();
  });
  $('.js-dark-mode').click(function (e) {
    $('.js-toggler-dark-mode').toggleClass('toggler_active');
    $('body').toggleClass('dark-mode-on');

    if ($('body').hasClass('dark-mode-on') == true) {
      $('.light-img').hide();
      $('.dark-img').show();
    } else {
      $('.light-img').show();
      $('.dark-img').hide();
    }
  });
  $('.js-to-langs').click(function (e) {
    $('.mobile-drop').hide(100, function (e) {
      $('.js-langs-drop').show();
    });
  });
  $('.js-to-drop').click(function (e) {
    $('.js-langs-drop').hide(100, function (e) {
      $('.js-mobile-drop').show();
    });
  });
  $('.js-burger').click(function () {
    $('.js-langs-drop').hide();
    $('.js-mobile-drop').slideToggle();
    $(this).toggleClass('fa-times').toggleClass('fa-bars');
  }); // $('.dark-img').hide()

  if ($('body').hasClass('dark-mode-on')) {
    $('.light-img').hide();
  } else {
    $('.dark-img').hide();
  }

  $('.js-link').click(function (e) {
    e.preventDefault();
    var attr = $(this).attr('data-link');
    var offset = $("#".concat(attr)).offset().top;
    $('html').animate({
      'scrollTop': offset
    });
  });
  $('.js-play').click(function (e) {
    $(this).css({
      'opacity': 0,
      'z-index': -5
    });
    $(this).parent().find('iframe').show(); // $(this).hide(10, function(){
    // })
  });
});