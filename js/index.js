function hideAbout(){
  if($('#about').is(':hidden')){
    $('#about').slideDown('slow');
    //$('#about').css("display", "flex");
    $('#about-button').css("background-color", "#E8E8E8");
    $('#about-button').css("box-shadow", "1px 1px 3px  #ADADAD inset, 0px 1px 3px #E8E8E8").css("padding-bottom", "2px").css("color", "green");
  }else{
    $('#about').slideUp('slow');
    $('#about-button').css("background-color", "white");
    $('#about-button').css("box-shadow", "0px 0px 0px #ADADAD inset").css("padding-bottom", "0px").css("color", "black");
  }
};
