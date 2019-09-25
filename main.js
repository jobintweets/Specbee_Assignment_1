function display_Content(event,idName) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("row3_col2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    document.getElementById(idName).style.display = "block";
    event.currentTarget.className += " active";

}
function display_dropdown(event,idName){
  
  document.getElementById(idName).style.display = "block";
}