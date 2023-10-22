function requireParam(param) {
	throw new Error(param + ' es obligatorio');
}

class Estufa {
	_precio;
	_fabricante;
	marca;
	registros;

	constructor({
		fabricante = requireParam('fabricante'),
		precio,
		marca = requireParam('marca'),
		registros,
	} = {}) {
		this._precio = precio;
		this._fabricante = fabricante;
		this.marca = marca;
		this.registros = registros;
	}

	get precio() {
		return this._precio;
	}

	set precio(nuevoPrecio) {
		this._precio = nuevoPrecio;
	}
}
