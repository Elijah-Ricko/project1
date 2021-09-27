function openMenu() {
  var bar = document.getElementsByClassName('navBar')[0];
  
  if (bar.style.display === "flex") {
    bar.style.display = "none";
  } else {
    bar.style.display = "flex";
  }

}
