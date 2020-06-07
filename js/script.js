var burg = document.getElementById('burger');

burg.onclick = function () {
	addMenu();
};

function addMenu() {
	document.getElementById('menu').classList.toggle('show');
};
