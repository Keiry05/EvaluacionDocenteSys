$(function() {
  'use:static';

  // start loading page
  var pLoad = $('#loading p').text('Pleas wait page loading' + ' . .');
  $(document).ready(function() {
      $("#loading").css('display', 'none');
  });
  // end loading page

  // start dorpdown menu with hover
  $('.navbar .dropdown').hover(function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
  }, function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
  });
  // end dropdown menu without click

  // start page up button
  $('#footer .up a').on('click', function() {
      $('html , body').animate({
          scrollTop: $('#top-nav').offset().top
      }, 1000);
  });
  // end page up button

  // dir section
  var pageName = $('#dir .left p').text();
  $('#dir .right p').text('Home' + ' / ' + pageName);
  // end dir section
});

$('.form-control').on("focus", function() {
  $(this).parent('.input-group').addClass("input-group-focus");
}).on("blur", function() {
  $(this).parent(".input-group").removeClass("input-group-focus");
});