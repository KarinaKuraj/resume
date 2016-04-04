/*global $ */
$(document).ready(function() {
  $('#btn1').click(function() {
     if ($('#about').css('display')=='none') {
    $('#about').animate({left:'show'},500);
  }else{
    $('#about').animate({left:'hide'},500);
    }
  });
});
    
    
