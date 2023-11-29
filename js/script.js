const menu = document.querySelector('.header');
const menuBtnClose = document.querySelector('.header_btn-close');
const menuBtnOpen = document.querySelector('.menu_btn-open');
const body = document.body;

menuBtnOpen.addEventListener('click', function(event) {
	event.stopPropagation();
	menu.classList.add('active');
});

menuBtnClose.addEventListener('click', function(event) {
	menu.classList.remove('active');
});

body.addEventListener('click', function(event) {
	menu.addEventListener('click', function(event){
		event.stopPropagation();
	});
	menu.classList.remove('active');
});
