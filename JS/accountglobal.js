// ─── CATALOG ─────────────────────────────────────────────────────────────────
const lessonsCatalog = {
    basic: [
        { id: 'abc', icon: 'fas fa-font', color: '#1cb0f6', title: 'Letras A, B, C' },
        { id: 'hola-adios-gracias', icon: 'fas fa-hand-peace', color: '#ff9600', title: 'Hola, Adios, Gracias' },
        { id: 'nombre-edad-nacionalidad', icon: 'fas fa-id-card', color: '#ce82ff', title: 'Nombre, Edad, Nacionalidad' },
        { id: 'numeros', icon: 'fas fa-calculator', color: '#ff4b4b', title: 'Numeros' },
        { id: 'familia', icon: 'fas fa-users', color: '#00d4aa', title: 'Familia' },
        { id: 'tiempo1', icon: 'fas fa-clock', color: '#ffc800', title: 'Tiempo basico' },
        { id: 'colores', icon: 'fas fa-palette', color: '#ff86d0', title: 'Colores' },
        { id: 'oraciones', icon: 'fas fa-pen-fancy', color: '#58cc02', title: 'Primeras oraciones' },
        { id: 'eval-basic', icon: 'fas fa-graduation-cap', color: '#ff9600', title: 'Evaluacion Basico' }
    ],
    intermediate: [
        { id: 'casa-sala-cocina', icon: 'fas fa-home', color: '#58cc02', title: 'Casa, Sala, Cocina' },
        { id: 'ciudades', icon: 'fas fa-map-pin', color: '#1cb0f6', title: 'El Salvador, San Salvador, Santa Ana' },
        { id: 'comida-tipica', icon: 'fas fa-utensils', color: '#ff9600', title: 'Pupusa, Tamal, Atol' },
        { id: 'cuerpo', icon: 'fas fa-hand-peace', color: '#ff4b4b', title: 'Cuerpo Humano' },
        { id: 'trabajo', icon: 'fas fa-briefcase', color: '#ce82ff', title: 'Trabajo y Profesiones' },
        { id: 'transporte', icon: 'fas fa-bus', color: '#00d4aa', title: 'Transportes' },
        { id: 'verbos', icon: 'fas fa-running', color: '#ffc800', title: 'Verbos de Accion' },
        { id: 'tiempo2', icon: 'fas fa-calendar-alt', color: '#ff86d0', title: 'Tiempo Avanzado' },
        { id: 'clasificadores1', icon: 'fas fa-hand-peace', color: '#58cc02', title: 'Clasificadores I' },
        { id: 'eval-inter', icon: 'fas fa-certificate', color: '#ff9600', title: 'Evaluacion Intermedia' }
    ],
    advanced: [
        { id: 'verbos-direccionales', icon: 'fas fa-arrow-right', color: '#1cb0f6', title: 'Verbos Direccionales' },
        { id: 'cambio-rol', icon: 'fas fa-mask', color: '#ff9600', title: 'Cambio de Rol' },
        { id: 'clasificadores-avanzados', icon: 'fas fa-hands', color: '#ff4b4b', title: 'Clasificadores Avanzados' },
        { id: 'modismos-regionalismos', icon: 'fas fa-comment-dots', color: '#ce82ff', title: 'Modismos y Regionalismos' },
        { id: 'leyes-derechos', icon: 'fas fa-scale-balanced', color: '#00d4aa', title: 'Leyes y Derechos' },
        { id: 'temas-abstractos', icon: 'fas fa-brain', color: '#ffc800', title: 'Temas Abstractos' },
        { id: 'poesia-narracion', icon: 'fas fa-book-open', color: '#ff86d0', title: 'Poesia y Narracion' },
        { id: 'interpretacion-etica', icon: 'fas fa-handshake', color: '#58cc02', title: 'Interpretacion y Etica' },
        { id: 'eval-avanzada', icon: 'fas fa-trophy', color: '#ff9600', title: 'Evaluacion Avanzada' }
    ]
};

