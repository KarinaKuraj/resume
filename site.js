
/*global $ */
$(document).ready(function() {
    $('#btn').click(function() {
      $('#firstpage').show('slow');
       $('#about').hide('slow');
        $('#thirdpage').hide('slow');
         $('#contact').hide('slow');
});
    
    $('#btn1').click(function() {
      $('#about').show('slow');
        $("#firstpage").hide('slow');
         $('#thirdpage').hide('slow');
          $('#contact').hide('slow');
        
});
    $('#btn2').click(function() {
      $('#thirdpage').show('slow');
        $("#firstpage").hide('slow');
          $('#about').hide('slow');
           $('#contact').hide('slow');
          
    
});
    $('#btn3').click(function() {
      $('#contact').show('slow'); 
      $('#thirdpage').hide('slow');
        $("#firstpage").hide('slow');
          $('#about').hide('slow');
    });

    
});

$(document).ready(function() {
    $('#submit').click(function() {
     $.ajax({
      url: "https://formspree.io/karina_gretta@ukr.net",  
      method: "POST",
      data: {
             email: empID.value,
             message: msg.value
             },
      dataType: "json"
  }).done(function() {
     $('.form').html('<h1>Thank you!</h1><p>Your message is sent!')
  });
});
}


)















