var fon = document.getElementById('fon');
var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var span6 = document.getElementById('span6');
var menu = document.getElementById('menu_btn');
var a = document.getElementById('a');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var nav = document.getElementById('nav');
var block2 = document.getElementById('block2');
var block3 = document.getElementById('block3');
var block4 = document.getElementById('block4');


document.getElementById('button').onclick = function() {
	a.classList.toggle('a_active');
	a1.classList.toggle('a_active');
	a2.classList.toggle('a_active');
	a3.classList.toggle('a_active');
	document.getElementById('nav').classList.toggle('nav_active');
	document.getElementById('button').classList.toggle('button_active');
}

fon.onmouseenter = function() {
	h1.className = 'h1';
	h2.className = 'h2';
	span6.className = 'span6';
}

block2.onmouseenter = function() {
	document.getElementById('zagolovok2').className = 'zagolovok2';
}

block3.onmouseenter = function() {
	document.getElementById('zagolovok3').className = 'zagolovok3';
}

block4.onmouseenter = function() {
	document.getElementById('zagolovok4').className = 'zagolovok4';
}