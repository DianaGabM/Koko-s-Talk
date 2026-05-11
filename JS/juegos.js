    const letterImages = {
           'A': 'img/A.png',
    'B': 'img/B.png',
    'C': 'img/C.png',
    'D': 'img/D.png',
    'E': 'img/E.png',
    'F': 'img/F.png',
    'G': 'img/G.png',
    'H': 'img/H.png',
    'I': 'img/I.png',
    'J': 'img/J.png',
    'K': 'img/K.png',
    'L': 'img/L.png',
    'M': 'img/M.png',
    'N': 'img/N.png',
    'O': 'img/O.png',
    'P': 'img/P.png',
    'Q': 'img/Q.png',
    'R': 'img/R.png',
    'S': 'img/S.png',
    'T': 'img/T.png',
    'U': 'img/U.png',
    'V': 'img/V.png',
    'W': 'img/W.png',
    'X': 'img/X.png',
    'Y': 'img/Y.png',
    'Z': 'img/Z.png'
    };

    // Datos del abecedario LESSA (sin modificar)
    const lessaAlphabet = {
        'A': { description: "Puño con pulgar extendido", fingers: [1,0,0,0,0], thumbPos: "side" },
        'B': { description: "Mano abierta, dedos juntos", fingers: [1,1,1,1,1], thumbPos: "palm" },
        'C': { description: "Forma de C", fingers: [1,0,0,0,0], thumbPos: "curve" },
        'D': { description: "Índice extendido", fingers: [1,0,0,0,0], extendedFinger: "index" },
        'E': { description: "Dedos doblados", fingers: [0,0,0,0,0] },
        'F': { description: "OK Sign", fingers: [1,1,1,0,0], special: "ok" },
        'G': { description: "Índice lateral", fingers: [1,0,0,0,0], extendedFinger: "index-side" },
        'H': { description: "Dos dedos horizontales", fingers: [1,1,0,0,0], extendedFingers: "index-middle-horiz" },
        'I': { description: "Meñique extendido", fingers: [0,0,0,0,1], extendedFinger: "pinky" },
        'L': { description: "L shape", fingers: [1,0,0,0,0], extendedFinger: "index", thumbOut: true },
        'V': { description: "Victoria", fingers: [1,1,0,0,0], extendedFingers: [0,1] },
        'Y': { description: "Rock", fingers: [0,0,0,0,1], thumbOut: true }
    };

    let totalPoints = parseInt(localStorage.getItem('lessaPoints')) || 0;
    let game1Active = false;
    let currentGame1Letter = null;
    let nameLetters = [];
    let currentNameIndex = 0;
    let game2Camera = null;
    let hands2 = null;
    let lastDetectedLetter = '';
    let detectionCooldown = false;
    let accuracyThreshold = 70;

    function updateScores() {
        document.getElementById('game1Score').textContent = totalPoints + ' pts';
        document.getElementById('game2Score').textContent = totalPoints + ' pts';
    }

    function addPoints(points) {
        totalPoints += points;
        localStorage.setItem('lessaPoints', totalPoints);
        updateScores();
    }

    function updateNameDisplay() {
        const input = document.getElementById('nameInput').value.toUpperCase().replace(/[^A-Z]/g, '');
        nameLetters = input.split('');
        currentNameIndex = 0;
        
        const container = document.getElementById('nameLetters');
        document.getElementById('nameProgress').textContent = `0/${nameLetters.length}`;
        document.getElementById('nameStatus').textContent = '';
        
        if (nameLetters.length === 0) {
            container.innerHTML = '<span style="color: #94a3b8; font-size: 14px;">Las letras aparecerán aquí...</span>';
            return;
        }
        
        container.innerHTML = '';
        nameLetters.forEach((letter, idx) => {
            const div = document.createElement('div');
            div.style.cssText = `width: 50px; height: 50px; border: 3px solid ${idx === 0 ? '#f59e0b' : '#e5e7eb'}; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px; color: ${idx === 0 ? '#f59e0b' : '#94a3b8'}; background: ${idx === 0 ? '#fffbeb' : 'white'}; transition: all 0.3s ease;`;
            div.textContent = letter;
            div.id = `name-letter-${idx}`;
            container.appendChild(div);
        });
    }

    // Función para analizar la forma de la mano
    function analyzeHandShapeImproved(landmarks, targetLetter) {
        if (!landmarks || landmarks.length < 21) return 0;
        
        const fingerTips = [4, 8, 12, 16, 20];
        const fingerMCPs = [1, 5, 9, 13, 17];
        
        let extendedFingers = [];
        let fingerAngles = [];
        
        for (let i = 0; i < 5; i++) {
            const tip = landmarks[fingerTips[i]];
            const mcp = landmarks[fingerMCPs[i]];
            const pip = landmarks[fingerMCPs[i] + 1];
            
            const isExtended = tip.y < pip.y;
            extendedFingers.push(isExtended ? 1 : 0);
            
            let angle = Math.atan2(tip.y - mcp.y, tip.x - mcp.x) * 180 / Math.PI;
            fingerAngles.push(angle);
        }
        
        const thumbExtended = extendedFingers[0];
        const thumbAngle = fingerAngles[0];
        const thumbHorizontal = Math.abs(thumbAngle) > 60 && Math.abs(thumbAngle) < 120;
        
        let detectedLetter = null;
        let confidence = 0;
        
        const pattern = extendedFingers.join('');
        
        const patterns = {
            'A': '10000',
            'B': '11111',
            'C': '10000',
            'D': '01000',
            'E': '00000',
            'F': '01110',
            'G': '01000',
            'H': '01000',
            'I': '00001',
            'L': '01000',
            'V': '01100',
            'Y': '10001'
        };
        
        for (const [letter, pattern] of Object.entries(patterns)) {
            if (pattern === pattern) {
                let matchCount = 0;
                for (let i = 0; i < 5; i++) {
                    if (parseInt(pattern[i]) === extendedFingers[i]) matchCount++;
                }
                let matchConfidence = (matchCount / 5) * 100;
                if (matchConfidence > confidence) {
                    confidence = matchConfidence;
                    detectedLetter = letter;
                }
            }
        }
        
        if (targetLetter === 'A' && thumbExtended && !thumbHorizontal) confidence += 20;
        if (targetLetter === 'V' && extendedFingers[1] === 1 && extendedFingers[2] === 1 && extendedFingers[3] === 0) confidence += 30;
        
        confidence = Math.min(100, confidence);
        
        const feedbackDisplay = document.getElementById('feedbackDisplay');
        const feedbackText = document.getElementById('feedbackText');
        if (feedbackDisplay && detectedLetter) {
            feedbackDisplay.style.display = 'block';
            if (detectedLetter === targetLetter && confidence > accuracyThreshold) {
                feedbackText.textContent = `✓ Detectando: ${detectedLetter} (${Math.round(confidence)}%) - ¡Correcto! Mantén la seña`;
                feedbackDisplay.className = 'recognition-feedback correct';
            } else {
                feedbackText.textContent = `🖐️ Detectando: ${detectedLetter || '?'} (${Math.round(confidence)}%) - Sigue intentando`;
                feedbackDisplay.className = 'recognition-feedback';
            }
        }
        
        return confidence;
    }



    
    function startGame1() {
        game1Active = true;
        const letters = Object.keys(lessaAlphabet);
        currentGame1Letter = letters[Math.floor(Math.random() * letters.length)];
        
        const imageElement = document.getElementById('game1SignImage');
        const textElement = document.getElementById('game1LetterText');
        const container = document.getElementById('game1Display');
        
        if (letterImages[currentGame1Letter]) {
            imageElement.src = letterImages[currentGame1Letter];
            imageElement.style.display = 'block';
            textElement.style.display = 'none';
            container.style.background = '#f3f4f6';
        } else {
            textElement.textContent = currentGame1Letter;
            imageElement.style.display = 'none';
            textElement.style.display = 'block';
            container.style.background = '#f3f4f6';
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
            btn.onclick = function() {
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

    function startGame2Camera() {
        const video = document.getElementById('game2Video');
        const canvas = document.getElementById('game2Canvas');
        const ctx = canvas.getContext('2d');
        const feedbackDisplay = document.getElementById('feedbackDisplay');
        
        document.getElementById('game2Overlay').style.display = 'none';
        feedbackDisplay.style.display = 'block';
        
        hands2 = new Hands({locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }});
        
        hands2.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        
        hands2.onResults((results) => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
            
            if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                const landmarks = results.multiHandLandmarks[0];
                drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {color: '#f59e0b', lineWidth: 3});
                drawLandmarks(ctx, landmarks, {color: '#3b4cca', lineWidth: 2, radius: 4});
                
                if (nameLetters.length > 0 && currentNameIndex < nameLetters.length && !detectionCooldown) {
                    const target = nameLetters[currentNameIndex];
                    const accuracy = analyzeHandShapeImproved(landmarks, target);
                    
                    if (accuracy > 75) {
                        detectionCooldown = true;
                        
                        const letterDiv = document.getElementById(`name-letter-${currentNameIndex}`);
                        if (letterDiv) {
                            letterDiv.style.cssText = 'width: 50px; height: 50px; border: 3px solid #22c55e; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px; color: #22c55e; background: #f0fdf4; transform: scale(1.1); transition: all 0.3s ease;';
                        }
                        
                        currentNameIndex++;
                        document.getElementById('nameProgress').textContent = `${currentNameIndex}/${nameLetters.length}`;
                        
                        const feedbackText = document.getElementById('feedbackText');
                        feedbackText.textContent = `✓ ¡Correcto! Letra ${target} reconocida +10 pts`;
                        feedbackDisplay.className = 'recognition-feedback correct';
                        addPoints(10);
                        
                        setTimeout(() => {
                            feedbackDisplay.className = 'recognition-feedback';
                            feedbackText.textContent = `🖐️ Siguiente letra: ${nameLetters[currentNameIndex] || 'Completa tu nombre'}`;
                        }, 1000);
                        
                        if (currentNameIndex < nameLetters.length) {
                            const nextLetter = document.getElementById(`name-letter-${currentNameIndex}`);
                            if (nextLetter) {
                                nextLetter.style.cssText = 'width: 50px; height: 50px; border: 3px solid #f59e0b; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 24px; color: #f59e0b; background: #fffbeb; transform: scale(1.1); transition: all 0.3s ease;';
                            }
                        } else {
                            document.getElementById('nameStatus').textContent = '🎉 ¡Felicidades! Nombre completado +50 pts 🎉';
                            document.getElementById('nameStatus').style.color = '#22c55e';
                            addPoints(50);
                            const feedbackTextElem = document.getElementById('feedbackText');
                            feedbackTextElem.textContent = '🎉 ¡Excelente! Has completado todo el nombre 🎉';
                        }
                        
                        setTimeout(() => { detectionCooldown = false; }, 1500);
                    }
                }
            } else {
                const feedbackText = document.getElementById('feedbackText');
                if (feedbackText) feedbackText.textContent = '🖐️ Mano no detectada - Coloca tu mano frente a la cámara';
            }
        });
        
        game2Camera = new Camera(video, {
            onFrame: async () => {
                await hands2.send({image: video});
            },
            width: 640,
            height: 480
        });
        
        game2Camera.start();
    }

    document.addEventListener('DOMContentLoaded', () => {
        updateScores();
    });