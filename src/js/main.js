/*
 *  main.js
 *  Henry Olson - 07/26/2016
 *  contains non-page-specific javascript
 */

$('.carousel').carousel({
    interval: 3500
});

// only use the multi-item carousel if the window is large enough
var mq = window.matchMedia( "(min-width: 768px)" );
mq.addListener(handleMediaChange);
handleMediaChange(mq);

var mediaType = "mobile";

if (mq.matches) {
  
  var mediaType = "desktop";
  
  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item
  $('.multi-item-carousel .item').each(function(){
    // get the next item in the list
    var next = $(this).next();
    // if there is no next, get the first element
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    // get the next-after-next item in the list
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
    } else {
      // if there is no next-next item, grab the first item in the list
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this)).addClass('rightest');
    }
  });
}

function handleMediaChange(mediaQueryList) {
  if (mediaQueryList.matches) {
      $('.carousel-inner > .item').children(':first-child').show();
      $('.carousel-inner > .item').children(':last-child').show();
  }
  else {
    console.log("Viewport is small than 1200px");
      if (mediaType == "desktop") {
        $('.carousel-inner > .item').children(':first-child').hide();
        $('.carousel-inner > .item').children(':last-child').hide();
      }
  }
}