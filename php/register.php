//crear usuarios
<?php
$conexion = new mysqli("localhost", "root", "", "usuarios");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    $check = $conexion->prepare("SELECT id FROM usuarios WHERE username = ?");
    $check->bind_param("s", $username);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        die("El usuario ya existe");
    }

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // guardar usuario
    $stmt = $conexion->prepare("INSERT INTO usuarios (username, password, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $passwordHash, $email);

    if ($stmt->execute()) {
        header("Location: ../login.html");
        exit();
    } else {
        echo "Error al registrar usuario";
    }

    $stmt->close();
}

$conexion->close();
?>