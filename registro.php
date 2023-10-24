<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera los datos del formulario
    $nombre = $_POST["fname"];
    $password = $_POST["fpassword"];
    $email = $_POST["femail"];

    // Realiza la conexión a la base de datos (debes configurar esto con tus credenciales)
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ejercicio7";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica si la conexión a la base de datos fue exitosa
    if ($conn->connect_error) {
        die("Error en la conexión a la base de datos: " . $conn->connect_error);
    }

    // Validación y almacenamiento seguro de la contraseña (ejemplo)
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepara y ejecuta la sentencia SQL para insertar los datos en la tabla de la base de datos
    $sql = "INSERT INTO usuarios (nombre, password, email) VALUES ('$nombre', '$hashed_password', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Los datos se insertaron correctamente.";
    } else {
        echo "Error al insertar datos: " . $conn->error;
    }

    // Realiza una consulta SQL SELECT para recuperar los datos
    $sql = "SELECT * FROM usuarios";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Imprime los datos si hay resultados
        while ($row = $result->fetch_assoc()) {
            echo "ID: " . $row["id"] . "<br>";
            echo "Nombre: " . $row["nombre"] . "<br>";
            echo "Email: " . $row["email"] . "<br>";
            echo "<hr>";
        }
    } else {
        echo "No se encontraron registros.";
    }

    $conn->close();
}
