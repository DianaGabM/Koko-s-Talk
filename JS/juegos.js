// ============================================================
// LETTER IMAGES MAP
// ============================================================
const letterImages = {
    'A': 'img/A.png', 'B': 'img/B.png', 'C': 'img/C.png', 'D': 'img/D.png',
    'E': 'img/E.png', 'F': 'img/F.png', 'G': 'img/G.png', 'H': 'img/H.png',
    'I': 'img/I.png', 'J': 'img/J.png', 'K': 'img/K.png', 'L': 'img/L.png',
    'M': 'img/M.png', 'N': 'img/N.png', 'O': 'img/O.png', 'P': 'img/P.png',
    'Q': 'img/Q.png', 'R': 'img/R.png', 'S': 'img/S.png', 'T': 'img/T.png',
    'U': 'img/U.png', 'V': 'img/V.png', 'W': 'img/W.png', 'X': 'img/X.png',
    'Y': 'img/Y.png', 'Z': 'img/Z.png'
};

// ============================================================
// LESSA ALPHABET DATA
// ============================================================
const lessaAlphabet = {
    'A': { description: "Close your fist with your thumb extended to the side.", example: "Avocado", level: "Basic" },
    'B': { description: "Open hand, fingers together, thumb bent.", example: "Boat", level: "Basic" },
    'C': { description: "Form a 'C' by curving your fingers and thumb.", example: "House", level: "Basic" },
    'D': { description: "Index finger up, rest in fist.", example: "Finger", level: "Basic" },
    'E': { description: "All fingers bent toward the palm.", example: "Elephant", level: "Basic" },
    'F': { description: "Index finger and thumb forming a circle.", example: "Photo", level: "Basic" },
    'G': { description: "Index finger forward, thumb up.", example: "Cat", level: "Basic" },
    'H': { description: "Index and middle fingers separated horizontally.", example: "Leaf", level: "Basic" },
    'I': { description: "Pinky finger extended.", example: "Church", level: "Basic" },
    'J': { description: "Pinky draws a J in the air.", example: "Toy", level: "Intermediate" },
    'K': { description: "Index and middle in V, thumb in the middle pointing UP.", example: "Kilo", level: "Intermediate" },
    'L': { description: "Index up, thumb out.", example: "Moon", level: "Intermediate" },
    'M': { description: "Three fingers over thumb.", example: "Mom", level: "Intermediate" },
    'N': { description: "Two fingers bent over thumb.", example: "Cloud", level: "Intermediate" },
    'O': { description: "Circle with all fingers.", example: "Eye", level: "Intermediate" },
    'P': { description: "K inverted downward (fingers pointing DOWN).", example: "Dad", level: "Intermediate" },
    'Q': { description: "Pinch downward.", example: "Cheese", level: "Intermediate" },
    'R': { description: "Index and middle fingers crossed.", example: "Mouse", level: "Intermediate" },
    'S': { description: "Closed fist.", example: "Sun", level: "Advanced" },
    'T': { description: "Thumb inserted between index and middle finger.", example: "Cup", level: "Advanced" },
    'U': { description: "Two fingers together upward.", example: "Grape", level: "Advanced" },
    'V': { description: "V with two fingers.", example: "Cow", level: "Advanced" },
    'W': { description: "Three fingers extended.", example: "Waffle", level: "Advanced" },
    'X': { description: "Index finger hooked.", example: "Xylophone", level: "Advanced" },
    'Y': { description: "Thumb and pinky extended.", example: "Yoyo", level: "Advanced" },
    'Z': { description: "Index finger draws a Z.", example: "Shoe", level: "Advanced" }
};

// ============================================================
// STATE
// ============================================================
let totalPoints = parseInt(localStorage.getItem('lessaPoints')) || 0;
let game1Active = false;
let currentGame1Letter = null;
let nameLetters = [];
let currentNameIndex = 0;
let game2Camera = null;
let hands2 = null;
let detectionCooldown = false;
const ACCURACY_THRESHOLD = 50;

// ============================================================
// SCORE HELPERS
// ============================================================
function updateScores() {
    document.getElementById('game1Score').textContent = totalPoints + ' pts';
    document.getElementById('game2Score').textContent = totalPoints + ' pts';
}