const allLessons = [
    ...lessonsCatalog.basic.map(l => ({ ...l, level: 'Básico' })),
    ...lessonsCatalog.intermediate.map(l => ({ ...l, level: 'Intermedio' })),
    ...lessonsCatalog.advanced.map(l => ({ ...l, level: 'Avanzado' }))
];

const TOTAL = allLessons.length;
const XP_PER_LESSON = 50;

const ACHIEVEMENTS = [
    { id: 'first',    label: 'Primera\nLección',   icon: 'fas fa-star',     color: '#ffc800', condition: c => c >= 1 },
    { id: 'five',     label: '5 Lecciones',         icon: 'fas fa-fire',     color: '#ff4b4b', condition: c => c >= 5 },
    { id: 'basic',    label: 'Básico\nCompleto',    icon: 'fas fa-seedling', color: '#58cc02', condition: (c,b)    => b === 9 },
    { id: 'ten',      label: '10 Lecciones',         icon: 'fas fa-bolt',     color: '#ff9600', condition: c => c >= 10 },
    { id: 'inter',    label: 'Intermedio\nCompleto', icon: 'fas fa-leaf',     color: '#1cb0f6', condition: (c,b,i)  => i === 10 },
    { id: 'halfway',  label: 'A Mitad',             icon: 'fas fa-road',     color: '#ce82ff', condition: c => c >= Math.floor(TOTAL / 2) },
    { id: 'advanced', label: 'Avanzado\nCompleto',  icon: 'fas fa-crown',    color: '#ffc800', condition: (c,b,i,a)=> a === 9 },
    { id: 'master',   label: '¡Maestro\nLESSA!',   icon: 'fas fa-trophy',   color: '#ff4b4b', condition: c => c === TOTAL }
];

const AVATARS = ['🐨','🦊','🐸','🐼','🦁','🐯','🦄','🐙','🦋','🐧','🦜','🐬'];

// ─── STATE ────────────────────────────────────────────────────────────────────
let profile = {
    name: '', email: '', country: 'El Salvador',
    reason: '', avatar: '🐨', streak: 0
};

function loadState() {
    const saved = localStorage.getItem('kokoGame');
    let game = { completedLessons: [] };
    if (saved) { try { game = JSON.parse(saved); } catch(e) {} }

    const savedProfile = localStorage.getItem('kokoProfile');
    if (savedProfile) { try { profile = { ...profile, ...JSON.parse(savedProfile) }; } catch(e) {} }

    return game;
}

