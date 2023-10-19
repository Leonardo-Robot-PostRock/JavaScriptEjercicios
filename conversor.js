//Manejo de rutas

const route = (event) => {
	event = event || window.event;
	event.preventDefault();
	window.history.pushState({}, '', event.target.href);
	manejoDeUbicacion();
};

const rutas = {
	404: '/pages/404.html',
	'/': 'pages/index.html',
	'/temperatura': 'pages/temperatura.html',
	'/masa': '/pages/masa.html',
};

const manejoDeUbicacion = async () => {
	const direccion = window.location.pathname;
	const ruta = rutas[direccion] || rutas[404];

	const html = await fetch(ruta).then((data) => data.text());
	document.querySelector('.main-page').innerHTML = html;
};

window.onpopstate = manejoDeUbicacion;
window.route = route;
manejoDeUbicacion();

const primerInput = document.createElement('INPUT');
const segundoInput = document.createElement('INPUT');
const nombreUnidad = document.createElement('label');
const nombreUnidadDos = document.createElement('label');

const recibirUnidadDeMedida = (direccion) => {};

function metrosAdistancia(metros) {
	kilometros = metros / 1000;
	mostrarKm = kilometros.toFixed(2);
}
