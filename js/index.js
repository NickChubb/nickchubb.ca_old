$(document).ready(function() {
  $('#resume_button').click(function(){
      $("#dialog").dialog();
      $("#frame").attr("src", "src/resume.pdf");
  }); 
});

function caretToggle(div){

  if($(".caret").hasClass("fa-rotate-90") ){

    $(".caret").removeClass("fa-rotate-90");

  }

  $(div).children("i").toggleClass("fa-rotate-90");
  
}