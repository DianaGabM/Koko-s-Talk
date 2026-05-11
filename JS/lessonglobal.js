const lessonsCatalog = {
        basic: [
            {
        id: 'abc',
        icon: 'fas fa-font',
        color: '#1cb0f6',
        title: 'LESSA Alphabet',
        words: [
            'A', 'B', 'C', 'CH', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'LL', 'M', 'N', 'Ñ', 'O', 'P', 'Q',
            'R', 'RR', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        videoUrls: ['', '', ''],
        images: [
            'img/A.png',
            'img/B.png',
            'img/C.png',
            'img/CH.png',
            'img/D.png',
            'img/E.png',
            'img/F.png',
            'img/G.png',
            'img/H.png',
            'img/I.png',
            'img/J.png',
            'img/K.png',
            'img/L.png',
            'img/DOBLEL.png',
            'img/M.png',
            'img/N.png',
            'img/Ñ.png',
            'img/O.png',
            'img/P.png',
            'img/Q.png',
            'img/R.png',
            'img/DOBLER.png',
            'img/S.png',
            'img/T.png',
            'img/U.png',
            'img/V.png',
            'img/W.png',
            'img/X.png',
            'img/Y.png',
            'img/Z.png'
        ],
        description: 'Learn the complete alphabet of Salvadoran Sign Language (LESSA). Each image shows the hand shape of a letter.',
        tips: [
            'Practice each letter in front of a mirror to check your finger position.',
            'Memorize the alphabet in order; it is the basis for spelling any word.',
            'Pay attention to palm orientation in letters like G, H, P, Q.',
            'Ñ has its own sign, different from N.',
            'Review five letters daily until you master them all.',
            'CH, LL and RR are unique signs: they are made with one hand and are not spelled letter by letter.'
        ],
        questions: [
            {
                text: 'In LESSA, which of these digraphs has its own hand shape (a single sign)?',
                options: ['CH', 'PH', 'TH', 'SH'],
                correct: 0
            },
            {
                text: 'What is the purpose of learning the manual alphabet?',
                options: ['To spell words', 'Only for children', 'To count', 'To color'],
                correct: 0
            },
            {
                text: 'What is recommended to practice the letters?',
                options: ['Use a mirror', 'Close your eyes', 'Don\'t practice', 'Just read'],
                correct: 0
            }
        ]
    },
            { 
                id: 'hola-adios-gracias', 
                icon: 'fas fa-hand-peace', 
                color: '#ff9600', 
                title: 'Hello, Goodbye, Thank You', 
                words: ['Hello', 'Goodbye', 'Thank you'],
                videoUrls: [
                    'videoslessons/HOLA.mp4.mp4', 
                    'videoslessons/ADIOS.mp4',   
                    'videoslessons/GRACIAS.mp4'       
                ],
                description: 'Learn the basic greetings in LESSA: Hello, Goodbye and Thank You. Essential for starting and ending a conversation.',
                tips: [
                    'Hello: raise your open hand to head height and move it gently.',
                    'Goodbye: same gesture, but moving your hand forward and backward.',
                    'Thank you: bring your open hand from your chin forward, like blowing a kiss.'
                ],
                questions: [
                    { text: 'In the "Hello" video, how is the greeting sign performed?', options: ['Open hand moving gently', 'Fist on chest', 'Index finger on temple', 'Clap'], correct: 0 },
                    { text: 'According to the videos, what is the difference between "Hello" and "Goodbye"?', options: ['The direction of movement', 'The number of fingers', 'Facial expression', 'Two hands are used'], correct: 0 },
                    { text: 'In the "Thank You" video, from which part of the body does the sign start?', options: ['From chin forward', 'From forehead', 'From chest', 'From shoulder'], correct: 0 }
                ] 
            },
            { 
                id: 'nombre-edad-nacionalidad', 
                icon: 'fas fa-id-card', 
                color: '#ce82ff', 
                title: 'Name, Age, Nationality', 
                words: ['Name', 'Age', 'Nationality'],
                videoUrls: [
                    'videoslessons/NOMBRE.mp4',    
                    'videoslessons/EDAD.mp4',    
                    'videoslessons/SALVADOREÑO.mp4'    
                ], 
                description: 'Learn to introduce yourself: say your name, your age and where you are from using basic identity signs.',
                tips: [
                    'Name: point to your chest with your index finger and then spell your name.',
                    'Age: touch your chin with your hand in a number shape and then show your age.',
                    'Nationality: use the sign for the country (e.g., El Salvador is made with a wavy motion in front of the chest).'
                ],
                questions: [
                    { text: 'In the "Name" video, what do you do first to say your name?', options: ['Point to your chest', 'Touch your forehead', 'Clap', 'Raise your hand'], correct: 0 },
                    { text: 'In the "Age" video, where do you touch to indicate age?', options: ['Chin', 'Forehead', 'Nose', 'Ear'], correct: 0 },
                    { text: 'In the "Nationality" video for El Salvador, what movement is used?', options: ['Wavy motion in front of chest', 'Closed fist', 'Index finger up', 'Open palm'], correct: 0 }
                ] 
            },
            { id: 'numeros', icon: 'fas fa-calculator', color: '#ff4b4b', title: 'Numbers', 
              videoUrls: ['videos/numeros1.mp4', 'videos/numeros2.mp4', 'videos/numeros3.mp4'],
              description: 'Numbers from 1 to 20.',
              tips: ['1 to 5 with fingers extended.', '6 to 9 are finger combinations.', '10 is made with index finger over thumb.'],
              questions: [
                  { text: 'How is the number 3 shown in LESSA?', options: ['Three fingers extended', 'Fist', 'Index finger and thumb', 'Open hand'], correct: 0 },
                  { text: 'What number does a closed fist represent?', options: ['0 or 10 depending on context', '5', '10', '1'], correct: 0 },
                  { text: 'How is the number 10 shown?', options: ['Index finger over thumb', 'Two hands', 'Fist', 'L hand shape'], correct: 0 }
              ] },
            { id: 'familia', icon: 'fas fa-users', color: '#00d4aa', title: 'Family', 
              videoUrls: ['videos/familia1.mp4', 'videos/familia2.mp4', 'videos/familia3.mp4'],
              description: 'Mom, dad, brother, sister, grandparents.',
              tips: ['Mom: touch chin.', 'Dad: touch forehead.', 'Siblings: two index fingers together.'],
              questions: [
                  { text: 'How do you say "mom" in LESSA?', options: ['Touching chin', 'Touching forehead', 'Touching chest', 'Touching shoulder'], correct: 0 },
                  { text: 'What sign represents "brother"?', options: ['Two index fingers together', 'Fist', 'L hand shape', 'Thumb up'], correct: 0 },
                  { text: 'How do you say "grandfather"?', options: ['Circle near temple', 'Touching chin', 'Hands together', 'Pointing to the ground'], correct: 0 }
              ] },
            { id: 'tiempo1', icon: 'fas fa-clock', color: '#ffc800', title: 'Basic Time', 
              videoUrls: ['videos/tiempo1.mp4', 'videos/tiempo2.mp4', 'videos/tiempo3.mp4'],
              description: 'Today, tomorrow, yesterday.',
              tips: ['Today: downward movement.', 'Tomorrow: forward movement.', 'Yesterday: backward movement over shoulder.'],
              questions: [
                  { text: 'How do you say "today" in LESSA?', options: ['Downward movement', 'Upward movement', 'Circle', 'Fist'], correct: 0 },
                  { text: 'What movement indicates "tomorrow"?', options: ['Forward', 'Backward', 'Sideways', 'Upward'], correct: 0 },
                  { text: 'How do you say "yesterday"?', options: ['Backward over shoulder', 'Forward', 'Circle on palm', 'Two fingers'], correct: 0 }
              ] },
            { id: 'colores', icon: 'fas fa-palette', color: '#ff86d0', title: 'Colors', 
              videoUrls: ['videos/colores1.mp4', 'videos/colores2.mp4', 'videos/colores3.mp4'],
              description: 'Red, blue, yellow, green.',
              tips: ['Red: touch lips.', 'Blue: circle on cheek.', 'Yellow: movement with Y hand shape.'],
              questions: [
                  { text: 'How do you say "red" in LESSA?', options: ['Touching lips', 'Touching cheek', 'Touching forehead', 'Touching nose'], correct: 0 },
                  { text: 'What color is indicated with a circle on the cheek?', options: ['Blue', 'Red', 'Green', 'Yellow'], correct: 0 },
                  { text: 'How do you say "yellow"?', options: ['Movement with Y hand shape', 'Fist', 'Two fingers', 'Open hand'], correct: 0 }
              ] },
            { id: 'oraciones', icon: 'fas fa-pen-fancy', color: '#58cc02', title: 'First Sentences', 
              videoUrls: ['videos/oraciones1.mp4', 'videos/oraciones2.mp4', 'videos/oraciones3.mp4'],
              description: 'Combine vocabulary to form simple sentences.',
              tips: ['Structure: Time + Object + Subject + Verb.', 'Raised eyebrows = question.', 'Negation with head movement.'],
              questions: [
                  { text: 'What is the typical sentence structure in LESSA?', options: ['Time + Object + Subject + Verb', 'Subject + Verb + Object', 'Verb + Subject', 'Object + Verb'], correct: 0 },
                  { text: 'How do you indicate a question in LESSA?', options: ['Raised eyebrows', 'Head down', 'Crossed hands', 'Fist'], correct: 0 },
                  { text: 'How do you express negation?', options: ['Head movement (shaking no)', 'Nodding', 'Hands up', 'Index finger'], correct: 0 }
              ] },
            { id: 'eval-basic', icon: 'fas fa-graduation-cap', color: '#ff9600', title: 'Basic Level Evaluation', 
              videoUrls: ['videos/evalbasic1.mp4', 'videos/evalbasic2.mp4', 'videos/evalbasic3.mp4'],
              description: 'General review of the basic level.',
              tips: ['Review all signs.', 'Practice with a partner.', 'Record your practice to self-evaluate.'],
              questions: [
                  { text: 'What is the goal of the basic level?', options: ['Initial communication', 'Speak English', 'Cook', 'Dance'], correct: 0 },
                  { text: 'What do you learn first in LESSA?', options: ['Basic vocabulary', 'Advanced grammar', 'Poetry', 'Mathematics'], correct: 0 },
                  { text: 'What is important in sign language communication?', options: ['Facial expression', 'Speed', 'Strength', 'Noise'], correct: 0 }
              ] }
        ],
        intermediate: [
            { 
                id: 'casa-baño-limpiar', 
                icon: 'fas fa-home', 
                color: '#58cc02', 
                title: 'House, Bathroom, Clean', 
                words: ['House', 'Bathroom', 'Clean'],
                videoUrls: [
                    'videoslessons/CASA.mp4',
                    'videoslessons/BAÑO.mp4',
                    'videoslessons/LIMPIAR.mp4'
                ], 
                description: 'Learn the signs for home spaces and actions: house, bathroom and cleaning. Useful for daily life.',
                tips: [
                    'House: form a roof with your hands together.',
                    'Bathroom: pretend to wash your hands or make a shower gesture.',
                    'Clean: move your flat hand over a surface like cleaning it.'
                ],
                questions: [
                    { text: 'In the "House" video, how is the sign represented?', options: ['Hands forming a roof', 'Closed fist', 'Index finger', 'Circle'], correct: 0 },
                    { text: 'In the "Bathroom" video, what action is simulated?', options: ['Washing hands or shower', 'Touching the wall', 'Pointing to the ground', 'Hands over eyes'], correct: 0 },
                    { text: 'In the "Clean" video, how is the action represented?', options: ['Flat hand over a surface', 'Opening a door', 'Pointing to mouth', 'Touching forehead'], correct: 0 }
                ] 
            },
            { 
                id: 'ciudades', 
                icon: 'fas fa-map-pin', 
                color: '#1cb0f6', 
                title: 'El Salvador, San Salvador, Santa Ana', 
                words: ['El Salvador', 'San Salvador', 'Santa Ana'],
                videoUrls: [
                    'videoslessons/ELSALVADOR.mp4',
                    'videoslessons/SANSALVADOR.mp4',
                    'videoslessons/SANTAANA.mp4'
                ], 
                description: 'Signs for important places: the country, the capital and a notable city.',
                tips: [
                    'El Salvador: wavy motion in front of the chest.',
                    'San Salvador: combine "San" + "Salvador" (circle on cheek).',
                    'Santa Ana: spell S-A-N-T-A A-N-A or use the local sign if you know it.'
                ],
                questions: [
                    { text: 'In the "El Salvador" video, what movement identifies the country?', options: ['Wavy motion in front of chest', 'Circle on head', 'Touch nose', 'Fist up'], correct: 0 },
                    { text: 'In the "San Salvador" video, how is the capital represented?', options: ['Circle on cheek', 'Open palm', 'Two fingers in V', 'Hand on heart'], correct: 0 },
                    { text: 'In the "Santa Ana" video, which method is mainly used?', options: ['Spelling', 'Unique sign', 'Circular motion', 'Touch on shoulder'], correct: 0 }
                ] 
            },
            { 
                id: 'comida-tipica', 
                icon: 'fas fa-utensils', 
                color: '#ff9600', 
                title: 'Pupusa, Beans, Atol', 
                words: ['Pupusa', 'Beans', 'Atol'],
                videoUrls: [
                    'videoslessons/PUPUSA.mp4',
                    'videoslessons/FRIJOL.mp4',
                    'videoslessons/ATOLE.mp4',
                
                ], 
                description: 'Learn the signs for three Salvadoran delights: pupusa, beans and atol. Gastronomy is part of our culture.',
                tips: [
                    'Pupusa: imitate the action of flattening the dough with your hands.',
                    'Beans: pretend to take a handful of beans with your hand.',
                    'Atol: pretend to hold a hot cup and drink.'
                ],
                questions: [
                    { text: 'How do you make the sign for "pupusa"?', options: ['Flattening with hands', 'Pointing to mouth', 'Touching head', 'Finger in air'], correct: 0 },
                    { text: 'What sign simulates taking a handful?', options: ['Beans', 'Pupusa', 'Atol', 'Bread'], correct: 0 },
                    { text: 'What is the sign for "atol"?', options: ['Holding cup and drinking', 'Stirring', 'Flattening', 'Pointing to throat'], correct: 0 }
                ] 
            },
            { id: 'cuerpo', icon: 'fas fa-hand-peace', color: '#ff4b4b', title: 'Human Body', videoUrls: ['videos/cuerpo1.mp4', 'videos/cuerpo2.mp4', 'videos/cuerpo3.mp4'], description: 'Body parts and ailments.', tips: ['Head is indicated by touching it.', 'Pain is indicated on the affected area.'], questions: [{text:'What body part is indicated on the forehead?',options:['Head','Eye','Nose','Mouth'],correct:0},{text:'How do you say "pain" in LESSA?',options:['Point to the affected area','Fist','Clap','Nod'],correct:0},{text:'How do you say "hand"?',options:['Show the hand','Fist','Index finger','Palm'],correct:0}] },
            { id: 'trabajo', icon: 'fas fa-briefcase', color: '#ce82ff', title: 'Work and Professions', videoUrls: ['videos/trabajo1.mp4', 'videos/trabajo2.mp4', 'videos/trabajo3.mp4'], description: 'Jobs and related verbs.', tips: ['Doctor is indicated by touching the wrist.', 'Teacher is indicated on the forehead.'], questions: [{text:'How do you say "doctor" in LESSA?',options:['Touching wrist','Touching forehead','Pointing to chest','Clapping'],correct:0},{text:'What sign represents "teacher"?',options:['Forehead + book','Fist','Hands together','Circle'],correct:0},{text:'How do you say "to work"?',options:['Fist over fist','Clap','Nod','Hands up'],correct:0}] },
            { id: 'transporte', icon: 'fas fa-bus', color: '#00d4aa', title: 'Transportation', videoUrls: ['videos/transporte1.mp4', 'videos/transporte2.mp4', 'videos/transporte3.mp4'], description: 'Means of transportation.', tips: ['Airplane with hands simulating flight.', 'Car simulating steering wheel.'], questions: [{text:'How do you indicate "airplane" in LESSA?',options:['Hands simulating flight','Fist','V fingers','Flat hand'],correct:0},{text:'How do you say "car"?',options:['Simulate steering wheel','Fist','Clap','Circle'],correct:0},{text:'What sign represents "bus"?',options:['Fingers parallel','Fist','Hands together','Index finger'],correct:0}] },
            { id: 'verbos', icon: 'fas fa-running', color: '#ffc800', title: 'Action Verbs', videoUrls: ['videos/verbos1.mp4', 'videos/verbos2.mp4', 'videos/verbos3.mp4'], description: 'Run, walk, jump.', tips: ['Run with index and middle fingers.', 'Walk alternating fingers.'], questions: [{text:'What verb simulates leg movement?',options:['Run','Eat','Sleep','Read'],correct:0},{text:'How do you say "jump" in LESSA?',options:['Upward movement','Downward movement','Circle','Fist'],correct:0},{text:'What verb is indicated with index and middle fingers?',options:['Run','Jump','Swim','Fly'],correct:0}] },
            { id: 'tiempo2', icon: 'fas fa-calendar-alt', color: '#ff86d0', title: 'Advanced Time', videoUrls: ['videos/tiempoav1.mp4', 'videos/tiempoav2.mp4', 'videos/tiempoav3.mp4'], description: 'Months, seasons, frequency.', tips: ['Months with numbers.', 'Seasons with circular movements.'], questions: [{text:'What does a circle on the back of the hand mean?',options:['Sometimes','Always','Never','Maybe'],correct:2},{text:'How do you say "summer" in LESSA?',options:['Sun on forehead','Rain','Wind','Cold'],correct:0},{text:'How do you say "always"?',options:['Continuous circle','Fist','Finger up','Nod'],correct:0}] },
            { id: 'clasificadores1', icon: 'fas fa-hand-peace', color: '#58cc02', title: 'Classifiers I', videoUrls: ['videos/clasif1.mp4', 'videos/clasif2.mp4', 'videos/clasif3.mp4'], description: 'Introduction to classifiers.', tips: ['Shape descriptors.', 'Person with index finger.'], questions: [{text:'What are classifiers used for in LESSA?',options:['Describe shapes and movements','Numbers','Colors','Sounds'],correct:0},{text:'How is a person shown in LESSA?',options:['Index finger','Fist','Open hand','Two fingers'],correct:0},{text:'What does a flat object classifier describe?',options:['Flat hand','Fist','Fingers','Circle'],correct:0}] },
            { id: 'eval-inter', icon: 'fas fa-certificate', color: '#ff9600', title: 'Intermediate Evaluation', videoUrls: ['videos/evalinter1.mp4', 'videos/evalinter2.mp4', 'videos/evalinter3.mp4'], description: 'Complete review of the intermediate level.', tips: ['Review vocabulary.', 'Practice conversations.'], questions: [{text:'What level comes after intermediate?',options:['Advanced','Basic','Beginner','None'],correct:0},{text:'What do you learn in the intermediate level?',options:['Extended vocabulary','Alphabet','Numbers','Colors'],correct:0},{text:'What are classifiers?',options:['Visual descriptors','Numbers','Letters','Colors'],correct:0}] }
        ],
        advanced: [
            {
                id: 'verbos-direccionales',
                icon: 'fas fa-arrow-right',
                color: '#1cb0f6',
                title: 'Directional Verbs',
                words: ['Give', 'Receive', 'Send'],
                videoUrls: [
                    'videoslessons/DAR.mp4',
                    'videoslessons/RECIBIR.mp4',
                    'videoslessons/ENVIAR.mp4'
                ],
                description: 'Learn directional verbs in LESSA: Give, Receive and Send. These verbs change direction depending on who performs the action.',
                tips: [
                    'Directional verbs move from the subject toward the object.',
                    'Give and Receive share the same movement but in opposite directions.',
                    'Send moves away from the body; Receive moves toward it.'
                ],
                questions: [
                    { text: 'In the directional verbs video, how do they move?', options: ['From subject toward object', 'Always upward', 'In circles', 'Backward'], correct: 0 },
                    { text: 'In the "Give" and "Receive" videos, what differentiates them?', options: ['Opposite directions', 'Different speed', 'Use the other hand', 'Same direction'], correct: 0 },
                    { text: 'In the "Send" video, which direction does the sign go?', options: ['Moves away from body', 'Moves toward body', 'Circular motion', 'Touch on chest'], correct: 0 }
                ]
            },
            {
                id: 'sabor-bailar-herida',
                icon: 'fas fa-heart',
                color: '#ff9600',
                title: 'Taste, Dance, Wound',
                words: ['Taste', 'Dance', 'Wound'],
                videoUrls: [
                    'videoslessons/SABOR.mp4',
                    'videoslessons/BAILAR.mp4',
                    'videoslessons/HERIDA.mp4'
                ],
                description: 'Learn to express sensations and actions in LESSA: Taste, Dance and Wound. Context and facial expression are key.',
                tips: [
                    'Taste: bring your fingers to your lips and express it with facial gesture.',
                    'Dance: move your hands rhythmically in front of your body.',
                    'Wound: point to the affected area and show a pained expression.'
                ],
                questions: [
                    { text: 'In the "Taste" video, how is this sensation expressed?', options: ['Fingers to lips with expression', 'Touching head', 'Closed fist', 'Clapping'], correct: 0 },
                    { text: 'In the "Dance" video, what movement represents the action?', options: ['Hands rhythmically in front of body', 'Jumping', 'Turning head', 'Pointing to ground'], correct: 0 },
                    { text: 'In the "Wound" video, how is it indicated?', options: ['Point to affected area', 'Touch forehead', 'Hands together', 'Finger to sky'], correct: 0 }
                ]
            },
           {
                id: 'carro-direccion-moto',
                icon: 'fas fa-motorcycle',
                color: '#ff4b4b',
                title: 'Car, Direction, Motorcycle',
                words: ['Car', 'Direction', 'Motorcycle'],
                videoUrls: [
                    'videoslessons/CARRO.mp4',
                    'videoslessons/DIRECCION.mp4',
                    'videoslessons/MOTO.mp4',
                ],
                description: 'Advanced classifiers to describe vehicles and direction: Car, Direction and Motorcycle in LESSA.',
                tips: [
                    'Car: hands simulating a steering wheel.',
                    'Direction: index finger pointing forward or toward the desired direction.',
                    'Motorcycle: hands on handlebars with forward movement.'
                ],
                questions: [
                    { text: 'How is "Car" represented in LESSA?', options: ['Simulating a steering wheel', 'Closed fist', 'Index finger', 'Palm up'], correct: 0 },
                    { text: 'How is "Direction" represented in LESSA?', options: ['Index finger pointing direction', 'Both hands open', 'Hand on forehead', 'Closed fist'], correct: 0 },
                    { text: 'How is "Motorcycle" indicated in LESSA?', options: ['Hands on handlebars', 'Clap', 'Finger up', 'Arms crossed'], correct: 0 }
                ]
            },
            {
                id: 'modismos-regionalismos',
                icon: 'fas fa-comment-dots',
                color: '#ce82ff',
                title: 'Idioms and Regionalisms',
                words: ['Sign', 'Local', 'Culture'],
                videoUrls: ['', '', ''],
                description: 'Discover idioms and regionalisms of LESSA: Local Sign, Culture and more.',
                tips: [
                    'Each region has its own signs for everyday concepts.',
                    'Local signs can vary even between nearby cities.',
                    'Culture is represented with a circle in front of the chest.'
                ],
                questions: [
                    { text: 'Do signs vary by region?', options: ['Yes, even between nearby cities', 'No, they are universal', 'Only in other countries', 'Only in the capital'], correct: 0 },
                    { text: 'How is "Culture" represented in LESSA?', options: ['Circle in front of chest', 'Fist up', 'Finger on temple', 'Palm down'], correct: 0 },
                    { text: 'What is a "Local Sign"?', options: ['Sign unique to a region', 'Universal sign', 'Informal gesture', 'Spelling'], correct: 0 }
                ]
            },
            {
                id: 'leyes-derechos',
                icon: 'fas fa-scale-balanced',
                color: '#00d4aa',
                title: 'Laws and Rights',
                words: ['Law', 'Right', 'Inclusion'],
                videoUrls: ['', '', ''],
                description: 'Learn the signs about laws and rights: Law, Right and Inclusion.',
                tips: [
                    'Law: flat hand moving down firmly.',
                    'Right: fist on chest.',
                    'Inclusion: open your hands from chest outward.'
                ],
                questions: [
                    { text: 'How is "Right" indicated in LESSA?', options: ['Fist on chest', 'Hand on head', 'Finger in air', 'Open palm'], correct: 0 },
                    { text: 'What movement represents "Inclusion"?', options: ['Hands from chest outward', 'Hands downward', 'Circle on stomach', 'Closed fist'], correct: 0 },
                    { text: 'How is "Law" made in LESSA?', options: ['Flat hand moving down firmly', 'Finger up', 'Clap', 'Circle'], correct: 0 }
                ]
            },
            {
                id: 'temas-abstractos',
                icon: 'fas fa-brain',
                color: '#ffc800',
                title: 'Abstract Topics',
                words: ['Love', 'Sadness', 'Happiness'],
                videoUrls: ['', '', ''],
                description: 'Express abstract concepts in LESSA: Love, Sadness and Happiness.',
                tips: [
                    'Love: cross your arms over your chest.',
                    'Sadness: fingers sliding down cheeks like tears.',
                    'Happiness: radiate from the chest with open hands.'
                ],
                questions: [
                    { text: 'How do you say "Love" in LESSA?', options: ['Crossing arms over chest', 'Touching head', 'Clapping', 'Pointing to sky'], correct: 0 },
                    { text: 'What gesture represents "Sadness"?', options: ['Fingers sliding down cheeks', 'Big smile', 'Fist up', 'Hand twist'], correct: 0 },
                    { text: 'How is "Happiness" indicated in LESSA?', options: ['Open hands from chest', 'Closed fist', 'Head down', 'Eyes closed'], correct: 0 }
                ]
            },
            {
                id: 'poesia-narracion',
                icon: 'fas fa-book-open',
                color: '#ff86d0',
                title: 'Poetry and Creative Storytelling',
                words: ['Story', 'Tale', 'Poem'],
                videoUrls: ['', '', ''],
                description: 'Learn to tell stories and create poetry in LESSA: Story, Tale and Poem.',
                tips: [
                    'Story: hands simulating an opening book.',
                    'Tale: similar but shorter and closer.',
                    'Poem: combines rhythm and expression with your hands.'
                ],
                questions: [
                    { text: 'How is "Story" represented in LESSA?', options: ['Hands simulating an opening book', 'A single finger', 'Palms down', 'Closed fist'], correct: 0 },
                    { text: 'What differentiates "Tale" from "Story"?', options: ['It is shorter and closer', 'There is no difference', 'Uses fewer hands', 'Only spelled'], correct: 0 },
                    { text: 'What does "Poem" combine in LESSA?', options: ['Rhythm and expression', 'Only spelling', 'Speed', 'Brute force'], correct: 0 }
                ]
            },
            {
                id: 'interpretacion-etica',
                icon: 'fas fa-handshake',
                color: '#58cc02',
                title: 'Interpretation and Ethics',
                words: ['Interpreter', 'Ethics', 'Respect'],
                videoUrls: ['', '', ''],
                description: 'Fundamental principles: Interpreter, Ethics and Respect in LESSA interpretation.',
                tips: [
                    'Interpreter: combines the signs for person and translate.',
                    'Ethics: indicated with hand on heart and mind.',
                    'Respect: greeting from the forehead.'
                ],
                questions: [
                    { text: 'How is "Ethics" represented in LESSA?', options: ['Hand on heart and mind', 'Only on head', 'Clap', 'Finger up'], correct: 0 },
                    { text: 'What does "Neutrality" imply in interpretation?', options: ['Balanced hands without taking sides', 'Taking sides', 'Speaking loudly', 'Moving fast'], correct: 0 },
                    { text: 'Who is the "Interpreter" of LESSA?', options: ['Person who translates signs', 'The one who speaks', 'An actor', 'A teacher'], correct: 0 }
                ]
            },
            {
                id: 'eval-avanzada',
                icon: 'fas fa-trophy',
                color: '#ff9600',
                title: 'Advanced Evaluation',
                words: ['Evaluation', 'Review', 'Practice'],
                videoUrls: ['', '', ''],
                description: 'Final evaluation of the advanced level: Evaluation, Review and Practice.',
                tips: [
                    'Review all the signs learned in the advanced level.',
                    'Practice with native LESSA speakers.',
                    'Fluency is achieved through daily practice.'
                ],
                questions: [
                    { text: 'What is needed to achieve fluency in LESSA?', options: ['Daily practice', 'Theory only', 'Not practicing', 'Guessing'], correct: 0 },
                    { text: 'What does professional interpretation involve?', options: ['Ethics and precision', 'Improvisation', 'Personal opinions', 'Extreme speed'], correct: 0 },
                    { text: 'How do you improve LESSA comprehension?', options: ['Watching videos without audio', 'Ignoring signs', 'Only reading', 'Without practicing'], correct: 0 }
                ]
            }
        ]
    };

    let game = { completedLessons: [], currentLessonId: 'abc' };
    let currentModalLesson = null;
    let questionsStatus = [false, false, false];

    // Function to get completed lessons count by level
    function getCompletedCountByLevel(levelName) {
        const lessons = lessonsCatalog[levelName];
        if (!lessons) return { completed: 0, total: 0 };
        const completed = game.completedLessons.filter(id => lessons.some(l => l.id === id)).length;
        return { completed, total: lessons.length };
    }

    // Function to check and get diploma
    function checkAndGetDiploma(levelType) {
        let levelName = '';
        let requiredLessons = [];
        let levelDisplayName = '';
        
        switch(levelType) {
            case 'basico':
                levelName = 'basic';
                requiredLessons = lessonsCatalog.basic;
                levelDisplayName = 'Basic Level';
                break;
            case 'intermedio':
                levelName = 'intermediate';
                requiredLessons = lessonsCatalog.intermediate;
                levelDisplayName = 'Intermediate Level';
                break;
            case 'avanzado':
                levelName = 'advanced';
                requiredLessons = lessonsCatalog.advanced;
                levelDisplayName = 'Advanced Level';
                break;
        }
        
        const completedCount = game.completedLessons.filter(id => requiredLessons.some(l => l.id === id)).length;
        const totalCount = requiredLessons.length;
        
        if (completedCount === totalCount && totalCount > 0) {
            // All lessons completed
            window.location.href = 'certi.html';
        } else {
            // Missing lessons
            const missingCount = totalCount - completedCount;
            const missingLevelsDiv = document.getElementById('missingLevelsInfo');
            
            let levelClass = '';
            
            switch(levelType) {
                case 'basico':
                    levelClass = 'basic';
                    break;
                case 'intermedio':
                    levelClass = 'intermediate';
                    break;
                case 'avanzado':
                    levelClass = 'advanced';
                    break;
            }
            
            missingLevelsDiv.innerHTML = `
                <div class="missing-level">
                    <div class="missing-level-icon ${levelClass}">
                        <i class="${levelType === 'basico' ? 'fas fa-book' : (levelType === 'intermedio' ? 'fas fa-chalkboard' : 'fas fa-star')}"></i>
                    </div>
                    <div class="missing-level-text">
                        <strong>${levelDisplayName}</strong>
                        <span>You are missing ${missingCount} lesson${missingCount !== 1 ? 's' : ''} to complete (${completedCount}/${totalCount})</span>
                    </div>
                </div>
            `;
            
            document.getElementById('diplomaWarningModal').style.display = 'flex';
        }
    }

    function closeWarningModal() {
        document.getElementById('diplomaWarningModal').style.display = 'none';
    }

    function setMascotMessage(msg) {
        const bubble = document.getElementById('mascot-message');
        if (bubble) bubble.textContent = msg;
    }

 function getOrganicFluidPositions(count, width = 600, height = 820) {
        const points = [];
        const startY = 55;
        const endY = height - 65;
        const stepY = (endY - startY) / (count - 1);
        const centerX = width / 2;
        for (let i = 0; i < count; i++) {
            const y = startY + stepY * i;
            const t = i / (count - 1);
            const phase = i * Math.PI / 2.4;
            const amplitude = width * 0.32 * (1 - Math.abs(t - 0.5) * 0.5);
            let x = centerX + Math.sin(phase) * amplitude;
            x = Math.min(width - 55, Math.max(55, x));
            points.push({ x, y });
        }
        return points;
    }

   
    function buildSuperSmoothPath(points) {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const dy = curr.y - prev.y;
        const dx = curr.x - prev.x;

        const tension = 0.75;

        
        const bulge = (i % 2 === 0 ? 1 : -1) * Math.abs(dy) * 0.45;

        const cp1x = prev.x + bulge;
        const cp1y = prev.y + dy * tension;
        const cp2x = curr.x + bulge;
        const cp2y = curr.y - dy * tension;

        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    return d;
}
    function canAccess(lessonsArray, idx) {
        if (idx === 0) return true;
        return game.completedLessons.includes(lessonsArray[idx-1].id);
    }

    function renderLevel(levelName, lessonsArray, containerId, fillId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const svg = container.querySelector('svg');
        const width = 600, height = 820;
        const positions = getOrganicFluidPositions(lessonsArray.length, width, height);
        const pathD = buildSuperSmoothPath(positions);
        
        const bgPath = svg.querySelector('.path-bg');
        const fillPath = svg.querySelector('.path-fill');
        if (bgPath) bgPath.setAttribute('d', pathD);
        if (fillPath) fillPath.setAttribute('d', pathD);
        
        const oldNodes = container.querySelectorAll('.lesson-node');
        oldNodes.forEach(n => n.remove());
        
        lessonsArray.forEach((lesson, idx) => {
            const pos = positions[idx];
            const completed = game.completedLessons.includes(lesson.id);
            const isCurrent = game.currentLessonId === lesson.id;
            const locked = (!completed && !isCurrent && !canAccess(lessonsArray, idx));
            
            const nodeDiv = document.createElement('div');
            nodeDiv.className = `lesson-node ${completed ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${locked ? 'locked' : ''}`;
            nodeDiv.style.left = `${(pos.x / width) * 100}%`;
            nodeDiv.style.top = `${(pos.y / height) * 100}%`;
            nodeDiv.style.transform = 'translate(-50%, -50%)';
            nodeDiv.onclick = () => { if (!locked) openLessonModal(lesson); };
            nodeDiv.innerHTML = `<div class="node-icon" style="background: ${lesson.color};"><i class="${lesson.icon}" style="color:white;"></i></div><div class="level-number">${idx+1}</div>`;
            container.appendChild(nodeDiv);
        });
        
        setTimeout(() => { if (fillPath) fillPath.classList.add('active'); }, 200);
    }

    function renderAllLevels() {
        renderLevel('basic', lessonsCatalog.basic, 'basic-path', 'basic-path-fill');
        renderLevel('intermediate', lessonsCatalog.intermediate, 'intermediate-path', 'inter-path-fill');
        renderLevel('advanced', lessonsCatalog.advanced, 'advanced-path', 'adv-path-fill');
    }

    function loadVideosForLesson(lesson) {
        const container = document.getElementById('videosGrid');
        if (!container) return;
        container.innerHTML = '';

        if (lesson.images && lesson.images.length > 0) {
            container.classList.add('alphabet-grid');
            lesson.images.forEach((imgSrc, idx) => {
                const letter = lesson.words && lesson.words[idx] 
                               ? lesson.words[idx] 
                               : String.fromCharCode(65 + idx);

                const card = document.createElement('div');
                card.className = 'video-card alphabet-card';
                card.innerHTML = `
                    <h4>${letter}</h4>
                    <div class="video-preview"></div>
                `;
                const preview = card.querySelector('.video-preview');

                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = `Sign for letter ${letter}`;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'contain';

                img.onerror = function() {
                    preview.innerHTML = `
                        <div class="video-placeholder">
                            <i class="fas fa-image"></i>
                            <span>${letter}</span>
                        </div>
                    `;
                };

                preview.appendChild(img);
                container.appendChild(card);
            });
            return;
        }

        container.classList.remove('alphabet-grid');
        const words = lesson.words || [];
        for (let i = 0; i < 3; i++) {
            let videoUrl = lesson.videoUrls && lesson.videoUrls[i] ? lesson.videoUrls[i] : '';
            if (Array.isArray(videoUrl)) {
                videoUrl = videoUrl[0] || '';
            }
            const wordLabel = words[i] ? words[i] : lesson.title;
            const videoHtml = videoUrl 
                ? `<video src="${videoUrl}" controls style="width:100%; height:100%; object-fit:cover;"></video>` 
                : '<div class="video-placeholder"><i class="fas fa-video"></i><span>Video not available</span></div>';
            
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `
                <h4>Video ${i+1} - ${wordLabel}</h4>
                <div class="video-preview">
                    ${videoHtml}
                </div>
            `;
            container.appendChild(card);
        }
    }

    function loadGameForLesson(lesson) {
        const container = document.getElementById('questionsContainer');
        if(!container) return;
        container.innerHTML = '';
        questionsStatus = [false, false, false];
        
        lesson.questions.forEach((q, idx) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'game-question-item';
            questionDiv.setAttribute('data-qidx', idx);
            questionDiv.innerHTML = `
                <div class="question-text">${idx+1}. ${q.text}</div>
                <div class="game-options" id="options-${idx}"></div>
                <div class="question-feedback" id="feedback-${idx}"></div>
            `;
            container.appendChild(questionDiv);
            
            const optionsContainer = document.getElementById(`options-${idx}`);
            q.options.forEach((opt, optIdx) => {
                const optDiv = document.createElement('div');
                optDiv.className = 'game-option';
                optDiv.textContent = opt;
                optDiv.onclick = () => checkAnswer(idx, optIdx, q.correct, optDiv);
                optionsContainer.appendChild(optDiv);
            });
        });
        
        document.getElementById('completeLessonBtn').disabled = true;
    }
    
    function checkAllQuestionsComplete() {
        const allCorrect = questionsStatus.every(status => status === true);
        document.getElementById('completeLessonBtn').disabled = !allCorrect;
    }
    
    function checkAnswer(qIdx, selectedIdx, correctIdx, element) {
        if(questionsStatus[qIdx]) return;
        
        const allOptions = document.querySelectorAll(`#options-${qIdx} .game-option`);
        const feedbackDiv = document.getElementById(`feedback-${qIdx}`);
        
        if(selectedIdx === correctIdx) {
            questionsStatus[qIdx] = true;
            element.classList.add('correct');
            feedbackDiv.innerHTML = '✓ Correct';
            feedbackDiv.className = 'question-feedback success';
        } else {
            element.classList.add('wrong');
            allOptions[correctIdx].classList.add('correct');
            feedbackDiv.innerHTML = '✗ Incorrect. The correct answer is marked.';
            feedbackDiv.className = 'question-feedback error';
        }
        checkAllQuestionsComplete();
    }

    function showCompletionMessage() {
        const popup = document.getElementById('completion-popup');
        popup.classList.add('show');
        setTimeout(() => popup.classList.remove('show'), 1200);
    }

    function showCelebrationEffect() {
        const celDiv = document.getElementById('celebration');
        celDiv.innerHTML = '';
        celDiv.classList.add('active');
        const colors = ['#58cc02', '#1cb0f6', '#ffc800', '#ff4b4b'];
        for (let i = 0; i < 80; i++) {
            const conf = document.createElement('div');
            conf.className = 'confetti';
            conf.style.left = Math.random() * 100 + '%';
            conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            conf.style.width = conf.style.height = Math.random() * 10 + 6 + 'px';
            conf.style.animationDelay = Math.random() * 2 + 's';
            celDiv.appendChild(conf);
        }
        setTimeout(() => celDiv.classList.remove('active'), 2600);
    }

    function completeCurrentLesson() {
        if(!currentModalLesson) return;
        if (!game.completedLessons.includes(currentModalLesson.id)) {
            game.completedLessons.push(currentModalLesson.id);
            showCompletionMessage();
            showCelebrationEffect();
            setMascotMessage("Lesson completed! Keep moving forward.");
            renderAllLevels();
        }
        document.getElementById('lessonModal').style.display = 'none';
        resetGameState();
    }

    function resetGameState() {
        currentModalLesson = null;
        questionsStatus = [false, false, false];
        document.getElementById('completeLessonBtn').disabled = true;
    }

    function openLessonModal(lesson) {
        currentModalLesson = lesson;
        const modal = document.getElementById('lessonModal');
        document.getElementById('modalTitle').textContent = lesson.title;
        document.getElementById('modalDescText').textContent = lesson.description;
        
        const tipsList = document.getElementById('tipsList');
        tipsList.innerHTML = lesson.tips.map(tip => `<li>${tip}</li>`).join('');
        
        loadVideosForLesson(lesson);
        loadGameForLesson(lesson);
        
        modal.style.display = 'flex';
        setMascotMessage(`Learning: ${lesson.title}`);
    }

    function setupModalEvents() {
        const modal = document.getElementById('lessonModal');
        const closeBtn = document.getElementById('closeModalBtn');
        const completeBtn = document.getElementById('completeLessonBtn');
        
        closeBtn.onclick = () => { modal.style.display = 'none'; resetGameState(); setMascotMessage("Continue whenever you want."); };
        completeBtn.onclick = () => { if (currentModalLesson) completeCurrentLesson(); };
    }

    function setupProgressButton() {
        const progressModal = document.getElementById('progressModal');
        const closeProgressModal = document.getElementById('closeProgressModal');
        
        document.getElementById('progress-button').addEventListener('click', () => {
            updateProgressModal();
            progressModal.classList.add('show');
        });
        
        closeProgressModal.onclick = () => {
            progressModal.classList.remove('show');
        };
        
        window.addEventListener('click', (e) => {
            if (e.target === progressModal) {
                progressModal.classList.remove('show');
            }
        });
    }

    function updateProgressModal() {
        const totalLessons = lessonsCatalog.basic.length + lessonsCatalog.intermediate.length + lessonsCatalog.advanced.length;
        const completedCount = game.completedLessons.length;
        const percent = Math.round((completedCount / totalLessons) * 100);
        
        const basicCompleted = game.completedLessons.filter(id => lessonsCatalog.basic.some(l => l.id === id)).length;
        const intermediateCompleted = game.completedLessons.filter(id => lessonsCatalog.intermediate.some(l => l.id === id)).length;
        const advancedCompleted = game.completedLessons.filter(id => lessonsCatalog.advanced.some(l => l.id === id)).length;
        
        const circle = document.getElementById('progressCircle');
        circle.style.setProperty('--progress', `${percent * 3.6}deg`);
        
        document.getElementById('progressPercent').textContent = `${percent}%`;
        
        const basicPercent = Math.round((basicCompleted / lessonsCatalog.basic.length) * 100);
        const intermediatePercent = Math.round((intermediateCompleted / lessonsCatalog.intermediate.length) * 100);
        const advancedPercent = Math.round((advancedCompleted / lessonsCatalog.advanced.length) * 100);
        
        setTimeout(() => {
            document.getElementById('basicProgressBar').style.width = `${basicPercent}%`;
            document.getElementById('intermediateProgressBar').style.width = `${intermediatePercent}%`;
            document.getElementById('advancedProgressBar').style.width = `${advancedPercent}%`;
        }, 100);
        
        document.getElementById('basicProgressText').textContent = `${basicCompleted}/${lessonsCatalog.basic.length}`;
        document.getElementById('intermediateProgressText').textContent = `${intermediateCompleted}/${lessonsCatalog.intermediate.length}`;
        document.getElementById('advancedProgressText').textContent = `${advancedCompleted}/${lessonsCatalog.advanced.length}`;
        
        const motivation = document.getElementById('progressMotivation');
        if (percent === 100) {
            motivation.textContent = 'Congratulations! You have completed all lessons.';
            motivation.classList.add('completed');
        } else if (percent >= 75) {
            motivation.textContent = 'Excellent progress! You are almost there.';
            motivation.classList.remove('completed');
        } else if (percent >= 50) {
            motivation.textContent = 'You are on the right track. Keep it up!';
            motivation.classList.remove('completed');
        } else if (percent >= 25) {
            motivation.textContent = 'Well done. Keep learning.';
            motivation.classList.remove('completed');
        } else if (percent > 0) {
            motivation.textContent = 'You are just starting. Cheer up!';
            motivation.classList.remove('completed');
        } else {
            motivation.textContent = 'Start your first lesson now.';
            motivation.classList.remove('completed');
        }
    }

    function init() {
        renderAllLevels();
        setupProgressButton();
        setupModalEvents();
        setMascotMessage("Welcome. Click on any lesson to start.");
        
        // Close warning modal if clicking outside
        window.addEventListener('click', (e) => {
            const warningModal = document.getElementById('diplomaWarningModal');
            if (e.target === warningModal) {
                closeWarningModal();
            }
            // Also close lesson modal if clicking outside
            const lessonModal = document.getElementById('lessonModal');
            if (e.target === lessonModal) {
                lessonModal.style.display = 'none';
                resetGameState();
            }
        });
    }

    init();