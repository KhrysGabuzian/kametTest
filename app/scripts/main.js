(function($) {
/*  $('.accordion > li:eq(0) a').addClass('active').next().slideDown();*/

  $('.accordion .accordion-header').click(function(j) {
    var dropDown = $(this).closest('li').find('.body-accordion');


    $(this).closest('.accordion').find('.body-accordion').not(dropDown).slideUp();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.accordion').find('a.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
  });
})(jQuery);