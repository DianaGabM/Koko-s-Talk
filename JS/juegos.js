// ────────────────────────────────────────────────────────────────
// LETTER IMAGE MAP
// ────────────────────────────────────────────────────────────────
const letterImages = {
    'A':'img/A.png','B':'img/B.png','C':'img/C.png','D':'img/D.png',
    'E':'img/E.png','F':'img/F.png','G':'img/G.png','H':'img/H.png',
    'I':'img/I.png','J':'img/J.png','K':'img/K.png','L':'img/L.png',
    'M':'img/M.png','N':'img/N.png','O':'img/O.png','P':'img/P.png',
    'Q':'img/Q.png','R':'img/R.png','S':'img/S.png','T':'img/T.png',
    'U':'img/U.png','V':'img/V.png','W':'img/W.png','X':'img/X.png',
    'Y':'img/Y.png','Z':'img/Z.png'
};

// ────────────────────────────────────────────────────────────────
// LESSA ALPHABET  (descriptions for hints)
// ────────────────────────────────────────────────────────────────
const lessaAlphabet = {
    'A': "Closed fist, thumb extended to the side.",
    'B': "Open hand, all 4 fingers up, thumb folded in.",
    'C': "All fingers curved forming a C — open gap.",
    'D': "Only index finger pointing up, rest curled.",
    'E': "All fingers and thumb curled tight toward palm.",
    'F': "Thumb and index pinch; middle, ring, pinky up.",
    'G': "Fist with index pointing sideways.",
    'H': "Index and middle extended horizontally to the side.",
    'I': "Only pinky extended upward.",
    'J': "Pinky up, then draw a J in the air.",
    'K': "Index and middle pointing UP with thumb between them.",
    'L': "Index up + thumb to the side (L shape).",
    'M': "Fist: index, middle AND ring folded over the thumb.",
    'N': "Fist: index and middle folded over the thumb (ring stays lower).",
    'O': "All fingers curved forming a circle with the thumb.",
    'P': "Like K but fingers pointing DOWN.",
    'Q': "Hand pointing down, thumb and index pinching downward.",
    'R': "Index and middle crossed and pointing up.",
    'S': "Closed fist, thumb resting over the fingers.",
    'T': "Thumb pushed up between index and middle finger.",
    'U': "Index and middle together pointing up.",
    'V': "Index and middle spread apart in a V.",
    'W': "Index, middle and ring extended and spread.",
    'X': "Index finger hooked (half-bent), rest closed.",
    'Y': "Thumb out to the side + pinky pointing up.",
    'Z': "Index extended, draw a Z in the air."
};

const ALL_LETTERS = Object.keys(letterImages);

// ────────────────────────────────────────────────────────────────
// POINTS
// ────────────────────────────────────────────────────────────────
let totalPoints = parseInt(localStorage.getItem('lessaPoints')) || 0;

function updateScores() {
    document.getElementById('game1Score').textContent = totalPoints + ' pts';
    document.getElementById('game2Score').textContent = totalPoints + ' pts';
}
function addPoints(pts) {
    totalPoints += pts;
    localStorage.setItem('lessaPoints', totalPoints);
    updateScores();
}

// ────────────────────────────────────────────────────────────────
// GAME 1 — Guess the Letter
// ────────────────────────────────────────────────────────────────
let game1Active        = false;
let currentGame1Letter = null;

function startGame1() {
    game1Active = true;
    currentGame1Letter = ALL_LETTERS[Math.floor(Math.random() * ALL_LETTERS.length)];

    const img  = document.getElementById('game1SignImage');
    const txt  = document.getElementById('game1LetterText');
    const cont = document.getElementById('game1Display');

    if (letterImages[currentGame1Letter]) {
        img.src = letterImages[currentGame1Letter];
        img.style.display = 'block';
        txt.style.display = 'none';
    } else {
        txt.textContent   = currentGame1Letter;
        img.style.display = 'none';
        txt.style.display = 'block';
    }
    cont.style.background = '#f3f4f6';

    const opts = [currentGame1Letter];
    while (opts.length < 4) {
        const r = ALL_LETTERS[Math.floor(Math.random() * ALL_LETTERS.length)];
        if (!opts.includes(r)) opts.push(r);
    }
    opts.sort(() => Math.random() - 0.5);

    const box = document.getElementById('game1Options');
    box.innerHTML = '';
    opts.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'game-option';
        btn.textContent = letter;
        btn.onclick = function () {
            document.querySelectorAll('.game-option').forEach(b => b.disabled = true);
            if (letter === currentGame1Letter) {
                this.classList.add('correct');
                addPoints(20);
                setTimeout(startGame1, 1500);
            } else {
                this.classList.add('wrong');
                document.querySelectorAll('.game-option').forEach(b => {
                    if (b.textContent === currentGame1Letter) b.classList.add('correct');
                });
                setTimeout(startGame1, 2000);
            }
        };
        box.appendChild(btn);
    });
}

