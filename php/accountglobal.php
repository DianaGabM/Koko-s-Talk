<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header("Location: login.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>KOKO'S - Mi Cuenta</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
     <link rel="stylesheet" href="../css/accountglobal.css">
    <style>
       
    </style>
</head>
<body>

<!-- RETURN BUTTON -->
<a href="lessonglobal.html" class="return-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"/>
    </svg>
    Regresar
</a>

<!-- HERO -->
<div class="account-hero">
    <div class="hero-inner">
        <div class="avatar-wrap">
            <div class="avatar-circle" id="avatarDisplay" onclick="openAvatarPicker()">
                <span id="avatarEmoji">🐨</span>
            </div>
            <div class="avatar-edit-btn" onclick="openAvatarPicker()">
                <i class="fas fa-pencil-alt"></i>
            </div>
        </div>
        <div class="hero-info">
            <h1><?php echo $_SESSION['usuario']; ?></h1>
<p><?php echo $_SESSION['email']; ?></p>
            <div class="hero-badges">
                <!-- Solo badge de nivel, sin racha ni XP -->
                <button class="hero-badge" onclick="window.location.href='../php/logout.php'">
    <i class="fas fa-sign-out-alt"></i>
    <span>Cerrar Sesión</span>
</button>
            </div>
        </div>
    </div>
</div>

<!-- MAIN -->
<div class="page-body">

    <!-- LEFT COLUMN -->
    <div class="left-col">

        
        
<!-- Profile card -->
<div class="card">
    <div class="card-header">
        <div class="icon-dot" style="background:var(--green);">
            <i class="fas fa-user"></i>
        </div>
        <h2>Mi Perfil</h2>
    </div>

    <div class="card-body">

        <div class="form-group">
            <label>Nombre</label>
            <input class="form-control" id="inputName" type="text"
                   value="<?php echo $_SESSION['usuario']; ?>">
        </div>

        <div class="form-group">
            <label>Correo electrónico</label>
            <input class="form-control" id="inputEmail" type="email"
                   value="<?php echo $_SESSION['email'] ?? ''; ?>">
        </div>

        <div class="form-group">
            <label>País</label>
            <input class="form-control" id="inputCountry" type="text" placeholder="El Salvador">
        </div>

        <div class="form-group">
            <label>¿Por qué aprendes LESSA?</label>
            <input class="form-control" id="inputReason" type="text" placeholder="Me parece fascinante...">
        </div>

    </div>

    <div style="padding: 0 22px 22px;">
        <button class="save-btn" onclick="saveProfile()">
            <i class="fas fa-save"></i> Guardar cambios
        </button>
    </div>
</div>

        <!-- Mini stats (sin racha ni XP en hero, pero sí en las stats) -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--yellow);"><i class="fas fa-chart-bar"></i></div>
                <h2>Estadísticas</h2>
            </div>
            <div class="card-body">
                <div class="mini-stats">
                    <div class="mini-stat">
                        <div class="mini-stat-val" id="statLessons" style="color:var(--green);">0</div>
                        <div class="mini-stat-label">Lecciones</div>
                    </div>
                    <div class="mini-stat">
                        <div class="mini-stat-val" id="statXP" style="color:var(--yellow);">0</div>
                        <div class="mini-stat-label">XP Total</div>
                    </div>
                    <div class="mini-stat">
                        <div class="mini-stat-val" id="statStreak" style="color:var(--orange);">0🔥</div>
                        <div class="mini-stat-label">Racha</div>
                    </div>
                    <div class="mini-stat">
                        <div class="mini-stat-val" id="statPct" style="color:var(--blue);">0%</div>
                        <div class="mini-stat-label">Avance</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Achievements -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--purple);"><i class="fas fa-trophy"></i></div>
                <h2>Logros</h2>
            </div>
            <div class="card-body">
                <div class="badges-grid" id="badgesGrid"></div>
            </div>
        </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="right-col">

        <!-- Overall progress -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--blue);"><i class="fas fa-graduation-cap"></i></div>
                <h2>Mi Progreso General</h2>
            </div>
            <div class="card-body">
                <div class="progress-ring-section">
                    <div class="ring-container">
                        <svg class="ring-svg" width="130" height="130" viewBox="0 0 130 130">
                            <circle class="ring-bg" cx="65" cy="65" r="55"/>
                            <circle class="ring-fill" id="mainRingFill" cx="65" cy="65" r="55"
                                stroke="url(#ringGrad)"
                                stroke-dasharray="345.4"
                                stroke-dashoffset="345.4"/>
                            <defs>
                                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#58cc02"/>
                                    <stop offset="100%" stop-color="#00d4aa"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div class="ring-text">
                            <span class="ring-percent" id="mainRingPct" style="color:var(--green);">0%</span>
                            <span class="ring-sub">completado</span>
                        </div>
                    </div>
                    <div class="ring-details">
                        <h3 id="progressTitle">Estás comenzando</h3>
                        <p id="progressDesc">Cada lección te acerca más a la comunicación plena en LESSA. ¡El primer paso es el más importante!</p>
                        <div class="overall-motivation" id="motivationChip">
                            <i class="fas fa-bolt"></i> <span id="motivText">¡Inicia tu primera lección!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Level breakdown -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--orange);"><i class="fas fa-layer-group"></i></div>
                <h2>Progreso por Nivel</h2>
            </div>
            <div class="card-body">
                <div class="level-bar-list">
                    <div class="level-bar-item">
                        <div class="level-bar-top">
                            <div class="level-name-grp">
                                <div class="level-dot" style="background:var(--blue);"></div>
                                <span class="level-name">Nivel Básico</span>
                            </div>
                            <span class="level-count" id="basicCount">0/9</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" id="basicBarFill" style="background:var(--blue);"></div>
                        </div>
                    </div>
                    <div class="level-bar-item">
                        <div class="level-bar-top">
                            <div class="level-name-grp">
                                <div class="level-dot" style="background:var(--orange);"></div>
                                <span class="level-name">Nivel Intermedio</span>
                            </div>
                            <span class="level-count" id="interCount">0/10</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" id="interBarFill" style="background:var(--orange);"></div>
                        </div>
                    </div>
                    <div class="level-bar-item">
                        <div class="level-bar-top">
                            <div class="level-name-grp">
                                <div class="level-dot" style="background:var(--purple);"></div>
                                <span class="level-name">Nivel Avanzado</span>
                            </div>
                            <span class="level-count" id="advCount">0/9</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" id="advBarFill" style="background:var(--purple);"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Lesson detail tabs -->
        <div class="card">
            <div class="card-header" style="border-bottom:none; padding-bottom:0;">
                <div class="icon-dot" style="background:var(--teal);"><i class="fas fa-list-check"></i></div>
                <h2>Detalle de Lecciones</h2>
            </div>
            <div class="tabs">
                <button class="tab-btn active" onclick="switchTab('all', this)">Todas</button>
                <button class="tab-btn" onclick="switchTab('done', this)">Completadas</button>
                <button class="tab-btn" onclick="switchTab('pending', this)">Pendientes</button>
            </div>
            <div id="tab-all" class="tab-content active">
                <div class="lessons-scroll" id="allLessonsList"></div>
            </div>
            <div id="tab-done" class="tab-content">
                <div class="lessons-scroll" id="doneLessonsList"></div>
            </div>
            <div id="tab-pending" class="tab-content">
                <div class="lessons-scroll" id="pendingLessonsList"></div>
            </div>
        </div>
    </div>