function addPoints(points) {
    totalPoints += points;
    localStorage.setItem('lessaPoints', totalPoints);
    updateScores();
}

// ============================================================
// CORE HELPERS (from the working recognition app)
// ============================================================
function isFingerUp(tip, mcp, threshold = 0.05) {
    return (mcp.y - tip.y) > threshold;
}

function isFingerCurled(tip, pip) {
    return tip.y > pip.y - 0.02;
}

function isFingerDown(tip, mcp, threshold = 0.05) {
    return (tip.y - mcp.y) > threshold;
}

function getFingerConfiguration(landmarks) {
    const wrist    = landmarks[0];
    const thumbCmc = landmarks[1];
    const thumbMcp = landmarks[2];
    const thumbIp  = landmarks[3];
    const thumbTip = landmarks[4];
    const idxMcp   = landmarks[5];  const idxPip  = landmarks[6];
    const idxDip   = landmarks[7];  const idxTip  = landmarks[8];
    const midMcp   = landmarks[9];  const midPip  = landmarks[10];
    const midDip   = landmarks[11]; const midTip  = landmarks[12];
    const rngMcp   = landmarks[13]; const rngPip  = landmarks[14];
    const rngDip   = landmarks[15]; const rngTip  = landmarks[16];
    const pnkMcp   = landmarks[17]; const pnkPip  = landmarks[18];
    const pnkDip   = landmarks[19]; const pnkTip  = landmarks[20];

    const indexExtended  = isFingerUp(idxTip, idxMcp, 0.05);
    const middleExtended = isFingerUp(midTip, midMcp, 0.05);
    const ringExtended   = isFingerUp(rngTip, rngMcp, 0.05);
    const pinkyExtended  = isFingerUp(pnkTip, pnkMcp, 0.05);

    const indexDown  = isFingerDown(idxTip, idxMcp, 0.05);
    const middleDown = isFingerDown(midTip, midMcp, 0.05);

    const indexCurled  = isFingerCurled(idxTip, idxPip);
    const middleCurled = isFingerCurled(midTip, midPip);
    const ringCurled   = isFingerCurled(rngTip, rngPip);
    const pinkyCurled  = isFingerCurled(pnkTip, pnkPip);

    const thumbDistTip = Math.hypot(thumbTip.x - thumbCmc.x, thumbTip.y - thumbCmc.y);
    const thumbDistIp  = Math.hypot(thumbIp.x  - thumbCmc.x, thumbIp.y  - thumbCmc.y);
    const thumbExtended = thumbDistTip > thumbDistIp * 1.15;
    const thumbLateral  = Math.abs(thumbTip.x - thumbMcp.x) > 0.05;

    const handDx = midTip.x - wrist.x;
    const handDy = midTip.y - wrist.y;
    const fingersPointingUp   = handDy < -0.08;
    const fingersPointingDown = handDy >  0.08;
    const fingersPointingSide  = Math.abs(handDx) > Math.abs(handDy) * 1.1;

    const thumbIndexDist = Math.hypot(thumbTip.x - idxTip.x, thumbTip.y - idxTip.y);
    const isPinch = thumbIndexDist < 0.07;
    const idxMidSep = Math.abs(idxTip.x - midTip.x);
    const extendedCount = [indexExtended, middleExtended, ringExtended, pinkyExtended].filter(Boolean).length;

    return {
        wrist, thumbTip, thumbIp, thumbMcp, thumbCmc,
        idxTip, idxPip, idxMcp,
        midTip, midPip, midMcp,
        rngTip, rngPip, rngMcp,
        pnkTip, pnkPip, pnkMcp,
        indexExtended, middleExtended, ringExtended, pinkyExtended, thumbExtended,
        indexDown, middleDown,
        indexCurled, middleCurled, ringCurled, pinkyCurled,
        thumbLateral,
        thumbIndexDist, isPinch, idxMidSep,
        fingersPointingUp, fingersPointingDown, fingersPointingSide,
        extendedCount
    };
}