function saveProfile() {
    profile.name    = document.getElementById('inputName').value.trim();
    profile.email   = document.getElementById('inputEmail').value.trim();
    profile.country = document.getElementById('inputCountry').value.trim();
    profile.reason  = document.getElementById('inputReason').value.trim();
    localStorage.setItem('kokoProfile', JSON.stringify(profile));

    // Actualizar racha
    const today = new Date().toDateString();
    const lastSave = localStorage.getItem('kokoLastSave');
    if (lastSave !== today) {
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        profile.streak = (lastSave === yesterday) ? (profile.streak || 0) + 1 : 1;
        localStorage.setItem('kokoLastSave', today);
        localStorage.setItem('kokoProfile', JSON.stringify(profile));
    }

    showToast('✅ Perfil guardado');
    renderHero(loadState().completedLessons || []);
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function renderHero(completed) {
    const c = completed.length;

    // ── FIX: mostrar nombre guardado, si no hay nombre mostrar "Mi Cuenta" ──
    document.getElementById('heroName').textContent  = profile.name  || 'Mi Cuenta';
    document.getElementById('heroEmail').textContent = profile.email || 'usuario@kokostalk.com';
    document.getElementById('avatarEmoji').textContent = profile.avatar;

    // Solo badge de nivel (sin racha ni XP en el hero)
    const levelEl = document.getElementById('levelBadge');
    if (c === TOTAL) {
        levelEl.querySelector('span').textContent = 'Maestro LESSA';
        levelEl.querySelector('i').className = 'fas fa-crown';
    } else if (c >= 20) {
        levelEl.querySelector('span').textContent = 'Avanzado';
        levelEl.querySelector('i').className = 'fas fa-fire';
    } else if (c >= 10) {
        levelEl.querySelector('span').textContent = 'Intermedio';
        levelEl.querySelector('i').className = 'fas fa-leaf';
    } else {
        levelEl.querySelector('span').textContent = 'Principiante';
        levelEl.querySelector('i').className = 'fas fa-seedling';
    }
}

function renderStats(completed) {
    const c   = completed.length;
    const pct = Math.round((c / TOTAL) * 100);
    document.getElementById('statLessons').textContent = c;
    document.getElementById('statXP').textContent      = c * XP_PER_LESSON;
    document.getElementById('statStreak').textContent  = `${profile.streak || 0}🔥`;
    document.getElementById('statPct').textContent     = `${pct}%`;
}

function renderRing(completed) {
    const c   = completed.length;
    const pct = Math.round((c / TOTAL) * 100);
    const circumference = 2 * Math.PI * 55;
    const offset = circumference * (1 - pct / 100);

    document.getElementById('mainRingPct').textContent = `${pct}%`;
    setTimeout(() => {
        document.getElementById('mainRingFill').style.strokeDashoffset = offset;
    }, 200);

    const title = document.getElementById('progressTitle');
    const desc  = document.getElementById('progressDesc');
    const motiv = document.getElementById('motivText');
    if (pct === 100)     { title.textContent = '¡Felicitaciones, Maestro!'; desc.textContent = '¡Has completado todas las lecciones de LESSA!'; motiv.textContent = '¡Certificado completo!'; }
    else if (pct >= 75)  { title.textContent = '¡Casi en la cima!'; desc.textContent = 'Tu dominio de LESSA es impresionante. Pocas lecciones te separan de la maestría total.'; motiv.textContent = '¡Sigue, ya casi!'; }
    else if (pct >= 50)  { title.textContent = 'Vas muy bien'; desc.textContent = 'Llevas más de la mitad del camino recorrido. Tu esfuerzo se nota en cada seña aprendida.'; motiv.textContent = '¡A seguir avanzando!'; }
    else if (pct >= 25)  { title.textContent = 'Buen arranque'; desc.textContent = 'Ya has construido una base sólida. Cada lección nueva abre más puertas de comunicación.'; motiv.textContent = '¡Sigue practicando!'; }
    else if (pct > 0)    { title.textContent = 'Estás comenzando'; desc.textContent = 'Cada gran viaje comienza con un primer paso. ¡El tuyo ya está dado!'; motiv.textContent = '¡Sigue así!'; }
    else                 { title.textContent = 'Todo por descubrir'; desc.textContent = 'Tu viaje por LESSA está por comenzar. Ve a Lessons y completa tu primera lección.'; motiv.textContent = '¡Empieza ahora!'; }
}

function renderBars(completed) {
    const bc = completed.filter(id => lessonsCatalog.basic.some(l => l.id === id)).length;
    const ic = completed.filter(id => lessonsCatalog.intermediate.some(l => l.id === id)).length;
    const ac = completed.filter(id => lessonsCatalog.advanced.some(l => l.id === id)).length;

    document.getElementById('basicCount').textContent = `${bc}/9`;
    document.getElementById('interCount').textContent = `${ic}/10`;
    document.getElementById('advCount').textContent   = `${ac}/9`;

    setTimeout(() => {
        document.getElementById('basicBarFill').style.width = `${Math.round(bc/9*100)}%`;
        document.getElementById('interBarFill').style.width = `${Math.round(ic/10*100)}%`;
        document.getElementById('advBarFill').style.width   = `${Math.round(ac/9*100)}%`;
    }, 300);
}

function renderLessonLists(completed) {
    const makeRow = (lesson, idx) => {
        const done   = completed.includes(lesson.id);
        const isNext = !done && (idx === 0 || completed.includes(allLessons[idx - 1]?.id));
        let statusHtml;
        if (done)          statusHtml = `<span class="lesson-row-status status-done"><i class="fas fa-check-circle"></i> Completada</span>`;
        else if (isNext)   statusHtml = `<span class="lesson-row-status status-current"><i class="fas fa-play-circle"></i> Siguiente</span>`;
        else               statusHtml = `<span class="lesson-row-status status-locked"><i class="fas fa-lock"></i></span>`;

        return `
            <div class="lesson-row ${done ? 'done' : ''} ${isNext && !done ? 'current-active' : ''}">
                <div class="lesson-row-icon" style="background:${lesson.color}20; color:${lesson.color};">
                    <i class="${lesson.icon}"></i>
                </div>
                <div class="lesson-row-info">
                    <div class="lesson-row-title">${lesson.title}</div>
                    <div class="lesson-row-level">Nivel ${lesson.level}</div>
                </div>
                ${statusHtml}
            </div>`;
    };

    const allHtml  = allLessons.map((l, i) => makeRow(l, i)).join('');
    const doneHtml = allLessons.filter(l => completed.includes(l.id)).map((l) => makeRow(l, allLessons.indexOf(l))).join('')
                  || '<p style="color:var(--text-light);font-weight:700;text-align:center;padding:24px;">Aún no has completado lecciones. ¡Empieza ahora!</p>';
    const pendHtml = allLessons.filter(l => !completed.includes(l.id)).map((l) => makeRow(l, allLessons.indexOf(l))).join('');

    document.getElementById('allLessonsList').innerHTML    = allHtml;
    document.getElementById('doneLessonsList').innerHTML   = doneHtml;
    document.getElementById('pendingLessonsList').innerHTML = pendHtml;
}

function renderBadges(completed) {
    const bc = completed.filter(id => lessonsCatalog.basic.some(l => l.id === id)).length;
    const ic = completed.filter(id => lessonsCatalog.intermediate.some(l => l.id === id)).length;
    const ac = completed.filter(id => lessonsCatalog.advanced.some(l => l.id === id)).length;
    const c  = completed.length;

    document.getElementById('badgesGrid').innerHTML = ACHIEVEMENTS.map(a => {
        const unlocked = a.condition(c, bc, ic, ac);
        return `
            <div class="badge-item" title="${unlocked ? '¡Desbloqueado!' : 'Aún no desbloqueado'}">
                <div class="badge-icon ${unlocked ? '' : 'locked'}" style="${unlocked ? `background:${a.color}22; color:${a.color};` : ''}">
                    <i class="${a.icon}" style="${unlocked ? `color:${a.color};` : ''}"></i>
                </div>
                <span class="badge-label">${a.label}</span>
            </div>`;
    }).join('');
}

// ─── AVATAR ───────────────────────────────────────────────────────────────────
function renderAvatarPicker() {
    document.getElementById('avatarOptions').innerHTML = AVATARS.map(e => `
        <div class="avatar-opt ${e === profile.avatar ? 'selected' : ''}" onclick="selectAvatar('${e}', this)">${e}</div>
    `).join('');
}
function openAvatarPicker()  { renderAvatarPicker(); document.getElementById('avatarSelector').classList.add('open'); }
function closeAvatarPicker() {
    document.getElementById('avatarSelector').classList.remove('open');
    localStorage.setItem('kokoProfile', JSON.stringify(profile));
    document.getElementById('avatarEmoji').textContent = profile.avatar;
    showToast('Avatar actualizado');
}
function selectAvatar(emoji, el) {
    profile.avatar = emoji;
    document.querySelectorAll('.avatar-opt').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
}

// ─── TABS ─────────────────────────────────────────────────────────────────────
function switchTab(id, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    btn.classList.add('active');
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
}

// ─── FORM INIT ────────────────────────────────────────────────────────────────
function populateForm() {
    document.getElementById('inputName').value    = profile.name    || '';
    document.getElementById('inputEmail').value   = profile.email   || '';
    document.getElementById('inputCountry').value = profile.country || 'El Salvador';
    document.getElementById('inputReason').value  = profile.reason  || '';
}

// ─── CERTIFICATES ─────────────────────────────────────────────────────────────
const CERTS = [
    {
        id: 'cert-basic', title: 'Certificado Nivel Básico', subtitle: 'Primeros Pasos en LESSA',
        desc: 'Ha completado satisfactoriamente todas las lecciones del Nivel Básico',
        icon: '🌱', color: '#1cb0f6', gradient: 'linear-gradient(135deg,#1cb0f6,#00d4aa)',
        levelLabel: 'Nivel Básico', levelColor: '#1cb0f6',
        requiredIds: lessonsCatalog.basic.map(l => l.id)
    },
    {
        id: 'cert-inter', title: 'Certificado Nivel Intermedio', subtitle: 'Comunicación y Entorno',
        desc: 'Ha completado satisfactoriamente todas las lecciones del Nivel Intermedio',
        icon: '🍃', color: '#ff9600', gradient: 'linear-gradient(135deg,#ff9600,#ffc800)',
        levelLabel: 'Nivel Intermedio', levelColor: '#ff9600',
        requiredIds: lessonsCatalog.intermediate.map(l => l.id)
    },
    {
        id: 'cert-adv', title: 'Certificado Nivel Avanzado', subtitle: 'Fluidez y Narración',
        desc: 'Ha completado satisfactoriamente todas las lecciones del Nivel Avanzado',
        icon: '🏆', color: '#ce82ff', gradient: 'linear-gradient(135deg,#ce82ff,#ff86d0)',
        levelLabel: 'Nivel Avanzado', levelColor: '#ce82ff',
        requiredIds: lessonsCatalog.advanced.map(l => l.id)
    },
    {
        id: 'cert-master', title: 'Certificado Maestro LESSA', subtitle: 'Dominio Completo',
        desc: 'Ha completado la totalidad del programa de aprendizaje LESSA con excelencia',
        icon: '👑', color: '#58cc02', gradient: 'linear-gradient(135deg,#58cc02,#00d4aa)',
        levelLabel: 'Maestro LESSA', levelColor: '#58cc02',
        requiredIds: [
            ...lessonsCatalog.basic.map(l => l.id),
            ...lessonsCatalog.intermediate.map(l => l.id),
            ...lessonsCatalog.advanced.map(l => l.id)
        ]
    }
];

let currentCert = null;

function getCertDates() {
    const saved = localStorage.getItem('kokoCertDates');
    return saved ? JSON.parse(saved) : {};
}
function saveCertDate(certId) {
    const dates = getCertDates();
    if (!dates[certId]) {
        dates[certId] = new Date().toLocaleDateString('es-SV', { year:'numeric', month:'long', day:'numeric' });
        localStorage.setItem('kokoCertDates', JSON.stringify(dates));
    }
    return dates[certId];
}

function renderCerts(completed) {
    const dates = getCertDates();
    const grid  = document.getElementById('certsGrid');
    let earned  = 0;

    grid.innerHTML = CERTS.map(cert => {
        const done     = cert.requiredIds.every(id => completed.includes(id));
        const progress = cert.requiredIds.filter(id => completed.includes(id)).length;
        const total    = cert.requiredIds.length;
        const pct      = Math.round(progress / total * 100);

        if (done) { earned++; saveCertDate(cert.id); }
        const dateStr = done ? (dates[cert.id] || new Date().toLocaleDateString('es-SV', { year:'numeric', month:'long', day:'numeric' })) : '';

        return `
        <div class="cert-card ${done ? 'earned' : 'locked-cert'}" style="${done ? `border-color:${cert.color}40;` : ''}">
            <div class="cert-banner" style="background:${cert.gradient};">
                <div class="cert-banner-icon">${cert.icon}</div>
                ${!done ? '<div class="cert-lock-overlay"><i class="fas fa-lock"></i></div>' : ''}
            </div>
            <div class="cert-body">
                <div class="cert-title">${cert.title}</div>
                <div class="cert-subtitle">${cert.subtitle}</div>
                <div class="cert-progress-bar">
                    <div class="cert-progress-fill" style="background:${cert.gradient}; width:${pct}%;"></div>
                </div>
                <div class="cert-progress-label">
                    <span>${progress}/${total} lecciones</span>
                    <span>${pct}%</span>
                </div>
                <div class="cert-footer">
                    <span class="cert-date">${done ? '📅 ' + dateStr : 'Aún no desbloqueado'}</span>
                    ${done
                        ? `<button class="cert-action-btn download" style="background:${cert.gradient};" onclick="openCertPreview('${cert.id}')">
                               <i class="fas fa-eye"></i> Ver
                           </button>`
                        : `<button class="cert-action-btn locked-btn" disabled>🔒 Bloqueado</button>`
                    }
                </div>
            </div>
        </div>`;
    }).join('');

    document.getElementById('certCountLabel').textContent = `${earned} ganado${earned !== 1 ? 's' : ''}`;
}

function buildCertDoc(cert, userName) {
    const dates   = getCertDates();
    const dateStr = dates[cert.id] || new Date().toLocaleDateString('es-SV', { year:'numeric', month:'long', day:'numeric' });
    const name    = userName || 'Estudiante';
    return `
    <div class="certificate-doc" style="border-color:${cert.color}; color:${cert.color};">
        <div style="position:absolute;inset:0;background:${cert.gradient};opacity:.04;pointer-events:none;border-radius:16px;"></div>
        <div class="cert-doc-logo">${cert.icon}</div>
        <div class="cert-doc-brand" style="color:${cert.color};">Koko's Talk</div>
        <hr class="cert-doc-divider" style="background:${cert.color};">
        <div class="cert-doc-headline" style="color:${cert.color};">Certifica que</div>
        <div class="cert-doc-name" style="color:#3c3c3c;">${name}</div>
        <div class="cert-doc-body" style="color:#555;">${cert.desc} del programa de Lengua de Señas Salvadoreña (LESSA).</div>
        <div class="cert-doc-level" style="background:${cert.gradient};">${cert.levelLabel}</div>
        <hr class="cert-doc-divider" style="background:${cert.color};">
        <div class="cert-doc-footer">
            <div class="cert-doc-sig">
                <div class="cert-doc-sig-line" style="background:${cert.color};"></div>
                <div class="cert-doc-sig-label" style="color:${cert.color};">Koko's Talk — Dirección Académica</div>
            </div>
            <div class="cert-doc-date" style="color:${cert.color};">Fecha de obtención<br><strong>${dateStr}</strong></div>
        </div>
        <div class="cert-doc-seal" style="color:${cert.color};">${cert.icon}</div>
    </div>`;
}

function openCertPreview(certId) {
    currentCert = CERTS.find(c => c.id === certId);
    if (!currentCert) return;
    const name = document.getElementById('inputName').value.trim() || profile.name || 'Estudiante';
    document.getElementById('certDocContainer').innerHTML = buildCertDoc(currentCert, name);
    document.getElementById('certDownloadBtn').style.background = currentCert.gradient;
    document.getElementById('certPreviewOverlay').classList.add('open');
}
function closeCertPreview() {
    document.getElementById('certPreviewOverlay').classList.remove('open');
    currentCert = null;
}
function downloadCert() {
    if (!currentCert) return;
    showToast('📄 Abriendo certificado para imprimir...');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
function init() {
    const game      = loadState();
    const completed = game.completedLessons || [];

    populateForm();       // primero llena el formulario con datos guardados
    renderHero(completed);
    renderStats(completed);
    renderRing(completed);
    renderBars(completed);
    renderLessonLists(completed);
    renderBadges(completed);
    renderCerts(completed);
}

init();