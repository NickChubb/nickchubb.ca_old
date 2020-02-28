function hideAbout(){
if($('#about').is(':hidden')){
  //show the about section of the webstie
  $('#about').slideDown('slow');

  //Changing the CSS of the about_button
  $('#about_button').css("background", "url(../images/grainy_background.png), rgb(230,230,230)");
  $('#about_button').css("box-shadow", "1px 1px 3px  #ADADAD inset");
  $('#about_button').css("padding-bottom", "2px");
  $('#about_button').css("color", "green");
  $('#about_button').css("border-bottom", "5px solid rgb(230, 230, 230)");
  $('#about_button').css("border-image-source", "url(../images/grainy_background.png)");
}else{
  //hide the about section
  $('#about').slideUp('slow');

  //reset the about_button to original css
  $('#about_button').css("background", "white");
  $('#about_button').css("box-shadow", "0px 0px 0px #ADADAD inset");
  $('#about_button').css("padding-bottom", "0px");
  $('#about_button').css("color", "black");
}
};