// ============================================================
// K vs P SPECIALIZED RECOGNIZER
// ============================================================
function recognizeKorP(landmarks, targetLetter) {
    const cfg = getFingerConfiguration(landmarks);
    const dy  = cfg.midTip.y - cfg.wrist.y;
    const dx  = cfg.midTip.x - cfg.wrist.x;
    const absDy = Math.abs(dy), absDx = Math.abs(dx);

    let orientation;
    if (absDy > absDx * 1.1) orientation = dy < 0 ? 'UP' : 'DOWN';
    else orientation = dx < 0 ? 'LEFT' : 'RIGHT';

    const idxUp  = (cfg.idxMcp.y - cfg.idxTip.y) > 0.05;
    const midUp  = (cfg.midMcp.y - cfg.midTip.y) > 0.05;
    const idxDwn = (cfg.idxTip.y - cfg.idxMcp.y) > 0.04;
    const midDwn = (cfg.midTip.y - cfg.midMcp.y) > 0.04;
    const ringPinkyClosed = !cfg.ringExtended && !cfg.pinkyExtended && cfg.ringCurled && cfg.pinkyCurled;

    if (targetLetter === 'K') {
        const kFingers = idxUp && midUp;
        const kOrient  = orientation === 'UP' || ((orientation === 'RIGHT' || orientation === 'LEFT') && dy < 0);
        if (kFingers && kOrient && ringPinkyClosed && cfg.thumbExtended) return 93;
        if (kFingers && kOrient && ringPinkyClosed)                       return 80;
        if (kFingers && kOrient)                                           return 68;
        if (kFingers && ringPinkyClosed)                                   return 58;
        if (orientation === 'DOWN')                                        return 15;
        return 30;
    }

    if (targetLetter === 'P') {
        const wristAboveTips = cfg.wrist.y < cfg.idxTip.y && cfg.wrist.y < cfg.midTip.y;
        const pFingers = idxDwn && midDwn;
        const pOrient  = orientation === 'DOWN' || wristAboveTips;
        if (pFingers && pOrient && ringPinkyClosed && cfg.thumbExtended) return 93;
        if (pFingers && pOrient && ringPinkyClosed)                       return 83;
        if (pFingers && wristAboveTips)                                   return 72;
        if (wristAboveTips && ringPinkyClosed)                            return 62;
        if (orientation === 'UP')                                         return 15;
        return 28;
    }
    return 50;
}

