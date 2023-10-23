let xhttp = new XMLHttpRequest();

xhttp.open('GET', 'http://localhost:8085/pp1_tp4/datos.php', true);

const result = document.querySelector('#result');
title = document.createElement('h1');

title.innerHTML = 'Abriendo conexión' + xhttp.statusText;
result.appendChild(title);

xhttp.onprogress = () => {
	parrafo = document.createElement('p');
	parrafo.innerHTML = 'Cargando: ' + xhttp.statusText;
	result.appendChild(parrafo);
};

//Simulando errores
// xhttp.open('GET', 'http://localhost:8085/pp1_tp4/datos.php?error400', true);
// xhttp.open('GET', 'http://localhost:8085/pp1_tp4/datos.php?error404', true);
// xhttp.open('GET', 'http://localhost:8085/pp1_tp4/datos.php?error500', true);

xhttp.onreadystatechange = () => {
	if (xhttp.readyState === 4) {
        if (xhttp.status === 200 || xhttp.status === 201) {
            try {
                xhttp.onload = () => {
                    parrafo2 = document.createElement('p');
                    parrafo2.innerHTML = 'Terminado: ' + xhttp.statusText;
                    result.appendChild(parrafo2);
                };
                const response = JSON.parse(xhttp.responseText); // Analizar el JSON

				result.innerHTML +=
					response.endpoint1.descripcion +
					'<br>' +
					response.endpoint2.descripcion;
			} catch (error) {
				console.error('Error al analizar JSON: ', error);
			}
		} else {
			result = document.querySelector('#result');
			result.innerHTML = 'Error: ' + xhttp.status + ' ' + xhttp.statusText;
		}
	}
};
xhttp.send();