// ────────────────────────────────────────────────────────────────
// GAME 2 — Spell Your Name (state)
// ────────────────────────────────────────────────────────────────
let nameLetters       = [];
let currentNameIndex  = 0;
let game2Camera       = null;
let hands2            = null;
let detectionCooldown = false;

// ── Name display ─────────────────────────────────────────────────
function updateNameDisplay() {
    const raw = document.getElementById('nameInput').value.toUpperCase().replace(/[^A-Z]/g, '');
    nameLetters      = raw.split('');
    currentNameIndex = 0;

    document.getElementById('nameProgress').textContent = `0/${nameLetters.length}`;
    document.getElementById('nameStatus').textContent   = '';

    const container = document.getElementById('nameLetters');
    if (nameLetters.length === 0) {
        container.innerHTML = '<span style="color:#94a3b8;font-size:14px;">Letters will appear here...</span>';
        document.getElementById('currentLetterHint').style.display = 'none';
        return;
    }

    container.innerHTML = '';
    nameLetters.forEach((letter, idx) => {
        const div = document.createElement('div');
        div.style.cssText = letterBoxStyle(idx, 'pending');
        div.textContent   = letter;
        div.id            = `name-letter-${idx}`;
        container.appendChild(div);
    });

    updateHint();
}

function letterBoxStyle(idx, state) {
    const base = 'width:50px;height:50px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:bold;font-size:24px;transition:all 0.3s ease;border:3px solid ';
    if (state === 'done')   return base + '#22c55e;color:#22c55e;background:#f0fdf4;transform:scale(1.05);';
    if (state === 'active') return base + '#f59e0b;color:#f59e0b;background:#fffbeb;transform:scale(1.1);';
    return base + '#e5e7eb;color:#94a3b8;background:white;';
}

function updateHint() {
    const hint = document.getElementById('currentLetterHint');
    if (nameLetters.length === 0 || currentNameIndex >= nameLetters.length) {
        hint.style.display = 'none';
        return;
    }
    const letter = nameLetters[currentNameIndex];
    hint.style.display = 'block';
    document.getElementById('hintLetter').textContent = letter;
    document.getElementById('hintDesc').textContent   = lessaAlphabet[letter] || '';
}

// ── Feedback toast ────────────────────────────────────────────────
function showToast(msg, type) {
    const toast = document.getElementById('feedbackToast');
    const text  = document.getElementById('toastText');
    text.textContent = msg;
    toast.style.display = 'block';
    if (type === 'correct') {
        toast.style.background = 'rgba(34,197,94,0.92)';
        toast.style.color      = 'white';
        toast.style.border     = '2px solid #22c55e';
    } else if (type === 'trying') {
        toast.style.background = 'rgba(245,158,11,0.88)';
        toast.style.color      = 'white';
        toast.style.border     = '2px solid #f59e0b';
    } else {
        toast.style.background = 'rgba(255,255,255,0.92)';
        toast.style.color      = '#666';
        toast.style.border     = '2px solid #e5e7eb';
    }
}

// ── Accuracy bar ─────────────────────────────────────────────────
function setAccBar(acc) {
    const bar = document.getElementById('accuracyBar');
    bar.style.display = 'block';
    document.getElementById('accValue').textContent = acc + '%';
    const fill = document.getElementById('accFill');
    fill.style.width      = acc + '%';
    fill.style.background = acc >= 70 ? '#22c55e' : acc >= 50 ? '#f59e0b' : '#ef4444';
}

// ════════════════════════════════════════════════════════════════
// RECOGNITION ENGINE  (mismo que practicaconia.html)
// MediaPipe Y: 0 = top, 1 = bottom
// ════════════════════════════════════════════════════════════════

function isUp(tip, mcp, thr=0.06)   { return (mcp.y - tip.y) > thr; }
function isDown(tip, mcp, thr=0.05) { return (tip.y - mcp.y) > thr; }
function isCurl(tip, pip, thr=0.02) { return tip.y > pip.y - thr; }