// ============================================================
// MAIN RECOGNITION — all 26 letters
// ============================================================
function analyzeHandShapeForLetter(landmarks, targetLetter) {
    if (!landmarks || landmarks.length < 21) return 0;
    if (targetLetter === 'K' || targetLetter === 'P') return recognizeKorP(landmarks, targetLetter);

    const cfg = getFingerConfiguration(landmarks);

    switch (targetLetter) {
        case 'A': {
            const allCurled = cfg.indexCurled && cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            if (allCurled && cfg.thumbExtended) return 93;
            if (allCurled && !cfg.thumbExtended) return 70;
            if (cfg.extendedCount === 0 && cfg.thumbExtended) return 75;
            if (cfg.extendedCount === 0) return 60;
            return 15;
        }
        case 'B': {
            const allUp  = cfg.indexExtended && cfg.middleExtended && cfg.ringExtended && cfg.pinkyExtended;
            const thumbIn = !cfg.thumbExtended;
            if (allUp && thumbIn && cfg.fingersPointingUp) return 94;
            if (allUp && thumbIn) return 82;
            if (allUp) return 65;
            if (cfg.extendedCount >= 3) return 40;
            return 20;
        }
        case 'C': {
            const partialIndex  = !cfg.indexExtended  && !cfg.indexCurled;
            const partialMiddle = !cfg.middleExtended && !cfg.middleCurled;
            const partialRing   = !cfg.ringExtended   && !cfg.ringCurled;
            const partialPinky  = !cfg.pinkyExtended  && !cfg.pinkyCurled;
            const partialCount  = [partialIndex, partialMiddle, partialRing, partialPinky].filter(Boolean).length;
            const cGap = cfg.thumbIndexDist > 0.08 && cfg.thumbIndexDist < 0.35;
            if (partialCount >= 3 && cGap && !cfg.thumbExtended) return 90;
            if (partialCount >= 2 && cGap) return 72;
            if (cGap && cfg.extendedCount <= 2) return 55;
            if (partialCount >= 3) return 50;
            return 25;
        }
        case 'D': {
            const onlyIndex  = cfg.indexExtended && !cfg.middleExtended && !cfg.ringExtended && !cfg.pinkyExtended;
            const restCurled = cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            const handUp     = cfg.fingersPointingUp || (cfg.idxTip.y < cfg.wrist.y);
            if (onlyIndex && restCurled && handUp) return 95;
            if (onlyIndex && restCurled) return 85;
            if (onlyIndex) return 68;
            return 20;
        }
        case 'E': {
            const allCurled = cfg.indexCurled && cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            const thumbIn   = !cfg.thumbExtended;
            const avgTipDist = (
                Math.hypot(cfg.idxTip.x - cfg.wrist.x, cfg.idxTip.y - cfg.wrist.y) +
                Math.hypot(cfg.midTip.x - cfg.wrist.x, cfg.midTip.y - cfg.wrist.y) +
                Math.hypot(cfg.rngTip.x - cfg.wrist.x, cfg.rngTip.y - cfg.wrist.y) +
                Math.hypot(cfg.pnkTip.x - cfg.wrist.x, cfg.pnkTip.y - cfg.wrist.y)
            ) / 4;
            if (allCurled && thumbIn && avgTipDist < 0.25) return 92;
            if (allCurled && thumbIn) return 80;
            if (allCurled) return 65;
            if (cfg.extendedCount === 0 && !cfg.thumbExtended) return 68;
            return 25;
        }
        case 'F': {
            const threeUp = cfg.middleExtended && cfg.ringExtended && cfg.pinkyExtended;
            const idxDown = !cfg.indexExtended;
            if (cfg.isPinch && threeUp && idxDown) return 94;
            if (cfg.isPinch && threeUp) return 78;
            if (cfg.isPinch && cfg.extendedCount >= 2) return 60;
            if (cfg.isPinch) return 45;
            return 20;
        }
        case 'G': {
            const handDx = Math.abs(cfg.midTip.x - cfg.wrist.x);
            const handDy = Math.abs(cfg.midTip.y - cfg.wrist.y);
            const isLateral = handDx > handDy * 0.9;
            const idxDeltaX = Math.abs(cfg.idxTip.x - cfg.idxMcp.x);
            const idxDeltaY = Math.abs(cfg.idxTip.y - cfg.idxMcp.y);
            const idxLateral = idxDeltaX > 0.05 || (idxDeltaX > idxDeltaY * 0.8);
            const restCurled = cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            const restDown   = !cfg.middleExtended && !cfg.ringExtended && !cfg.pinkyExtended;
            if (isLateral && idxLateral && restCurled) return 92;
            if (isLateral && idxLateral && restDown)   return 80;
            if (isLateral && restCurled)               return 68;
            if (idxLateral && restCurled)              return 60;
            if (cfg.fingersPointingUp && !isLateral)   return 15;
            return 22;
        }
        case 'H': {
            const twoExtended = cfg.indexExtended && cfg.middleExtended;
            const restClosed  = !cfg.ringExtended && !cfg.pinkyExtended;
            const idxHoriz = Math.abs(cfg.idxTip.x - cfg.idxMcp.x) > Math.abs(cfg.idxTip.y - cfg.idxMcp.y) * 0.7;
            const midHoriz = Math.abs(cfg.midTip.x - cfg.midMcp.x) > Math.abs(cfg.midTip.y - cfg.midMcp.y) * 0.7;
            const isHoriz  = idxHoriz && midHoriz;
            const isVert   = cfg.fingersPointingUp || cfg.indexExtended;
            if (twoExtended && restClosed && isHoriz) return 92;
            if (twoExtended && restClosed && isVert)  return 82;
            if (twoExtended && restClosed)            return 75;
            if (twoExtended)                          return 55;
            return 20;
        }
        case 'I': {
            const onlyPinky  = cfg.pinkyExtended && !cfg.indexExtended && !cfg.middleExtended && !cfg.ringExtended;
            const restCurled = cfg.indexCurled && cfg.middleCurled && cfg.ringCurled;
            if (onlyPinky && restCurled) return 95;
            if (onlyPinky) return 82;
            if (cfg.pinkyExtended && cfg.extendedCount === 1) return 78;
            if (cfg.pinkyExtended) return 50;
            return 15;
        }
        case 'J': {
            const onlyPinky = cfg.pinkyExtended && !cfg.indexExtended && !cfg.middleExtended && !cfg.ringExtended;
            if (onlyPinky) return 85;
            if (cfg.pinkyExtended && cfg.extendedCount <= 2) return 58;
            return 20;
        }
        case 'L': {
            const idxUp    = (cfg.idxMcp.y - cfg.idxTip.y) > 0.06;
            const thumbSide = Math.abs(cfg.thumbTip.x - cfg.thumbMcp.x) > 0.05;
            const restDown  = !cfg.middleExtended && !cfg.ringExtended && !cfg.pinkyExtended;
            const restCurled = cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            if (idxUp && thumbSide && restCurled) return 96;
            if (idxUp && thumbSide && restDown)   return 88;
            if (idxUp && cfg.thumbExtended && restDown) return 80;
            if (idxUp && thumbSide)               return 70;
            if (idxUp && cfg.thumbExtended)       return 60;
            if (cfg.extendedCount >= 2) return 18;
            return 15;
        }
        case 'M': {
            const allCurled = cfg.indexCurled && cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            const thumbIn   = !cfg.thumbExtended;
            const tipSpread = Math.max(
                Math.abs(cfg.idxTip.x - cfg.midTip.x),
                Math.abs(cfg.midTip.x - cfg.rngTip.x),
                Math.abs(cfg.idxTip.x - cfg.rngTip.x)
            );
            const tipsClose = tipSpread < 0.08;
            if (allCurled && thumbIn && tipsClose) return 88;
            if (allCurled && thumbIn) return 75;
            if (cfg.extendedCount === 0 && !cfg.thumbExtended) return 68;
            if (cfg.extendedCount === 0) return 55;
            return 25;
        }
        case 'N': {
            const allCurled = cfg.indexCurled && cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            const thumbIn   = !cfg.thumbExtended;
            const idxMidDist = Math.hypot(cfg.idxTip.x - cfg.midTip.x, cfg.idxTip.y - cfg.midTip.y);
            const idxMidClose = idxMidDist < 0.06;
            const ringLower   = cfg.rngTip.y > cfg.midTip.y - 0.01;
            if (allCurled && thumbIn && idxMidClose && ringLower) return 88;
            if (allCurled && thumbIn && idxMidClose) return 78;
            if (allCurled && thumbIn) return 65;
            if (cfg.extendedCount === 0 && !cfg.thumbExtended) return 58;
            return 25;
        }
        case 'O': {
            const bigCircle  = cfg.thumbIndexDist < 0.12 && cfg.extendedCount === 0;
            const noFingerUp = !cfg.indexExtended && !cfg.middleExtended && !cfg.ringExtended && !cfg.pinkyExtended;
            if (bigCircle && noFingerUp && !cfg.thumbExtended) return 92;
            if (bigCircle && noFingerUp) return 78;
            if (cfg.isPinch && cfg.extendedCount === 0) return 72;
            if (bigCircle) return 62;
            return 20;
        }
        case 'Q': {
            const wristAbove = cfg.wrist.y < cfg.idxTip.y;
            const idxHanging = cfg.idxTip.y > cfg.idxMcp.y;
            const thumbDown  = cfg.thumbTip.y > cfg.thumbMcp.y - 0.02;
            const nearPinch  = cfg.thumbIndexDist < 0.10;
            if (wristAbove && idxHanging && nearPinch && thumbDown) return 90;
            if (wristAbove && idxHanging && nearPinch) return 80;
            if (cfg.isPinch && cfg.fingersPointingDown) return 82;
            if (cfg.isPinch && wristAbove) return 70;
            if (cfg.isPinch) return 58;
            return 20;
        }
        case 'R': {
            const twoUp      = cfg.indexExtended && cfg.middleExtended;
            const restClosed = !cfg.ringExtended && !cfg.pinkyExtended;
            const crossed    = cfg.idxMidSep < 0.030;
            if (twoUp && restClosed && crossed) return 90;
            if (twoUp && restClosed && cfg.idxMidSep < 0.05) return 72;
            if (twoUp && restClosed) return 55;
            return 20;
        }
        case 'S': {
            const allCurled = cfg.indexCurled && cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            const thumbOver = !cfg.thumbExtended && !cfg.thumbLateral;
            if (allCurled && thumbOver) return 92;
            if (allCurled && !cfg.thumbExtended) return 82;
            if (cfg.extendedCount === 0 && !cfg.thumbExtended) return 75;
            if (cfg.extendedCount === 0) return 55;
            return 20;
        }
        case 'T': {
            const allCurled = cfg.indexCurled && cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            const allDown   = !cfg.indexExtended && !cfg.middleExtended && !cfg.ringExtended && !cfg.pinkyExtended;
            const minX = Math.min(cfg.idxMcp.x, cfg.midMcp.x) - 0.03;
            const maxX = Math.max(cfg.idxMcp.x, cfg.midMcp.x) + 0.03;
            const thumbBetween = cfg.thumbTip.x > minX && cfg.thumbTip.x < maxX;
            const thumbUpward  = cfg.thumbTip.y < cfg.idxMcp.y + 0.04;
            const thumbNotOut  = !cfg.thumbLateral;
            if (allCurled && thumbBetween && thumbUpward && thumbNotOut) return 93;
            if (allCurled && thumbBetween && thumbUpward) return 82;
            if (allDown   && thumbBetween) return 72;
            if (allCurled && !cfg.thumbExtended && !cfg.thumbLateral) return 62;
            if (cfg.thumbLateral || cfg.thumbExtended) return 20;
            return 25;
        }
        case 'U': {
            const twoUp      = cfg.indexExtended && cfg.middleExtended;
            const restClosed = !cfg.ringExtended && !cfg.pinkyExtended;
            const together   = cfg.idxMidSep < 0.035;
            if (twoUp && restClosed && together && cfg.fingersPointingUp) return 93;
            if (twoUp && restClosed && together) return 82;
            if (twoUp && restClosed && cfg.idxMidSep < 0.05) return 68;
            if (twoUp && restClosed) return 55;
            return 20;
        }
        case 'V': {
            const twoUp      = cfg.indexExtended && cfg.middleExtended;
            const restClosed = !cfg.ringExtended && !cfg.pinkyExtended;
            const separated  = cfg.idxMidSep > 0.040;
            if (twoUp && restClosed && separated) return 94;
            if (twoUp && restClosed && cfg.idxMidSep > 0.025) return 75;
            if (twoUp && restClosed) return 55;
            return 20;
        }
        case 'W': {
            const threeUp    = cfg.indexExtended && cfg.middleExtended && cfg.ringExtended;
            const pinkyDown  = !cfg.pinkyExtended;
            const pinkyCurled = cfg.pinkyCurled;
            if (threeUp && pinkyDown && pinkyCurled) return 93;
            if (threeUp && pinkyDown) return 80;
            if (cfg.extendedCount >= 3 && pinkyDown) return 68;
            return 25;
        }
        case 'X': {
            const hookedIndex = !cfg.indexExtended &&
                                cfg.idxTip.y < cfg.idxPip.y + 0.02 &&
                                cfg.idxTip.y > cfg.idxMcp.y - 0.06;
            const restClosed = !cfg.middleExtended && !cfg.ringExtended && !cfg.pinkyExtended;
            const restCurled = cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            if (hookedIndex && restCurled) return 88;
            if (hookedIndex && restClosed) return 78;
            if (!cfg.indexExtended && restClosed && !cfg.indexCurled) return 65;
            if (!cfg.indexExtended && restClosed) return 52;
            return 20;
        }
        case 'Y': {
            const pinkyUp  = (cfg.pnkMcp.y - cfg.pnkTip.y) > 0.05;
            const thumbOut = Math.abs(cfg.thumbTip.x - cfg.thumbMcp.x) > 0.05 || cfg.thumbExtended;
            const midThreeCurled = cfg.indexCurled && cfg.middleCurled && cfg.ringCurled;
            const midThreeDown   = !cfg.indexExtended && !cfg.middleExtended && !cfg.ringExtended;
            const spreadDist = Math.hypot(cfg.thumbTip.x - cfg.pnkTip.x, cfg.thumbTip.y - cfg.pnkTip.y);
            if (pinkyUp && thumbOut && midThreeCurled && spreadDist > 0.15) return 96;
            if (pinkyUp && thumbOut && midThreeCurled) return 86;
            if (pinkyUp && thumbOut && midThreeDown)   return 78;
            if (pinkyUp && thumbOut)                   return 65;
            if (cfg.pinkyExtended && cfg.thumbExtended && !cfg.indexExtended && !cfg.middleExtended && !cfg.ringExtended) return 72;
            return 15;
        }
        case 'Z': {
            const onlyIndex  = cfg.indexExtended && !cfg.middleExtended && !cfg.ringExtended && !cfg.pinkyExtended;
            const restCurled = cfg.middleCurled && cfg.ringCurled && cfg.pinkyCurled;
            if (onlyIndex && restCurled) return 82;
            if (onlyIndex) return 70;
            if (cfg.indexExtended && cfg.extendedCount <= 2) return 50;
            return 20;
        }
        default:
            return 0;
    }
}

