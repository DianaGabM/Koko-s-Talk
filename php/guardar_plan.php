<?php
session_start();

$conexion = new mysqli("localhost", "root", "", "usuarios");

if ($conexion->connect_error) {
    die("Error de conexión");
}

if (!isset($_SESSION['usuario_id'])) {
    echo "no_session";
    exit();
}

$usuario_id = $_SESSION['usuario_id'];

$plan = $_POST['plan'];
$precio = $_POST['precio'];
$metodo = $_POST['metodo'];

$fecha_inicio = date("Y-m-d");

if ($plan == "Basic" || $plan == "Premium") {
    $fecha_fin = date("Y-m-d", strtotime("+1 month"));
} else {
    $fecha_fin = NULL;
}

// Verificar si ya tiene suscripción
$sql_check = "SELECT id FROM suscripciones WHERE usuario_id=?";
$stmt_check = $conexion->prepare($sql_check);
$stmt_check->bind_param("i", $usuario_id);
$stmt_check->execute();
$result = $stmt_check->get_result();

if ($result->num_rows > 0) {
    $sql = "UPDATE suscripciones 
            SET plan=?, precio=?, metodo_pago=?, fecha_inicio=?, fecha_fin=? 
            WHERE usuario_id=?";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("sdsssi", $plan, $precio, $metodo, $fecha_inicio, $fecha_fin, $usuario_id);
} else {
    $sql = "INSERT INTO suscripciones 
            (usuario_id, plan, precio, metodo_pago, fecha_inicio, fecha_fin)
            VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("isdsss", $usuario_id, $plan, $precio, $metodo, $fecha_inicio, $fecha_fin);
}

if ($stmt->execute()) {
    echo "ok";
} else {
    echo "error";
}

$stmt->close();
$conexion->close();
?> TAMBIEN TENGO ESTO / NO RESPONDAS