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
		const validRoute = this._paths[URL] ? URL : 'home';
		this.load(validRoute);
	}

	load(page = '/') {
		const { _paths } = this;
		const { path } = _paths[page] || _paths[404];

		window.history.pushState({}, 'done', path);
		this.createElements(page);
	}

	getInputsAndOutputs = () => {
		const unidadOrigenElement = document.querySelector('.unidad-origen');
		const unidadDestinoElement = document.querySelector('.unidad-destino');

		const entrada = document.querySelector('.entrada').value;
		const resultado = document.querySelector('.resultado');

		return {
			unidadOrigenElement,
			unidadDestinoElement,
			entrada,
			resultado,
		};
	};

	convertirUnidades = (tipo) => {
		const { unidadOrigenElement, unidadDestinoElement, entrada, resultado } =
			this.getInputsAndOutputs();

		const unidadOrigen = unidadOrigenElement.value;
		const unidadDestino = unidadDestinoElement.value;
		if (unidadOrigenElement && unidadDestinoElement) {
			if (tipo === 'longitud') {
				if (unidadOrigen === 'km' && unidadDestino === 'mi') {
					resultado.innerHTML = (entrada * 0.6213712).toFixed(2);
				} else if (unidadOrigen === 'mi' && unidadDestino === 'km') {
					resultado.innerHTML = (entrada / 0.6213712).toFixed(2);
				} else {
					resultado.innerHTML = entrada;
				}
			} else if (tipo === 'temperatura') {
				if (unidadOrigen === 'ºF' && unidadDestino === 'ºC') {
					resultado.innerHTML = (entrada - 32) / 1.8;
				} else if (unidadOrigen === 'ºC' && unidadDestino === 'ºF') {
					resultado.innerHTML = (entrada * 1.8 + 32).toFixed(2);
				} else {
					resultado.innerHTML = entrada;
				}
			} else if (tipo === 'masa') {
				if (unidadOrigen === 'oz' && unidadDestino === 'kg') {
					resultado.innerHTML = (entrada / 35.274).toFixed(2);
				} else if (unidadOrigen === 'kg' && unidadDestino === 'oz') {
					resultado.innerHTML = (entrada * 35.274).toFixed(2);
				} else {
					resultado.innerHTML = entrada;
				}
			}
		}
	};

	createImage(mainPageDiv, path) {
		const img = document.createElement('img');
		img.classList.add('imagen-anime');
		img.src = path;
		mainPageDiv.appendChild(img);
		return img;
	}

	createInput(mainPageDiv, placeholder) {
		//Creación de input de entrada
		const input = document.createElement('input');
		input.classList.add('entrada');
		input.placeholder = placeholder;
		mainPageDiv.appendChild(input);
		return input;
	}

	createSelect(mainPageDiv, placeholder, classParameter, options) {
		//Obtención de los select
		const select = document.createElement('select');
		select.classList.add(classParameter);
		select.placeholder = placeholder;

		options.forEach((opt) => {
			const option = document.createElement('option');
			option.textContent = opt;
			option.value = opt;
			select.appendChild(option);
		});

		mainPageDiv.appendChild(select);

		return select;
	}

	createResultElement(mainPageDiv) {
		const resultado = document.createElement('p');
		resultado.classList.add('resultado');
		mainPageDiv.appendChild(resultado);
		return resultado;
	}

	createUnitConverterElements(
		mainPageDiv,
		path,
		title,
		inputLabel,
		selectOneLabel,
		selectTwoLabel,
		options,
		tipo
	) {
		const imagen = this.createImage(mainPageDiv, path);

		const titulo = document.createElement('h2');
		titulo.textContent = title;

		mainPageDiv.appendChild(titulo);

		const inputEntrada = this.createInput(mainPageDiv, inputLabel);
		const selectUno = this.createSelect(
			mainPageDiv,
			selectOneLabel,
			'unidad-origen',
			options
		);
		const selectDos = this.createSelect(
			mainPageDiv,
			selectTwoLabel,
			'unidad-destino',
			options
		);
		const resultado = this.createResultElement(mainPageDiv);

		//agregar evento para que el dom escuche los cambios en los siguientes elementos
		inputEntrada.addEventListener('change', () => this.convertirUnidades(tipo));
		selectUno.addEventListener('change', () => this.convertirUnidades(tipo));
		selectDos.addEventListener('change', () => this.convertirUnidades(tipo));
	}

	createElements(page) {
		//Limpia el contenido anterior
		const mainPageDiv = document.querySelector('#main-page');
		mainPageDiv.innerHTML = '';

		if (page === '/' || page === 'home') {
			this.createUnitConverterElements(
				mainPageDiv,
				'assets/animeCharacter1.png',
				'Conversor de longitud',
				'Ingrese longitud',
				'Unidad origen',
				'Unidad destino',
				['km', 'mi'],
				'longitud'
			);
		} else if (page === 'temperatura') {
			this.createUnitConverterElements(
				mainPageDiv,
				'assets/animeCharacter2.png',
				'Conversor de temperatura',
				'Ingrese temperatura',
				'Unidad origen',
				'Unidad destino',
				['ºF', 'ºC'],
				'temperatura'
			);
		} else if (page === 'masa') {
			this.createUnitConverterElements(
				mainPageDiv,
				'assets/animeCharacter3.png',
				'Conversor de masa',
				'Ingrese peso',
				'Unidad origen',
				'Unidad destino',
				['oz', 'kg'],
				'masa'
			);
		} else {
			return;
		}
	}
}