// ============================================================
// FEEDBACK HELPER
// ============================================================
function setFeedback(text, type) {
    const feedbackDisplay = document.getElementById('feedbackDisplay');
    const feedbackText    = document.getElementById('feedbackText');
    if (!feedbackDisplay || !feedbackText) return;
    feedbackDisplay.style.display = 'block';
    feedbackDisplay.className = 'recognition-feedback' + (type ? ' ' + type : '');
    feedbackText.textContent = text;
}

// ============================================================
// GAME 1 — GUESS THE LETTER
// ============================================================
function startGame1() {
    game1Active = true;
    const letters = Object.keys(lessaAlphabet);
    currentGame1Letter = letters[Math.floor(Math.random() * letters.length)];

    const imageElement = document.getElementById('game1SignImage');
    const textElement  = document.getElementById('game1LetterText');

    if (letterImages[currentGame1Letter]) {
        imageElement.src = letterImages[currentGame1Letter];
        imageElement.style.display = 'block';
        textElement.style.display  = 'none';
    } else {
        textElement.textContent    = currentGame1Letter;
        imageElement.style.display = 'none';
        textElement.style.display  = 'block';
    }

    const options = [currentGame1Letter];
    while (options.length < 4) {
        const random = letters[Math.floor(Math.random() * letters.length)];
        if (!options.includes(random)) options.push(random);
    }
    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('game1Options');
    optionsContainer.innerHTML = '';
    options.forEach(letter => {
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
        optionsContainer.appendChild(btn);
    });
}