function getFingerConfiguration(lm) {
    const W  = lm[0];
    const tC = lm[1], tM = lm[2], tI = lm[3], tT = lm[4];
    const iM = lm[5], iP = lm[6], iD = lm[7], iT = lm[8];
    const mM = lm[9], mP = lm[10], mD = lm[11], mT = lm[12];
    const rM = lm[13], rP = lm[14], rD = lm[15], rT = lm[16];
    const pM = lm[17], pP = lm[18], pD = lm[19], pT = lm[20];

    const indexUp    = isUp(iT, iM, 0.06);
    const middleUp   = isUp(mT, mM, 0.06);
    const ringUp     = isUp(rT, rM, 0.06);
    const pinkyUp    = isUp(pT, pM, 0.06);
    const indexDown  = isDown(iT, iM, 0.05);
    const middleDown = isDown(mT, mM, 0.05);

    const indexCurled  = isCurl(iT, iP);
    const middleCurled = isCurl(mT, mP);
    const ringCurled   = isCurl(rT, rP);
    const pinkyCurled  = isCurl(pT, pP);

    const dTipC = Math.hypot(tT.x - tC.x, tT.y - tC.y);
    const dIpC  = Math.hypot(tI.x - tC.x, tI.y - tC.y);
    const thumbExtended = dTipC > dIpC * 1.18;
    const thumbLateral  = Math.abs(tT.x - tM.x) > 0.055;
    const thumbIdxDist  = Math.hypot(tT.x - iT.x, tT.y - iT.y);
    const isPinch       = thumbIdxDist < 0.07;

    const hDx = mT.x - W.x, hDy = mT.y - W.y;
    const handUp   = hDy < -0.08;
    const handDown = hDy >  0.08;
    const handSide = Math.abs(hDx) > Math.abs(hDy) * 1.1;
    const imSep    = Math.abs(iT.x - mT.x);
    const extCount = [indexUp, middleUp, ringUp, pinkyUp].filter(Boolean).length;

    return {
        W, tT, tI, tM, tC,
        iT, iP, iM,
        mT, mP, mM,
        rT, rP, rM,
        pT, pP, pM,
        indexExtended: indexUp,  middleExtended: middleUp,
        ringExtended:  ringUp,   pinkyExtended:  pinkyUp,
        thumbExtended, thumbLateral,
        indexDown, middleDown,
        indexCurled, middleCurled, ringCurled, pinkyCurled,
        thumbIndexDist: thumbIdxDist, isPinch, idxMidSep: imSep,
        fingersPointingUp: handUp, fingersPointingDown: handDown, fingersPointingSide: handSide,
        extendedCount: extCount
    };
}

// ── K vs P ───────────────────────────────────────────────────────
function recognizeKorP(lm, letter) {
    const c  = getFingerConfiguration(lm);
    const dy = c.mT.y - c.W.y, dx = c.mT.x - c.W.x;
    let ori;
    if (Math.abs(dy) > Math.abs(dx) * 1.1) ori = dy < 0 ? 'UP' : 'DOWN';
    else ori = dx < 0 ? 'LEFT' : 'RIGHT';

    const iUp  = (c.iM.y - c.iT.y) > 0.06, mUp  = (c.mM.y - c.mT.y) > 0.06;
    const iDwn = (c.iT.y - c.iM.y) > 0.05, mDwn = (c.mT.y - c.mM.y) > 0.05;
    const rpCl = !c.ringExtended && !c.pinkyExtended && c.ringCurled && c.pinkyCurled;

    if (letter === 'K') {
        const kF = iUp && mUp;
        const kO = ori === 'UP' || ((ori === 'RIGHT' || ori === 'LEFT') && dy < 0);
        if (kF && kO && rpCl && c.thumbExtended) return 93;
        if (kF && kO && rpCl)                    return 80;
        if (kF && kO)                             return 65;
        if (kF && rpCl)                           return 55;
        if (ori === 'DOWN')                       return 10;
        return 25;
    }
    if (letter === 'P') {
        const wA = c.W.y < c.iT.y && c.W.y < c.mT.y;
        const pF = iDwn && mDwn, pO = ori === 'DOWN' || wA;
        if (pF && pO && rpCl && c.thumbExtended) return 93;
        if (pF && pO && rpCl)                    return 82;
        if (pF && wA)                             return 70;
        if (wA && rpCl)                           return 60;
        if (ori === 'UP')                         return 10;
        return 25;
    }
    return 50;
}

// ── Curvatura normalizada (helper compartido por M y N) ──────────
// curv = dist(tip,MCP) / dist(PIP,MCP)
// Bajo (~0.5-1.0) = dedo bien curvado  |  Alto (>1.5) = dedo extendido
function normCurv(tip, pip, mcp) {
    const d1 = Math.hypot(tip.x - mcp.x, tip.y - mcp.y);
    const d2 = Math.hypot(pip.x - mcp.x, pip.y - mcp.y);
    return d2 > 0.001 ? d1 / d2 : 2.0;
}

