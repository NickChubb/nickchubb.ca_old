/**
 * Toggles the caret icons in my class list dropdowns
 * @param {*} div - Div clicked on
 */
function caretToggle(div){

  if($(div).children("i").hasClass("fa-rotate-90")){
    
    $(".caret").removeClass("fa-rotate-90");

  }else{

    $(".caret").removeClass("fa-rotate-90");
    $(div).children("i").addClass("fa-rotate-90");

  }
}