// ============================================================
// GAME 2 — SPELL YOUR NAME
// ============================================================
function updateNameDisplay() {
    const input = document.getElementById('nameInput').value.toUpperCase().replace(/[^A-Z]/g, '');
    nameLetters = input.split('').filter(c => c !== '');
    currentNameIndex = 0;

    const container = document.getElementById('nameLetters');
    document.getElementById('nameProgress').textContent = `0/${nameLetters.length}`;
    document.getElementById('nameStatus').textContent = '';

    if (nameLetters.length === 0) {
        container.innerHTML = '<span style="color:#94a3b8;font-size:14px;">Letters will appear here...</span>';
        return;
    }

    container.innerHTML = '';
    nameLetters.forEach((letter, idx) => {
        const div = document.createElement('div');
        div.id = `name-letter-${idx}`;
        applyLetterStyle(div, idx === 0 ? 'active' : 'pending', letter);
        container.appendChild(div);
    });
}

function applyLetterStyle(div, state, letter) {
    const styles = {
        active:    { border: '#f59e0b', color: '#f59e0b', bg: '#fffbeb' },
        done:      { border: '#22c55e', color: '#22c55e', bg: '#f0fdf4' },
        pending:   { border: '#e5e7eb', color: '#94a3b8', bg: 'white'   }
    };
    const s = styles[state] || styles.pending;
    div.style.cssText = `
        width:50px;height:50px;border:3px solid ${s.border};border-radius:12px;
        display:flex;align-items:center;justify-content:center;
        font-weight:bold;font-size:24px;color:${s.color};background:${s.bg};
        transition:all 0.3s ease;
    `;
    div.textContent = letter || div.textContent;
}