// ════════════════════════════════════════════════════════════════
// MAIN RECOGNITION — 26 letters
// ════════════════════════════════════════════════════════════════
function analyzeHandShapeForLetter(lm, letter) {
    if (!lm || lm.length < 21) return 0;
    if (letter === 'K' || letter === 'P') return recognizeKorP(lm, letter);
    const c = getFingerConfiguration(lm);

    switch (letter) {

    // ── A ── Closed fist, thumb LATERALLY extended
    case 'A': {
        const allCurl = c.indexCurled && c.middleCurled && c.ringCurled && c.pinkyCurled;
        if (allCurl && c.thumbLateral)              return 93;
        if (allCurl && c.thumbExtended)             return 72;
        if (c.extendedCount === 0 && c.thumbLateral) return 78;
        if (c.extendedCount === 0 && c.thumbExtended) return 62;
        if (allCurl)                                return 52;
        return 10;
    }

    // ── B ── All 4 fingers up, thumb folded IN
    case 'B': {
        const allUp = c.indexExtended && c.middleExtended && c.ringExtended && c.pinkyExtended;
        const tIn   = !c.thumbExtended && !c.thumbLateral;
        if (allUp && tIn && c.fingersPointingUp) return 94;
        if (allUp && tIn)  return 82;
        if (allUp)         return 62;
        if (c.extendedCount >= 3) return 35;
        return 12;
    }

    // ── C ── All fingers partially curved, open gap
    case 'C': {
        const pI = !c.indexExtended  && !c.indexCurled;
        const pM = !c.middleExtended && !c.middleCurled;
        const pR = !c.ringExtended   && !c.ringCurled;
        const pP = !c.pinkyExtended  && !c.pinkyCurled;
        const pCnt = [pI, pM, pR, pP].filter(Boolean).length;
        const gap  = c.thumbIndexDist > 0.09 && c.thumbIndexDist < 0.32;
        if (pCnt >= 3 && gap && !c.thumbExtended) return 90;
        if (pCnt >= 3 && gap) return 74;
        if (pCnt >= 2 && gap) return 60;
        if (gap && c.extendedCount === 0) return 50;
        return 15;
    }

    // ── D ── Only index up, rest curled, tip above wrist
    case 'D': {
        const only = c.indexExtended && !c.middleExtended && !c.ringExtended && !c.pinkyExtended;
        const curl = c.middleCurled && c.ringCurled && c.pinkyCurled;
        const high = c.iT.y < c.W.y;
        if (only && curl && high) return 95;
        if (only && curl)         return 85;
        if (only && high)         return 72;
        if (only)                 return 58;
        return 12;
    }

    // ── E ── All fingers + thumb curled tight
    case 'E': {
        const all  = c.indexCurled && c.middleCurled && c.ringCurled && c.pinkyCurled;
        const tIn  = !c.thumbExtended && !c.thumbLateral;
        const avg  = (Math.hypot(c.iT.x - c.W.x, c.iT.y - c.W.y) +
                      Math.hypot(c.mT.x - c.W.x, c.mT.y - c.W.y) +
                      Math.hypot(c.rT.x - c.W.x, c.rT.y - c.W.y) +
                      Math.hypot(c.pT.x - c.W.x, c.pT.y - c.W.y)) / 4;
        if (all && tIn && avg < 0.24) return 92;
        if (all && tIn)               return 80;
        if (all && avg < 0.24)        return 68;
        if (all)                      return 58;
        return 15;
    }

    // ── F ── Thumb+index pinch; middle+ring+pinky UP
    case 'F': {
        const threeUp = c.middleExtended && c.ringExtended && c.pinkyExtended;
        if (c.isPinch && threeUp && !c.indexExtended) return 94;
        if (c.isPinch && threeUp)                     return 78;
        if (c.isPinch && c.extendedCount >= 2)        return 58;
        if (c.isPinch)                                return 42;
        return 12;
    }

    // ── G ── Fist, index SIDEWAYS; hand lateral
    case 'G': {
        const hX = Math.abs(c.mT.x - c.W.x), hY = Math.abs(c.mT.y - c.W.y);
        const lat   = hX > hY * 0.85;
        const iX    = Math.abs(c.iT.x - c.iM.x), iY = Math.abs(c.iT.y - c.iM.y);
        const iSide = iX > 0.05 || (iX > iY * 0.75);
        const rCurl = c.middleCurled && c.ringCurled && c.pinkyCurled;
        const rDown = !c.middleExtended && !c.ringExtended && !c.pinkyExtended;
        if (lat && iSide && rCurl) return 92;
        if (lat && iSide && rDown) return 80;
        if (lat && rCurl)          return 65;
        if (iSide && rCurl)        return 58;
        if (c.fingersPointingUp)   return 10;
        return 18;
    }

    // ── H ── Index+middle horizontal; ring+pinky closed
    case 'H': {
        const two = c.indexExtended && c.middleExtended;
        const rCl = !c.ringExtended && !c.pinkyExtended;
        const iH  = Math.abs(c.iT.x - c.iM.x) > Math.abs(c.iT.y - c.iM.y) * 0.65;
        const mH  = Math.abs(c.mT.x - c.mM.x) > Math.abs(c.mT.y - c.mM.y) * 0.65;
        if (two && rCl && (iH && mH))           return 92;
        if (two && rCl && c.fingersPointingUp)   return 82;
        if (two && rCl)                          return 70;
        if (two && (iH || mH))                   return 58;
        return 12;
    }

    // ── I ── Only pinky up, rest tightly curled
    case 'I': {
        const only = c.pinkyExtended && !c.indexExtended && !c.middleExtended && !c.ringExtended;
        const curl = c.indexCurled && c.middleCurled && c.ringCurled;
        if (only && curl) return 95;
        if (only)         return 80;
        if (c.pinkyExtended && c.extendedCount === 1) return 70;
        if (c.pinkyExtended) return 42;
        return 10;
    }

    // ── J ── Same static shape as I
    case 'J': {
        const only = c.pinkyExtended && !c.indexExtended && !c.middleExtended && !c.ringExtended;
        if (only) return 85;
        if (c.pinkyExtended && c.extendedCount <= 2) return 52;
        return 12;
    }

    // ── L ── Index UP + thumb clearly LATERAL
    case 'L': {
        const iHigh  = (c.iM.y - c.iT.y) > 0.07;
        const tSide  = Math.abs(c.tT.x - c.tM.x) > 0.06;
        const rCurl  = c.middleCurled && c.ringCurled && c.pinkyCurled;
        const rDown  = !c.middleExtended && !c.ringExtended && !c.pinkyExtended;
        if (iHigh && tSide && rCurl)          return 96;
        if (iHigh && tSide && rDown)          return 88;
        if (iHigh && c.thumbExtended && rCurl) return 82;
        if (iHigh && tSide)                   return 70;
        if (iHigh && c.thumbExtended)         return 58;
        if (c.extendedCount >= 2)             return 12;
        return 10;
    }

    // ── M ──────────────────────────────────────────────────────────
    // VALORES REALES del debug (prueba en vivo):
    //   curvI:0.76  curvM:0.65  curvR:0.58  dy_rm:-0.028  TLat:true
    //
    // DIAGNÓSTICO: el fallo era thumbIn (TLat:true bloqueaba todo).
    // SOLUCIÓN: eliminar thumbIn. Solo usar curvatura y posición relativa.
    //
    // SEÑAL PRINCIPAL: curvRng <= curvMid + 0.20
    //   (ring igual o MÁS curvado que medio → los 3 cubren el pulgar)
    // SEÑAL RESPALDO:  dy_rm < 0.030
    //   (ring-tip NO más abajo que middle-tip)
    case 'M': {
        const noneUp = !c.indexExtended && !c.middleExtended &&
                       !c.ringExtended  && !c.pinkyExtended;

        // Curvatura normalizada de cada dedo
        const curvIdx = normCurv(c.iT, c.iP, c.iM);
        const curvMid = normCurv(c.mT, c.mP, c.mM);
        const curvRng = normCurv(c.rT, c.rP, c.rM);

        // SEÑAL PRINCIPAL: ring igual o más curvado que medio
        const ringAsOrMoreCurvedThanMid = curvRng <= curvMid + 0.20;
        const ringAsOrMoreCurvedThanIdx = curvRng <= curvIdx + 0.25;

        // SEÑAL 2: ring-tip NO claramente más abajo que middle-tip
        const dy_rm         = c.rT.y - c.mT.y;
        const ringNotDropped = dy_rm < 0.030;

        // SEÑAL 3: dispersión vertical de los 3 tips pequeña (mismo nivel)
        const maxDyGroup = Math.max(
            Math.abs(c.iT.y - c.mT.y),
            Math.abs(c.mT.y - c.rT.y),
            Math.abs(c.iT.y - c.rT.y)
        );
        const tipsLevel = maxDyGroup < 0.075;

        // SEÑAL 4: todos con curvatura baja (bien curvados)
        const allLowCurv = curvIdx < 1.30 && curvMid < 1.30 && curvRng < 1.30;

        if (noneUp && ringAsOrMoreCurvedThanMid && ringAsOrMoreCurvedThanIdx && allLowCurv) return 92;
        if (noneUp && ringAsOrMoreCurvedThanMid && allLowCurv && ringNotDropped)             return 86;
        if (noneUp && ringAsOrMoreCurvedThanMid && allLowCurv)                               return 80;
        if (noneUp && ringAsOrMoreCurvedThanMid && tipsLevel)                                return 74;
        if (noneUp && ringAsOrMoreCurvedThanMid && ringNotDropped)                           return 68;
        if (noneUp && allLowCurv && ringNotDropped)                                          return 62;
        // Penalizar: ring claramente menos curvado → N
        if (curvRng > curvMid + 0.40) return 14;
        if (dy_rm > 0.060)            return 14;
        if (noneUp)                   return 40;
        return 12;
    }

    // ── N ──────────────────────────────────────────────────────────
    // VALORES REALES del debug (prueba en vivo):
    //   curvI:0.46  curvM:0.35  curvR:1.91  dy_rm:0.061  TLat:true
    //
    // DIAGNÓSTICO: mismo problema — thumbIn bloqueaba (TLat:true).
    // SOLUCIÓN: eliminar thumbIn.
    //
    // SEÑAL PRINCIPAL: curvRng > curvMid + 0.40
    //   (ring MUCHO menos curvado que medio → solo 2 dedos cubren el pulgar)
    // SEÑAL RESPALDO:  dy_rm > 0.020
    //   (ring-tip más abajo que middle-tip)
    case 'N': {
        const noneUp = !c.indexExtended && !c.middleExtended &&
                       !c.ringExtended  && !c.pinkyExtended;

        // Curvatura normalizada
        const curvIdx = normCurv(c.iT, c.iP, c.iM);
        const curvMid = normCurv(c.mT, c.mP, c.mM);
        const curvRng = normCurv(c.rT, c.rP, c.rM);

        // SEÑAL PRINCIPAL: ring mucho menos curvado que medio
        const ringMuchLessCurved = curvRng > curvMid + 0.40;

        // SEÑAL 2: índice y medio bien curvados (cubren el pulgar)
        const idxMidWellCurved = curvIdx < 1.00 && curvMid < 1.00;

        // SEÑAL 3: ring-tip claramente más abajo que middle-tip
        const dy_rm       = c.rT.y - c.mT.y;
        const ringBelowMid = dy_rm > 0.020;

        // SEÑAL 4: par idx+mid más apretado que trío idx+rng
        const d_im = Math.hypot(c.iT.x - c.mT.x, c.iT.y - c.mT.y);
        const d_ir = Math.hypot(c.iT.x - c.rT.x, c.iT.y - c.rT.y);
        const pairTighter = d_im < d_ir * 0.87;

        // SEÑAL 5: dispersión vertical grande (ring caído)
        const maxDyGroup = Math.max(
            Math.abs(c.iT.y - c.mT.y),
            Math.abs(c.mT.y - c.rT.y),
            Math.abs(c.iT.y - c.rT.y)
        );
        const tipsSpread = maxDyGroup > 0.025;

        if (noneUp && ringMuchLessCurved && idxMidWellCurved && ringBelowMid && pairTighter) return 92;
        if (noneUp && ringMuchLessCurved && idxMidWellCurved && ringBelowMid)                 return 86;
        if (noneUp && ringMuchLessCurved && idxMidWellCurved && pairTighter)                  return 80;
        if (noneUp && ringMuchLessCurved && idxMidWellCurved)                                 return 74;
        if (noneUp && ringMuchLessCurved && ringBelowMid && tipsSpread)                       return 68;
        if (noneUp && ringMuchLessCurved && ringBelowMid)                                     return 62;
        if (noneUp && ringBelowMid && pairTighter && tipsSpread)                              return 56;
        // Penalizar: ring igual de curvado → M
        if (curvRng <= curvMid + 0.20) return 14;
        if (dy_rm < 0.010)             return 14;
        if (noneUp && ringBelowMid)    return 50;
        if (noneUp)                    return 35;
        return 12;
    }

    // ── O ── All fingers curved into circle
    case 'O': {
        const none = !c.indexExtended && !c.middleExtended && !c.ringExtended && !c.pinkyExtended;
        const big  = c.thumbIndexDist < 0.12 && none;
        if (big && !c.thumbExtended) return 92;
        if (big)                      return 76;
        if (c.isPinch && none)        return 70;
        if (big || (c.isPinch && c.extendedCount === 0)) return 58;
        return 12;
    }

    // ── Q ── Hand pointing DOWN, thumb+index pinching downward
    case 'Q': {
        const wA  = c.W.y < c.iT.y;
        const iHg = c.iT.y > c.iM.y;
        const tDn = c.tT.y > c.tM.y - 0.02;
        const nP  = c.thumbIndexDist < 0.10;
        if (wA && iHg && nP && tDn) return 90;
        if (wA && iHg && nP)        return 80;
        if (c.isPinch && c.fingersPointingDown) return 80;
        if (c.isPinch && wA)        return 68;
        if (c.isPinch)              return 50;
        return 12;
    }

    // ── R ── Index+middle UP and CROSSED
    case 'R': {
        const two = c.indexExtended && c.middleExtended;
        const rCl = !c.ringExtended && !c.pinkyExtended;
        if (two && rCl && c.idxMidSep < 0.028) return 90;
        if (two && rCl && c.idxMidSep < 0.048) return 72;
        if (two && rCl)                          return 50;
        return 12;
    }

    // ── S ── Tight fist; thumb over fingers
    case 'S': {
        const all = c.indexCurled && c.middleCurled && c.ringCurled && c.pinkyCurled;
        const tOv = !c.thumbExtended && !c.thumbLateral;
        if (all && tOv)                   return 92;
        if (all && !c.thumbExtended)      return 80;
        if (c.extendedCount === 0 && tOv) return 74;
        if (c.extendedCount === 0 && !c.thumbExtended) return 58;
        return 12;
    }

    // ── T ── Thumb tip pushed UP between index and middle
    case 'T': {
        const allCurl       = c.indexCurled && c.middleCurled && c.ringCurled && c.pinkyCurled;
        const allDown       = !c.indexExtended && !c.middleExtended && !c.ringExtended && !c.pinkyExtended;
        const notLat        = !c.thumbLateral;
        const thumbAboveMcp = c.tT.y < c.iM.y + 0.02;
        const thumbAbovePip = c.tT.y < c.iP.y + 0.03;
        const lx            = Math.min(c.iM.x, c.mM.x) - 0.045;
        const rx            = Math.max(c.iM.x, c.mM.x) + 0.045;
        const thumbXok      = c.tT.x > lx && c.tT.x < rx;
        if (allCurl && notLat && thumbAboveMcp && thumbXok && thumbAbovePip) return 93;
        if (allCurl && notLat && thumbAboveMcp && thumbXok)                   return 83;
        if (allCurl && notLat && thumbAboveMcp)                               return 72;
        if (allDown && notLat && thumbAboveMcp && thumbXok)                   return 68;
        if (allCurl && notLat && !c.thumbExtended)                            return 52;
        if (c.thumbLateral || c.thumbExtended)                                return 10;
        return 18;
    }

    // ── U ── Index+middle UP and CLOSE TOGETHER
    case 'U': {
        const two = c.indexExtended && c.middleExtended;
        const rCl = !c.ringExtended && !c.pinkyExtended;
        const cl  = c.idxMidSep < 0.032;
        if (two && rCl && cl && c.fingersPointingUp) return 93;
        if (two && rCl && cl)                         return 82;
        if (two && rCl && c.idxMidSep < 0.048)        return 65;
        if (two && rCl)                               return 50;
        return 12;
    }

    // ── V ── Index+middle UP and CLEARLY SEPARATED
    case 'V': {
        const two = c.indexExtended && c.middleExtended;
        const rCl = !c.ringExtended && !c.pinkyExtended;
        if (two && rCl && c.idxMidSep > 0.042) return 94;
        if (two && rCl && c.idxMidSep > 0.026) return 75;
        if (two && rCl)                          return 50;
        return 12;
    }

    // ── W ── Index+middle+ring UP; pinky curled
    case 'W': {
        const three  = c.indexExtended && c.middleExtended && c.ringExtended;
        const pCurl  = !c.pinkyExtended && c.pinkyCurled;
        const pDown  = !c.pinkyExtended;
        if (three && pCurl)               return 93;
        if (three && pDown)               return 80;
        if (c.extendedCount >= 3 && pDown) return 65;
        return 18;
    }

    // ── X ── Index finger HOOKED
    case 'X': {
        const hook  = !c.indexExtended && c.iT.y < c.iP.y + 0.02 && c.iT.y > c.iM.y - 0.07;
        const rCurl = c.middleCurled && c.ringCurled && c.pinkyCurled;
        const rCl   = !c.middleExtended && !c.ringExtended && !c.pinkyExtended;
        if (hook && rCurl)                            return 88;
        if (hook && rCl)                              return 76;
        if (!c.indexExtended && rCl && !c.indexCurled) return 62;
        if (!c.indexExtended && rCl)                  return 48;
        return 12;
    }

    // ── Y ── Thumb LATERAL + pinky UP
    case 'Y': {
        const pH   = (c.pM.y - c.pT.y) > 0.06;
        const tOut = Math.abs(c.tT.x - c.tM.x) > 0.055 || c.thumbExtended;
        const mCurl = c.indexCurled && c.middleCurled && c.ringCurled;
        const mDwn  = !c.indexExtended && !c.middleExtended && !c.ringExtended;
        const sprd  = Math.hypot(c.tT.x - c.pT.x, c.tT.y - c.pT.y);
        if (pH && tOut && mCurl && sprd > 0.16) return 96;
        if (pH && tOut && mCurl)                return 86;
        if (pH && tOut && mDwn)                 return 76;
        if (pH && tOut)                         return 62;
        if (c.pinkyExtended && c.thumbExtended && !c.indexExtended && !c.middleExtended && !c.ringExtended) return 68;
        return 10;
    }

    // ── Z ── Index up only; draws Z in the air
    case 'Z': {
        const only = c.indexExtended && !c.middleExtended && !c.ringExtended && !c.pinkyExtended;
        const curl = c.middleCurled && c.ringCurled && c.pinkyCurled;
        if (only && curl) return 82;
        if (only)         return 68;
        if (c.indexExtended && c.extendedCount <= 2) return 48;
        return 12;
    }

    default: return 40;
    }
}

