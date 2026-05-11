<?php
session_start();

$conexion = new mysqli("localhost", "root", "", "usuarios");

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = $_POST['username'];
    $password = $_POST['password'];

    $stmt = $conexion->prepare("SELECT id, username, email, password FROM usuarios WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {

        $usuario = $resultado->fetch_assoc();

        if (password_verify($password, $usuario['password'])) {

            $_SESSION['usuario'] = $usuario['username'];
            $_SESSION['email'] = $usuario['email'];
            $_SESSION['usuario_id'] = $usuario['id'];

            header("Location: ../php/accountglobal.php");
            exit();

        } else {

            echo "<script>
                alert('Contraseña incorrecta');
                window.location.href='../login.html';
            </script>";
            exit();
        }

    } else {

        echo "<script>
            alert('Usuario no registrado. Debes registrarte primero.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    $stmt->close();
}

$conexion->close();
?>