function startGame2Camera() {
    const video  = document.getElementById('game2Video');
    const canvas = document.getElementById('game2Canvas');
    const ctx    = canvas.getContext('2d');

    document.getElementById('game2Overlay').style.display = 'none';
    setFeedback('🖐️ Place your hand in front of the camera', '');

    hands2 = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });
    hands2.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    hands2.onResults((results) => {
        canvas.width  = video.videoWidth  || 640;
        canvas.height = video.videoHeight || 480;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            const landmarks = results.multiHandLandmarks[0];

            // Draw skeleton
            drawConnectors(ctx, landmarks, HAND_CONNECTIONS, { color: '#f59e0b', lineWidth: 3 });
            drawLandmarks(ctx, landmarks, { color: '#3b4cca', lineWidth: 2, radius: 4 });

            // Check if there's still a letter to sign
            if (nameLetters.length === 0) {
                setFeedback('✏️ Write your name above and press Enter', '');
                return;
            }
            if (currentNameIndex >= nameLetters.length) {
                // Name already completed — nothing more to detect
                return;
            }
            if (detectionCooldown) return;

            const target   = nameLetters[currentNameIndex];
            const accuracy = analyzeHandShapeForLetter(landmarks, target);

            if (accuracy >= ACCURACY_THRESHOLD) {
                // ── CORRECT ──
                detectionCooldown = true;

                // Mark current letter as done
                const doneDiv = document.getElementById(`name-letter-${currentNameIndex}`);
                if (doneDiv) applyLetterStyle(doneDiv, 'done', target);

                currentNameIndex++;
                document.getElementById('nameProgress').textContent = `${currentNameIndex}/${nameLetters.length}`;
                addPoints(10);

                if (currentNameIndex < nameLetters.length) {
                    // Highlight next letter
                    const nextDiv = document.getElementById(`name-letter-${currentNameIndex}`);
                    if (nextDiv) applyLetterStyle(nextDiv, 'active', nameLetters[currentNameIndex]);

                    setFeedback(`✓ Correct! Letter ${target} (${Math.round(accuracy)}%) — Now sign: ${nameLetters[currentNameIndex]}`, 'correct');
                } else {
                    // Name complete!
                    const statusEl = document.getElementById('nameStatus');
                    statusEl.textContent = '🎉 Congratulations! Name completed +50 pts 🎉';
                    statusEl.style.color  = '#22c55e';
                    addPoints(50);
                    setFeedback('🎉 Excellent! You spelled your whole name! 🎉', 'correct');
                }

                // Release cooldown after 1.5 s so the user can move to the next letter
                setTimeout(() => { detectionCooldown = false; }, 1500);

            } else {
                // ── INCORRECT / TRYING ──
                setFeedback(
                    `🖐️ Sign the letter "${target}" — Accuracy: ${Math.round(accuracy)}% (need ${ACCURACY_THRESHOLD}%)`,
                    accuracy > 50 ? '' : ''
                );
            }

        } else {
            // No hand in frame
            if (nameLetters.length > 0 && currentNameIndex < nameLetters.length) {
                setFeedback(`🖐️ No hand detected — sign the letter "${nameLetters[currentNameIndex]}"`, '');
            } else {
                setFeedback('🖐️ No hand detected — place your hand in front of the camera', '');
            }
        }
    });

    game2Camera = new Camera(video, {
        onFrame: async () => { await hands2.send({ image: video }); },
        width: 640,
        height: 480
    });
    game2Camera.start();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    updateScores();

    // Allow pressing Enter in the name input to reset the progress
    const nameInput = document.getElementById('nameInput');
    if (nameInput) {
        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                updateNameDisplay();
                nameInput.blur();
            }
        });
    }
});