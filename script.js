const navlinks = document.getElementsByTagName('nav')[0];
const menu = document.getElementById('menu-icon');

function toggleNavlinks() {

  navlinks.classList.toggle('open');

  console.log("hello");


}

menu.addEventListener('click', toggleNavlinks);

