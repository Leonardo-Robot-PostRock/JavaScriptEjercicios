<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


// Simula un error del cliente 400 (Solicitud incorrecta)
if (isset($_GET['error400'])) {
    http_response_code(400);
    echo json_encode(array('error' => 'Solicitud incorrecta'));
    exit;
}

// Simula un error 404 (No encontrado)
if (isset($_GET['error404'])) {
    http_response_code(404);
    echo json_encode(array('error' => 'No encontrado'));
    exit;
}

// Simula un error 500 (Error interno del servidor)
if (isset($_GET['error500'])) {
    http_response_code(500);
    echo json_encode(array('error' => 'Error interno del servidor'));
    exit;
}


$endpoints = array(
    'endpoint1' => array(
        'url' => '/ruta/endpoint1',
        'descripcion' => 'Descripción del primer endpoint'
    ),
    'endpoint2' => array(
        'url' => '/ruta/endpoint2',
        'descripcion' => 'Descripción del segundo endpoint'
    )
);

echo json_encode($endpoints);