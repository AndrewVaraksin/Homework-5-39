$(function () {

  var mixer = mixitup('.directions__list');;

  $('.directions__filter-btn').on('click', function(){
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable:false,
    waitForAnimate:false,
    dots: true
  })
  $('.team__slider-prev').on('click', function (e) {
    // убрали дефолтное поведение с перемещение к началу страницы
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    // убрали дефолтное поведение с перемещение к началу страницы
    e.preventDefault()
    $('.team__slider').slick('slickNext')
    
  })

})
