const lessaAlphabet = {
        'A': { 
            description: "Close your fist with your thumb extended to the side, forming an 'A' with your hand.", 
            example: "Avocado", 
            level: "basic", 
            tip: "Keep your fingers tightly closed and your thumb firm",
            imagen: "img/A.png"   
        },
        'B': { 
            description: "Open hand with all fingers extended and together, thumb bent toward the palm.", 
            example: "Boat", 
            level: "basic", 
            tip: "Fingers straight and together, like waving",
            imagen: "img/B.png"   
        },
        'C': { 
            description: "Form a 'C' by curving your fingers and thumb, leaving space between them.", 
            example: "House", 
            level: "basic", 
            tip: "Imagine holding a small ball",
            imagen: "img/C.png"   
        },
        'D': { 
            description: "Index finger extended upward, other fingers closed in a fist, thumb touching the closed fingers.", 
            example: "Finger", 
            level: "basic", 
            tip: "Like pointing up",
            imagen: "img/D.png"
        },
        'E': { 
            description: "All fingers bent toward the palm, thumb also bent crossing over the fingers.", 
            example: "Elephant", 
            level: "basic", 
            tip: "Bend your fingers well inward",
            imagen: "img/E.png" 
        },
        'F': { 
            description: "Index finger and thumb forming a circle, other fingers extended upward.", 
            example: "Photo", 
            level: "basic", 
            tip: "Like the 'OK' gesture",
            imagen: "img/F.png"   
        },
        'G': { 
            description: "Index finger pointing forward, thumb pointing up, other fingers closed.", 
            example: "Cat", 
            level: "basic", 
            tip: "Like pointing with your index finger",
            imagen: "img/G.png"   
        },
        'H': { 
            description: "Index and middle fingers extended and separated horizontally, other fingers closed.", 
            example: "Leaf", 
            level: "basic", 
            tip: "Form an 'H' with two fingers",
            imagen: "img/H.png"   
        },
        'I': { 
            description: "Pinky finger extended upward, other fingers closed in a fist.", 
            example: "Church", 
            level: "basic", 
            tip: "Lift only your pinky finger",
            imagen: "img/I.png"   
        },
        'J': { 
            description: "Pinky finger extended, drawing a 'J' in the air with a downward motion.", 
            example: "Toy", 
            level: "intermediate", 
            tip: "Make the J letter motion",
            imagen: "img/J.png"   
        },
        'K': { 
            description: "Index and middle fingers extended in a V, thumb between them, other fingers closed.", 
            example: "Kilo", 
            level: "intermediate", 
            tip: "Form a 'K' with your fingers",
            imagen: "img/K.png"   
        },
        'L': { 
            description: "Index finger pointing up, thumb pointing out, forming an 'L'.", 
            example: "Moon", 
            level: "intermediate", 
            tip: "Classic L shape with fingers",
            imagen: "img/L.png"   
        },
        'M': { 
            description: "Three fingers (index, middle, ring) bent over the thumb, pinky closed.", 
            example: "Mom", 
            level: "intermediate", 
            tip: "Three fingers over the thumb",
            imagen: "img/M.png"   
        },
        'N': { 
            description: "Two fingers (index and middle) bent over the thumb, others closed.", 
            example: "Cloud", 
            level: "intermediate", 
            tip: "Two fingers over the thumb",
            imagen: "img/N.png"  
        },
        'O': { 
            description: "All fingers and thumb forming a complete circle.", 
            example: "Eye", 
            level: "intermediate", 
            tip: "Form a perfect circle",
            imagen: "img/O.png"  
        },
        'P': { 
            description: "Similar to K but inverted downward, index and middle in a V pointing down.", 
            example: "Dad", 
            level: "intermediate", 
            tip: "The K inverted toward the ground",
            imagen: "img/P.png"  
        },
        'Q': { 
            description: "Index finger and thumb pinching downward, other fingers closed.", 
            example: "Cheese", 
            level: "intermediate", 
            tip: "Like grabbing something small",
            imagen: "img/Q.png"   
        },
        'R': { 
            description: "Index and middle fingers crossed, other fingers closed.", 
            example: "Mouse", 
            level: "intermediate", 
            tip: "Cross the two fingers",
            imagen: "img/R.png"  
        },
        'S': { 
            description: "Closed fist with thumb over the fingers.", 
            example: "Sun", 
            level: "advanced", 
            tip: "Firm fist, thumb on top",
            imagen: "img/S.png"  
        },
        'T': { 
            description: "Index finger bent over the thumb, other fingers closed.", 
            example: "Cup", 
            level: "advanced", 
            tip: "Index finger over the thumb",
            imagen: "img/T.png"   
        },
        'U': { 
            description: "Index and middle fingers extended together upward, others closed.", 
            example: "Grape", 
            level: "advanced", 
            tip: "Two fingers together",
            imagen: "img/U.png"   
        },
        'V': { 
            description: "Index and middle fingers extended and separated in a V shape.", 
            example: "Cow", 
            level: "advanced", 
            tip: "Victory or peace sign upward",
            imagen: "img/V.png"   
        },
        'W': { 
            description: "Index, middle, and ring fingers extended and separated, forming a W.", 
            example: "Waffle", 
            level: "advanced", 
            tip: "Three fingers extended",
            imagen: "img/W.png"  
        },
        'X': { 
            description: "Index finger bent like a hook, other fingers closed.", 
            example: "Xylophone", 
            level: "advanced", 
            tip: "Index finger curved like a hook",
            imagen: "img/X.png"   
        },
        'Y': { 
            description: "Pinky and thumb extended, other fingers closed (rock gesture).", 
            example: "Yoyo", 
            level: "advanced", 
            tip: "Horns or rock and roll",
            imagen: "img/Y.png"   
        },
        'Z': { 
            description: "Index finger drawing a 'Z' in the air.", 
            example: "Shoe", 
            level: "advanced", 
            tip: "Make the Z motion",
            imagen: "img/Z.png"  
        }
    };

    let currentLetter = null;

    function renderLetters() {
        const grid = document.getElementById('lettersGrid');
        if (!grid) return;
        grid.innerHTML = '';
        
        Object.entries(lessaAlphabet).forEach(([letter, data]) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.onclick = () => openModal(letter);
            
            card.innerHTML = `
                <span class="card-level level-${data.level}">${data.level}</span>
                <div class="card-letter">${letter}</div>
                <div class="card-word">${data.example}</div>
                ${data.imagen ? `<img src="${data.imagen}" class="card-image" alt="Letter ${letter} sign">` : ''}
            `;
            grid.appendChild(card);
        });
    }

    function filterLetters() {
        const search = document.getElementById('searchInput').value.toUpperCase();
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const letter = card.querySelector('.card-letter').textContent;
            card.style.display = letter.includes(search) ? 'block' : 'none';
        });
    }

    function openModal(letter) {
        currentLetter = letter;
        const data = lessaAlphabet[letter];
        
        document.getElementById('modalTitle').textContent = `Letter ${letter} - ${data.example}`;
        document.getElementById('modalLetter').textContent = letter;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalTip').textContent = data.tip;
        document.getElementById('modalExample').textContent = `Example: ${data.example}`;
        
        // Show the image in the modal if it exists
        const imagenContainer = document.getElementById('modalImageContainer');
        if (data.imagen) {
            imagenContainer.innerHTML = `<img src="${data.imagen}" alt="Sign for letter ${letter}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">`;
        } else {
            imagenContainer.innerHTML = `<span id="modalLetter" style="font-size: 150px; font-weight: 800; color: #3b4cca;">${letter}</span>`;
        }
        
        const levelBadge = document.getElementById('modalLevel');
        levelBadge.textContent = data.level.charAt(0).toUpperCase() + data.level.slice(1);
        levelBadge.className = `card-level level-${data.level}`;
        levelBadge.style.position = 'static';
        
        document.getElementById('letterModal').style.display = 'flex';
    }

    function closeModal(e) {
        if (!e || e.target.id === 'letterModal') {
            document.getElementById('letterModal').style.display = 'none';
        }
    }

    function practiceLetter() {
        if (currentLetter) {
            window.location.href = `practicaconia.html?letra=${currentLetter}`;
        }
        closeModal();
    }

    document.addEventListener('DOMContentLoaded', () => {
        renderLetters();
    });