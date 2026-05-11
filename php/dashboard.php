<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header("Location: ../login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>

    <!-- Fuente Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

    <style>
        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: #f4f6f9;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        /* CARD */
        .card {
            background: white;
            padding: 45px 35px;
            border-radius: 25px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.12);
            text-align: center;
            width: 360px;
            position: relative;
            z-index: 2;

            transform: translateY(40px);
            opacity: 0;
            animation: fadeUp 0.8s ease forwards;
        }

        @keyframes fadeUp {
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        h1 {
            color: #2d2d2d;
            font-weight: 600;
            margin-bottom: 15px;
        }

        .username {
            color: #3a8dde;
        }

        .logout-btn {
            display: inline-block;
            margin-top: 25px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #3a8dde, #60a5fa);
            color: white;
            text-decoration: none;
            border-radius: 14px;
            transition: 0.3s;
            font-weight: 500;
        }

        .logout-btn:hover {
            transform: scale(1.07);
            box-shadow: 0 10px 25px rgba(58,141,222,0.4);
        }

        /* FIGURAS */
        .shape {
            position: absolute;
            transform: rotate(45deg);
            border-radius: 15px; /* esto hace que NO sean puntiagudos */
            opacity: 0.85;
            animation: float 7s ease-in-out infinite;
        }

        .blue {
            background: #3a8dde;
            width: 80px;
            height: 80px;
            top: 8%;
            left: 10%;
        }

        .yellow {
            background: #ffd54f;
            width: 70px;
            height: 70px;
            bottom: 12%;
            right: 15%;
            animation-delay: 2s;
        }

        .blue2 {
            background: #60a5fa;
            width: 55px;
            height: 55px;
            bottom: 20%;
            left: 20%;
            animation-delay: 1s;
        }

        /* NUEVOS ELEMENTOS */
        .yellow2 {
            background: #ffe082;
            width: 40px;
            height: 40px;
            top: 20%;
            right: 25%;
            animation-delay: 3s;
        }

        .blue3 {
            background: #93c5fd;
            width: 50px;
            height: 50px;
            top: 70%;
            right: 35%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%,100% { transform: rotate(45deg) translateY(0); }
            50% { transform: rotate(45deg) translateY(-25px); }
        }

    </style>
</head>

<body>

<!-- FIGURAS -->
<div class="shape blue"></div>
<div class="shape yellow"></div>
<div class="shape blue2"></div>
<div class="shape yellow2"></div>
<div class="shape blue3"></div>

<!-- CARD -->
<div class="card">
    <h1>
        Bienvenido, 
        <span class="username">
            <?php echo htmlspecialchars($_SESSION['usuario']); ?>
        </span> 👋
    </h1>

    <a href="logout.php" class="logout-btn">Cerrar sesión</a>
</div>

</body>
</html>