// ════════════════════════════════════════════════════════════════
// GAME 2 — CAMERA & RECOGNITION LOOP
// Hold-to-confirm: sign must be held for 800 ms at ≥70% accuracy
// ════════════════════════════════════════════════════════════════

const HOLD_REQUIRED_MS = 800;
const MIN_ACCURACY     = 70;

let holdStart  = null;
let holdActive = false;

function resetHold() { holdStart = null; holdActive = false; }

function setHoldProgress(frac) {
    const fill = document.getElementById('accFill');
    fill.style.width      = Math.round(frac * 100) + '%';
    fill.style.background = '#22c55e';
}

function startGame2Camera() {
    const video  = document.getElementById('game2Video');
    const canvas = document.getElementById('game2Canvas');
    const ctx    = canvas.getContext('2d');
    const dbg    = document.getElementById('game2Debug');

    document.getElementById('game2Overlay').style.display = 'none';
    document.getElementById('accuracyBar').style.display  = 'block';
    showToast('🖐️ Place your hand in front of the camera', 'info');

    hands2 = new Hands({ locateFile: f => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}` });
    hands2.setOptions({
        maxNumHands: 1, modelComplexity: 1,
        minDetectionConfidence: 0.5, minTrackingConfidence: 0.5
    });

    hands2.onResults(results => {
        if (!video.videoWidth || !video.videoHeight) return;
        canvas.width  = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

        // No name entered yet
        if (nameLetters.length === 0) {
            showToast('✏️ Type your name on the left first', 'info');
            dbg.textContent = 'No name entered';
            resetHold();
            return;
        }

        // Name already complete
        if (currentNameIndex >= nameLetters.length) {
            showToast('🎉 Name complete! Type a new one.', 'correct');
            dbg.textContent = 'Name complete';
            resetHold();
            return;
        }

        if (results.multiHandLandmarks?.length > 0) {
            const lm     = results.multiHandLandmarks[0];
            const target = nameLetters[currentNameIndex];

            // Draw skeleton
            if (typeof drawConnectors === 'function' && typeof HAND_CONNECTIONS !== 'undefined') {
                drawConnectors(ctx, lm, HAND_CONNECTIONS, { color: '#3b4cca', lineWidth: 3 });
                drawLandmarks(ctx, lm, { color: '#f59e0b', lineWidth: 2, radius: 4 });
            }

            const cfg = getFingerConfiguration(lm);
            const acc = analyzeHandShapeForLetter(lm, target);

            // Debug bar — shows curvature for M/N diagnosis
            const cR = normCurv(cfg.rT, cfg.rP, cfg.rM).toFixed(2);
            const cM = normCurv(cfg.mT, cfg.mP, cfg.mM).toFixed(2);
            const dy = (cfg.rT.y - cfg.mT.y).toFixed(3);
            dbg.textContent = `${target} | Acc:${acc}% | Ext:${cfg.extendedCount} | TLat:${cfg.thumbLateral} | curvM:${cM} curvR:${cR} | dy_rm:${dy}`;

            setAccBar(acc);

            if (acc >= MIN_ACCURACY && !detectionCooldown) {
                // Start or continue hold
                if (!holdActive) { holdStart = Date.now(); holdActive = true; }
                const elapsed = Date.now() - holdStart;
                const frac    = Math.min(elapsed / HOLD_REQUIRED_MS, 1);
                setHoldProgress(frac);
                showToast(`✅ Hold it! ${target} detected — ${Math.round(frac * 100)}%`, 'trying');

                if (elapsed >= HOLD_REQUIRED_MS) {
                    // ── CONFIRMED ────────────────────────────────
                    resetHold();
                    detectionCooldown = true;

                    const box = document.getElementById(`name-letter-${currentNameIndex}`);
                    if (box) box.style.cssText = letterBoxStyle(currentNameIndex, 'done');

                    currentNameIndex++;
                    document.getElementById('nameProgress').textContent = `${currentNameIndex}/${nameLetters.length}`;
                    addPoints(15);

                    showToast(`✅ Great! "${target}" confirmed! +15 pts`, 'correct');

                    if (currentNameIndex < nameLetters.length) {
                        const next = document.getElementById(`name-letter-${currentNameIndex}`);
                        if (next) next.style.cssText = letterBoxStyle(currentNameIndex, 'active');
                        setTimeout(() => {
                            updateHint();
                            showToast(`👉 Now sign: ${nameLetters[currentNameIndex]}`, 'info');
                        }, 900);
                    } else {
                        document.getElementById('nameStatus').textContent = '🎉 Name complete! +50 pts';
                        document.getElementById('nameStatus').style.color = '#22c55e';
                        document.getElementById('currentLetterHint').style.display = 'none';
                        addPoints(50);
                        showToast('🎉 Congratulations! Full name signed!', 'correct');
                    }

                    setTimeout(() => {
                        detectionCooldown = false;
                        setAccBar(0);
                    }, 1200);
                }

            } else {
                if (holdActive) resetHold();
                setAccBar(acc);
                showToast(acc > 0
                    ? `🖐️ Keep trying: ${target} (${acc}%)`
                    : `🖐️ Sign the letter: ${target}`, 'info');
            }

        } else {
            // No hand visible
            resetHold();
            setAccBar(0);
            showToast('🖐️ Hand not detected — move closer to the camera', 'info');
            dbg.textContent = 'No hand detected';
        }
    });

    game2Camera = new Camera(video, {
        onFrame: async () => {
            if (hands2 && video?.videoWidth > 0) await hands2.send({ image: video });
        },
        width: 640, height: 480
    });
    game2Camera.start();
}

// ────────────────────────────────────────────────────────────────
// INIT
// ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    updateScores();
});