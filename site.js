/*global $ */
$/*(document).ready(function() {
  $('#btn1').click(function() {
    if (document.getElementById('firstpage')) {

                if (document.getElementById('firstpage').style.display == 'none') {
                    document.getElementById('firstpage').style.display = 'block';
                    document.getElementById('about').style.display = 'none';
                }
                else {
                    document.getElementById('firstpage').style.display = 'none';
                    document.getElementById('about').style.display = 'block';
                }
            }
});
});
 $('#btn2').click(function() {
    if (document.getElementById('firstpage')) {

                if (document.getElementById('firstpage').style.display == 'none') {
                    document.getElementById('firstpage').style.display = 'block';
                    document.getElementById('thirdpage').style.display = 'none';
                }
                else {
                    document.getElementById('firstpage').style.display = 'none';
                    document.getElementById('thirdpage').style.display = 'block';
                }
            }
});
*/
$(document).ready(function() {
    $('#btn1').click(function() {
      $('#about').show('slow');
        $("#firstpage").hide('slow');
         $('#thirdpage').hide('slow');
        
});
    $('#btn2').click(function() {
      $('#thirdpage').show('slow');
        $("#firstpage").hide('slow');
          $('#about').hide('slow');
          
    
    
});

    $('#btn3').click(function() {
      $("contact").show('slow');
        $('#thirdpage').hide('slow');
          $("#firstpage").hide('slow');
            $('#about').hide('slow');
          
    });
    
    
    
});














