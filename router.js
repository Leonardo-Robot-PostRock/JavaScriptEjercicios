class Router {
	_paths;
	constructor(paths) {
		this._paths = paths;
		this.initRouter();
	}

	get getPath() {
		return this._paths;
	}

	initRouter() {
		const {
			location: { pathname = '/' },
		} = window;

		const URL = pathname === '/' ? 'home' : pathname.replace('/', '');
		this.load(URL);
	}

	load(page = '/') {
		const { paths } = this;
		const { path } = this._paths[page] || paths.error;

		window.history.pushState({}, 'done', path);
		this.createElements(page);
	}

	convertirLongitud = () => {
		const longitudOrigenElement = document.querySelector('.unidad-origen');
		console.log(longitudOrigenElement);
		const longitudDestinoElement = document.querySelector('.unidad-destino');

		const resultado = document.querySelector('.resultado');
		const entrada = document.querySelector('.entrada').value;

		if (longitudOrigenElement && longitudDestinoElement) {
			const longitudOrigen = longitudOrigenElement.value;
			const longitudDestino = longitudDestinoElement.value;

			if (longitudOrigen === 'km' && longitudDestino === 'mi') {
				resultado.innerHTML = entrada * 0.6213712;
				console.log('resultado', resultado);
			} else if (longitudOrigen === 'mi' && longitudDestino === 'km') {
				resultado.innerHTML = entrada / 0.6213712;
			} else {
				resultado.innerHTML = entrada;
			}
		}
	};

	createElements(page) {
		//Limpia el contenido anterior
		const mainPageDiv = document.querySelector('#main-page');
		mainPageDiv.innerHTML = '';

		//Creación del título
		const titulo = document.createElement('h2');
		const inputDeEntrada = document.createElement('input');
		inputDeEntrada.classList.add('entrada');

		//Obtención de los select
		const selectUno = document.createElement('select');
		selectUno.classList.add('unidad-origen');
		const selectDos = document.createElement('select');
		selectDos.classList.add('unidad-destino');

		//Caja de resultado
		const resultado = document.createElement('p');
		resultado.classList.add('resultado');
		console.log(resultado.value);

		//Agregar los elementos al div principal
		mainPageDiv.appendChild(titulo);
		mainPageDiv.appendChild(inputDeEntrada);
		mainPageDiv.appendChild(selectUno);
		mainPageDiv.appendChild(selectDos);
		mainPageDiv.appendChild(resultado);

		if (page === '/' || page === 'home') {
			titulo.textContent = 'Conversor de longitud';

			inputDeEntrada.addEventListener('input', this.convertirLongitud);
			selectUno.addEventListener('change', this.convertirLongitud);
			selectDos.addEventListener('change', this.convertirLongitud);

			//Inicializar los Select con las opciones
			const units = ['km', 'mi'];
			for (let i = 0; i < units.length; i++) {
				const opt = units[i];
				const options = document.createElement('option');

				options.textContent = opt;
				options.value = opt;
				console.log(options);
				selectUno.appendChild(options);

				const clonedOption = options.cloneNode(true);
				selectDos.appendChild(clonedOption); //
			}

			this.convertirLongitud();
		} else if (page === '/temperatura') {
		} else if (page === '/masa') {
		} else {
			return;
		}
	}
}
