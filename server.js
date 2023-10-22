const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Enruta todas las solicitudes a index.html para permitir la navegación basada en rutas en el lado del cliente
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Inicia el servidor
app.listen(port, () => {
	console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});
