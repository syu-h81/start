'use strict';

//メニューバーの処理
$(function() {
  $('#toggle').on('click', function() {
    $('#toggle').toggleClass('show');
    if ($('.sp-Menu_block').hasClass('slide-R_fadeIn')) {
      $('.sp-Menu_block').removeClass('slide-R_fadeIn');
    }
    else {
      $('#slide-R').addClass('slide-R_fadeIn');
    }
  })
})