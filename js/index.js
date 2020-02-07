function hideAbout(){
  if($('#about').is(':hidden')){
    $('#about').slideDown('slow');
    //$('#about').css("display", "flex");
    $('#about_button').css("background", "url('http://i.imgur.com/XwqVXjQ.png'), rgb(230,230,230)");
    $('#about_button').css("box-shadow", "1px 1px 3px  #ADADAD inset").css("padding-bottom", "2px").css("color", "green").css("border-bottom", "5px solid rgb(230, 230, 230)").css("border-image-source", "url('http://i.imgur.com/XwqVXjQ.png')");
  }else{
    $('#about').slideUp('slow');
    $('#about_button').css("background", "white");
    $('#about_button').css("box-shadow", "0px 0px 0px #ADADAD inset").css("padding-bottom", "0px").css("color", "black");
  }
};