</div>

<!-- CERTIFICATES SECTION -->
<div style="max-width:1100px; margin: 0 auto 60px; padding: 0 24px;">
    <div class="card">
        <div class="card-header">
            <div class="icon-dot" style="background: linear-gradient(135deg,#ffc800,#ff9600);"><i class="fas fa-award"></i></div>
            <h2>Mis Certificados</h2>
            <span style="margin-left:auto; font-size:.8rem; font-weight:700; color:var(--text-light);" id="certCountLabel">0 ganados</span>
        </div>
        <div class="card-body">
            <div class="certs-grid" id="certsGrid"></div>
        </div>
    </div>
</div>

<!-- CERTIFICATE PREVIEW MODAL -->
<div class="cert-preview-overlay" id="certPreviewOverlay">
    <div class="cert-preview-wrap">
        <button class="cert-preview-close" onclick="closeCertPreview()">✕</button>
        <div id="certDocContainer"></div>
        <div class="cert-preview-btns">
            <button class="cert-preview-btn primary" id="certDownloadBtn" onclick="downloadCert()">
                <i class="fas fa-download"></i> Descargar PDF
            </button>
            <button class="cert-preview-btn secondary" onclick="closeCertPreview()">
                <i class="fas fa-times"></i> Cerrar
            </button>
        </div>
    </div>
</div>

<!-- AVATAR PICKER -->
<div class="avatar-selector" id="avatarSelector">
    <div class="avatar-modal">
        <h3>Elige tu avatar</h3>
        <div class="avatar-options" id="avatarOptions"></div>
        <button class="avatar-close" onclick="closeAvatarPicker()">Listo</button>
    </div>
</div>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<script src="../JS/accountglobal.js"></script>
</body>
</html>