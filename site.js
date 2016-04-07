/*global $ */
$(document).ready(function() {
  $('#btn1').click(function() {
     if ($('#about').css('display')=='none') {
    $('#about').animate({left:'show'},200);
  }else{
    $('#about').animate({left:'hide'},200);
    }
  });
});
    
    
