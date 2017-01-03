$(document).ready(function() {
    $('#fullpage').fullpage({
	});
});

document.getElementById('hamburger').addEventListener('click', checkNav);
document.getElementById('home').addEventListener('click', checkOpen);
document.getElementById('about').addEventListener('click', checkOpen);
document.getElementById('scenery').addEventListener('click', checkOpen);
document.getElementById('contact').addEventListener('click', checkOpen);


function checkNav() {
  if (document.body.classList.contains('hamburger-active')) {
    closeNav();
  } else {
    openNav();
  }
}

function closeNav() {
  document.body.classList.remove('hamburger-active');
}

function openNav() {
  document.body.classList.add('hamburger-active');
}

function checkOpen() {
    document.body.classList.remove('hamburger-active');
}