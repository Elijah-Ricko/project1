const navlinks = document.getElementsByTagName('nav')[0];
const menu = document.getElementById('menu-icon');

function toggleNavlinks() {

  navlinks.classList.toggle('open');

}

menu.addEventListener('click', toggleNavlinks);

