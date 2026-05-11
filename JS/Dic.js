// ============================================
// LESSA DICTIONARY DATA
// ============================================

const wordsData = [
    // GREETINGS AND EXPRESSIONS
    { id: 1, word: "Hello", category: "Greetings and Expressions", videoUrl: "https://youtu.be/yhfz2G284XE", description: "Extend your right hand with fingers together and move your wrist from side to side at temple height.", tip: "Practice in front of a mirror to check the correct greeting height." },
    { id: 2, word: "Goodbye", category: "Greetings and Expressions", videoUrl: "https://youtu.be/472h25XEs24", description: "With an open hand, move your hand from side to side at chest height.", tip: "You can combine it with the 'see you later' sign for more formal goodbyes." },
    { id: 3, word: "Good morning", category: "Greetings and Expressions", videoUrl: "https://youtu.be/9DGOul5GdTI", description: "Sign 'good' with thumb up and then 'morning' opening fingers over your head like a sunrise.", tip: "The 'sunrise' motion should be smooth and upward." },
    { id: 4, word: "Good afternoon", category: "Greetings and Expressions", videoUrl: "https://youtu.be/1yrQFq-WHNM", description: "Sign 'good' and then 'afternoon' with hand in a downward horizontal position.", tip: "Accompany with a kind smile to convey warmth." },
    { id: 5, word: "Good night", category: "Greetings and Expressions", videoUrl: "https://youtu.be/FhLdMhCl_i8", description: "Sign 'good' and then 'night' closing fingers over your face like closing the day's curtains.", tip: "Accompany with a sleepy or resting expression for clarity." },
    { id: 6, word: "How are you?", category: "Greetings and Expressions", videoUrl: "https://youtu.be/jbGP210_lPA", description: "Sign 'how' with both hands and then point at the person with an interested expression.", tip: "Keep eye contact throughout the greeting to show sincerity." },
    { id: 7, word: "Good", category: "Greetings and Expressions", videoUrl: "https://youtu.be/-wtkxijs_6A", description: "With thumb up, touch your chest and then extend your thumb firmly.", tip: "The thumb should be visible and firm at the end of the gesture." },
    { id: 8, word: "Bad", category: "Greetings and Expressions", videoUrl: "https://youtu.be/7TV1Zvbbc0A", description: "With thumb down, touch your chest and then extend your thumb downward.", tip: "Accompany with a worried or sad expression." },
    { id: 9, word: "So-so", category: "Greetings and Expressions", videoUrl: "https://youtu.be/iXQu9O7h_BQ", description: "Rock your open hand from side to side with palm facing down.", tip: "The movement should be balanced, neither too fast nor too slow." },
    { id: 10, word: "Nice to meet you", category: "Greetings and Expressions", videoUrl: "https://youtu.be/KTEwb5qRAn4", description: "Touch your chest with an open hand and then extend your hand toward the other person.", tip: "Accompany with a genuine smile to convey pleasure." },
    { id: 11, word: "Please", category: "Greetings and Expressions", videoUrl: "https://youtu.be/v3SpuXBf0CI", description: "Rub your chest with an open hand in circular motions with a kind expression.", tip: "The circular motion should be smooth and continuous." },
    { id: 12, word: "Thank you", category: "Greetings and Expressions", videoUrl: "https://youtu.be/UVMlLKiANYU", description: "Place your right hand flat on your lips and move it forward while tilting your head.", tip: "Accompany with a sincere smile to convey gratitude." },
    { id: 13, word: "You're welcome", category: "Greetings and Expressions", videoUrl: "https://youtu.be/r6flcc-Zrw4", description: "With fingers together, touch your chest and then extend your hand toward the person.", tip: "This gesture symbolizes giving something from the heart." },
    { id: 14, word: "Sorry", category: "Greetings and Expressions", videoUrl: "https://youtu.be/GV6iPskDnUE", description: "Touch your forehead with your knuckles and then move your hand forward in a pleading gesture.", tip: "Tilt your head slightly to show respect and regret." },
    { id: 16, word: "I love you", category: "Greetings and Expressions", videoUrl: "https://youtu.be/3SGBdeysJIM", description: "Cross your hands over your chest forming a heart shape with your fingers.", tip: "Your facial expression should be tender and sincere." },

    // FAMILY
    { id: 18, word: "Family", category: "Family", videoUrl: "https://youtu.be/X0d8xS7s7h4", description: "With your hand in an 'F' shape, first touch your right cheek and then your left.", tip: "The 'F' is formed with index finger and thumb touching." },
    { id: 19, word: "Mom", category: "Family", videoUrl: "https://youtu.be/Ag2LoL-JBVs", description: "With an open hand, touch your chin with your fingers extended.", tip: "The touch on the chin symbolizes maternal care." },
    { id: 20, word: "Dad", category: "Family", videoUrl: "https://youtu.be/H9poHWEqnFM", description: "With your right thumb, touch your forehead.", tip: "The thumb represents paternal authority and protection." },
    { id: 21, word: "Mother", category: "Family", videoUrl: "https://youtu.be/Ag2LoL-JBVs", description: "Touch your chin with extended fingers and then bring your hand forward.", tip: "The movement represents maternal love and care." },
    { id: 22, word: "Father", category: "Family", videoUrl: "https://youtu.be/H9poHWEqnFM", description: "Touch your forehead with your thumb and then extend your arm forward.", tip: "The gesture symbolizes paternal protection and guidance." },
    { id: 23, word: "Brother", category: "Family", videoUrl: "https://youtu.be/TY4_hLRi7M4", description: "Sign 'male' and then 'small' or 'same' depending on context.", tip: "For older brother use 'male' + 'big'." },
    { id: 24, word: "Sister", category: "Family", videoUrl: "https://youtu.be/vlmGYSnfTdM", description: "Sign 'female' by touching your cheek with your thumb and then indicate the relationship.", tip: "Adjust the size for older or younger sister." },
    { id: 25, word: "Grandfather", category: "Family", videoUrl: "https://youtu.be/raJCq_90914", description: "Sign 'father' and then 'old' by wrinkling your forehead with your fingers.", tip: "Wrinkling your forehead symbolizes old age." },
    { id: 26, word: "Grandmother", category: "Family", videoUrl: "https://youtu.be/Wrh8mm5kqbU", description: "Sign 'mother' and then 'old' with a circular motion on your cheek.", tip: "The circle on the cheek represents grandmother's wrinkles." },
    { id: 27, word: "Baby", category: "Family", videoUrl: "https://youtu.be/DXI2VCGPVl8", description: "Rock your crossed arms over your chest as if holding a baby.", tip: "The movement should be soft and gentle." },
    { id: 28, word: "Son", category: "Family", videoUrl: "https://youtu.be/qfqLuZW-5ps", description: "Sign 'father/mother' and then 'small' from chest downward.", tip: "The downward movement symbolizes offspring." },
    { id: 29, word: "Daughter", category: "Family", videoUrl: "https://youtu.be/Gr7aAQsmn-g", description: "Sign 'female' + 'small' with a soft gesture from the chin.", tip: "Accompany with a tender expression." },
    { id: 30, word: "Uncle", category: "Family", videoUrl: "https://youtu.be/Gr7aAQsmn-g", description: "Sign 'male' and then touch your temple with your pinky extended.", tip: "The extended pinky represents the letter 'U' for uncle." },
    { id: 31, word: "Aunt", category: "Family", videoUrl: "https://youtu.be/sDdq81RC5eA", description: "Sign 'female' and then touch your temple with your pinky extended.", tip: "The gesture is similar to uncle but starting with the female sign." },
    { id: 32, word: "Cousin (male)", category: "Family", videoUrl: "https://youtu.be/J_EbEl-GPzE", description: "Sign 'male' and then cross your index fingers from both hands.", tip: "Crossing fingers symbolizes a parallel relationship in the family tree." },
    { id: 33, word: "Cousin (female)", category: "Family", videoUrl: "https://youtu.be/GOBIKdCTYqI", description: "Sign 'female' and then cross your index fingers from both hands.", tip: "The cross should be gentle to differentiate from male cousin." },

    // FOOD AND DRINK
    { id: 34, word: "Eat", category: "Food and Drink", videoUrl: "https://youtu.be/yt2tAY5tmUA", description: "Bring your thumb and index finger together forming a circle and repeatedly bring them to your mouth.", tip: "The movement should be natural, like bringing real food to your mouth." },
    { id: 35, word: "Drink", category: "Food and Drink", videoUrl: "https://youtu.be/aTLat91A_0I", description: "Pretend to hold a glass with your hand and bring it to your lips while tilting your head.", tip: "Tilt your head back slightly as if actually drinking." },
    { id: 36, word: "Water", category: "Food and Drink", videoUrl: "https://youtu.be/jNuzfIDB3rs", description: "With your hand in a 'W' shape, touch your chin and move your hand forward in a wavy motion.", tip: "The wavy motion represents the flow of water." },
    { id: 37, word: "Food", category: "Food and Drink", videoUrl: "https://youtu.be/yt2tAY5tmUA", description: "Bring your fingers together as if holding a plate and bring them toward your mouth.", tip: "The imaginary plate should stay level." },
    { id: 38, word: "Breakfast", category: "Food and Drink", videoUrl: "https://youtu.be/cI6VEgKFl8I", description: "Sign 'eat' + 'morning' with an upward gesture.", tip: "The upward movement symbolizes the start of the day." },
    { id: 39, word: "Lunch", category: "Food and Drink", videoUrl: "https://youtu.be/WcsqyxCcvBc", description: "Sign 'eat' + 'midday' touching your head.", tip: "The hand on your head symbolizes the sun at its highest point." },
    { id: 40, word: "Dinner", category: "Food and Drink", videoUrl: "https://youtu.be/BQlM3gXmMmA", description: "Sign 'eat' + 'night' with a downward gesture.", tip: "The downward movement symbolizes the end of the day." },
    { id: 41, word: "Bread", category: "Food and Drink", videoUrl: "https://youtu.be/NbTxcfrEgkc", description: "With both hands, pretend to knead or cut a slice of bread.", tip: "The cutting motion should be firm but soft." },
    { id: 42, word: "Rice", category: "Food and Drink", videoUrl: "https://youtu.be/uGJxtVYVsIM", description: "With your index and middle fingers, pretend to pick up grains and bring them to your mouth.", tip: "The movement should be small and precise like picking up grains." },
    { id: 43, word: "Meat", category: "Food and Drink", videoUrl: "https://youtu.be/zZzbF3MV04Y", description: "Pinch your arm muscle with your thumb and index finger of the other hand.", tip: "The pinch on your bicep represents the texture of meat." },
    { id: 44, word: "Chicken", category: "Food and Drink", videoUrl: "https://youtu.be/akr3dyedO1w", description: "Pretend to make a chicken beak with your fingers in front of your mouth.", tip: "The pecking motion should be short and repetitive." },
    { id: 45, word: "Fruit", category: "Food and Drink", videoUrl: "https://youtu.be/wbrCZzFywkA", description: "Touch your cheek with your fingers extended and then move your hand outward.", tip: "The touch on the cheek symbolizes biting into a juicy fruit." },
    { id: 46, word: "Vegetable", category: "Food and Drink", videoUrl: "https://youtu.be/wbrCZzFywkA", description: "Pretend to pull something from the ground with your hand and bring it to your mouth.", tip: "The pulling motion symbolizes harvesting fresh vegetables." },
    { id: 47, word: "Milk", category: "Food and Drink", videoUrl: "https://youtu.be/4lAiPO7-YXQ", description: "Pretend to milk with both hands alternating the motion.", tip: "The motion should be alternating and rhythmic like real milking." },
    { id: 48, word: "Coffee", category: "Food and Drink", videoUrl: "https://youtu.be/YqlG5KzKz3o", description: "Pretend to hold a small cup and drink delicately.", tip: "Your pinky can extend slightly for elegance." },
    { id: 49, word: "Juice", category: "Food and Drink", videoUrl: "https://youtu.be/YqlG5KzKz3o", description: "Sign 'drink' + 'fruit' with a circular motion at your wrist.", tip: "The circular motion represents stirring the juice." },

    // HOME AND PLACES
    { id: 50, word: "House", category: "Home and Places", videoUrl: "https://youtu.be/QAOcBpZEGNM", description: "Form a roof with both hands by bringing your fingertips together above your head.", tip: "Imagine drawing the roof and walls of your house." },
    { id: 51, word: "Door", category: "Home and Places", videoUrl: "https://youtu.be/IkJ5hFF3X3c", description: "Pretend to open a door by turning your hand as if turning a knob.", tip: "The turning motion should be natural like opening a real door." },
    { id: 52, word: "Window", category: "Home and Places", videoUrl: "https://youtu.be/IeZLfhqGsCU", description: "With both hands, pretend to open a window by sliding one hand over the other.", tip: "The horizontal sliding represents a sliding window." },
    { id: 53, word: "Kitchen", category: "Home and Places", videoUrl: "", description: "Pretend to stir in a bowl with one hand and heat with the other.", tip: "Combine two characteristic kitchen actions." },
    { id: 54, word: "Bathroom", category: "Home and Places", videoUrl: "https://youtu.be/pTiwZk-MJsQ", description: "Hit your closed fist against your chest and then pretend to rub your hands together.", tip: "The initial hit symbolizes the water faucet." },
    { id: 55, word: "Bed", category: "Home and Places", videoUrl: "https://youtu.be/BlR3ipO7-gA", description: "Tilt your head to one side and rest your hand against your cheek.", tip: "Slowly close your fingers as if they were falling eyelids." },
    { id: 56, word: "Table", category: "Home and Places", videoUrl: "https://youtu.be/MuZy1bO746s", description: "With flat hands, pretend to show a table surface at waist height.", tip: "Keep your hands parallel to show the table's stability." },
    { id: 57, word: "Chair", category: "Home and Places", videoUrl: "https://youtu.be/L94tbLi_u2s", description: "Pretend to sit by tapping the palm of one hand on the back of the other.", tip: "The bottom hand represents the seat of the chair." },
    { id: 58, word: "School", category: "Home and Places", videoUrl: "https://youtu.be/RUgGYyR22gs", description: "Repeatedly tap the palm of one hand against the back of the other.", tip: "The constant rhythm symbolizes study discipline." },
    { id: 59, word: "Hospital", category: "Home and Places", videoUrl: "https://youtu.be/1fXNgb_k4FI", description: "Touch your wrist like taking a pulse and then form a cross over your chest.", tip: "The cross symbolizes medical help and healing." },
    { id: 60, word: "Street", category: "Home and Places", videoUrl: "https://youtu.be/cE68E1eHSvY", description: "With your hands extended, pretend to draw a straight horizontal line in front of you.", tip: "The straight motion represents the road or street." },
    { id: 61, word: "Park", category: "Home and Places", videoUrl: "https://youtu.be/8PsnaCoksbo", description: "Sign 'tree' and then 'play' with both indicating open space.", tip: "The gesture should convey openness and nature." },
    { id: 62, word: "Store", category: "Home and Places", videoUrl: "", description: "Pretend a cash register opening and closing.", tip: "The cash register motion should be quick and precise." },
    { id: 63, word: "Church", category: "Home and Places", videoUrl: "https://youtu.be/NINsbOPkSv8", description: "Put your hands together in a praying position and then point upward.", tip: "Your gaze should look upward with respect." },
    { id: 64, word: "Work", category: "Home and Places", videoUrl: "https://youtu.be/xlNUOFdeFrA", description: "Hit your closed fist on the open palm of your other hand.", tip: "The hit should be firm, symbolizing work effort." },

    // ACTIONS (VERBS)
    { id: 65, word: "Go", category: "Actions", videoUrl: "https://youtu.be/NHVpiEcxx1A", description: "Point with your index fingers in the direction you are heading.", tip: "Your gaze should follow the direction of your fingers." },
    { id: 66, word: "Come", category: "Actions", videoUrl: "https://youtu.be/jSXLT89Qiwg", description: "Make a calling gesture by moving your fingers toward yourself.", tip: "The calling motion should be kind and welcoming." },
    { id: 67, word: "Eat", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example67", description: "Bring your thumb and index finger together and repeatedly bring them to your mouth.", tip: "The rhythm should be calm, like eating slowly." },
    { id: 68, word: "Sleep", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example68", description: "Tilt your head and close your eyes while resting your hand on your cheek.", tip: "You can pretend to snore softly for more expression." },
    { id: 69, word: "Play", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example69", description: "With your fingers in a 'Y' shape, move your hands alternately up and down.", tip: "The movement should be joyful and energetic." },
    { id: 70, word: "Study", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example70", description: "Pretend to read a book and then point to your head.", tip: "The touch on your head symbolizes learning." },
    { id: 71, word: "Work", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example71", description: "Repeatedly hit your fist on your palm.", tip: "The rhythm symbolizes constant work." },
    { id: 72, word: "Walk", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example72", description: "With your index and middle fingers, pretend to walk on your other palm.", tip: "The fingers should alternate like walking legs." },
    { id: 73, word: "Run", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example73", description: "Quickly move both fists alternately forward.", tip: "The movement should be fast and full of energy." },
    { id: 74, word: "Jump", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example74", description: "Impulsively lift two fingers from your palm upward.", tip: "The upward motion should be fast and light." },
    { id: 75, word: "See", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example75", description: "Point with your index and middle fingers toward your eyes and then toward the object.", tip: "The direction of your gaze is essential." },
    { id: 76, word: "Listen", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example76", description: "Bring your hand to your ear in a shell shape.", tip: "Tilt your head slightly to show attention." },
    { id: 77, word: "Talk", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example77", description: "Move your hand near your mouth opening and closing your fingers.", tip: "The movement should imitate a mouth opening while speaking." },
    { id: 78, word: "Learn", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example78", description: "Touch your forehead and then open your hand as if capturing knowledge.", tip: "The capturing motion should be soft and receptive." },
    { id: 79, word: "Teach", category: "Actions", videoUrl: "https://www.youtube.com/watch?v=example79", description: "Extend your hand from your chest forward as if showing something.", tip: "Your palm should face up, offering information." },

    // EMOTIONS AND STATES
    { id: 80, word: "Happy", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example80", description: "Draw a smile with your fingers over your lips and open your arms.", tip: "Your arms should open widely to show joy." },
    { id: 81, word: "Sad", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example81", description: "Slide your fingers from your eyes downward pretending to cry.", tip: "Your facial expression should match the gesture with sadness." },
    { id: 82, word: "Angry", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example82", description: "Clench your fists and move them in front of your chest with an angry expression.", tip: "The movement should be contained to show controlled anger." },
    { id: 83, word: "Tired", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example83", description: "Tilt your head and drop your shoulders with relaxed hands.", tip: "Your whole body should show exhaustion." },
    { id: 84, word: "Sick", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example84", description: "Touch your forehead pretending to have a fever and bring your hand to your stomach.", tip: "Your expression should show physical discomfort." },
    { id: 85, word: "Nervous", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example85", description: "Quickly move your hands near your chest with a restless expression.", tip: "The movement should be fast and shaky." },
    { id: 86, word: "Surprised", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example86", description: "Open your eyes and mouth wide while raising your hands.", tip: "Surprise should be visible on your whole face." },
    { id: 87, word: "Scared", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example87", description: "Cover your face with your hands and step back slightly.", tip: "Stepping back mimics the instinct to protect yourself." },
    { id: 88, word: "Bored", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example88", description: "Rest your cheek on your hand with a disinterested expression.", tip: "You can accompany with an exaggerated sigh." },
    { id: 89, word: "Excited", category: "Emotions and States", videoUrl: "https://www.youtube.com/watch?v=example89", description: "Move your hands near your chest in quick upward motions.", tip: "The upward movement symbolizes growing excitement." },

    // NUMBERS
    { id: 90, word: "0", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example90", description: "Form a circle with your thumb and index finger.", tip: "The circle should be perfect and clearly shown." },
    { id: 91, word: "1", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example91", description: "Raise your index finger keeping the others closed.", tip: "Your hand should be firm and visible." },
    { id: 92, word: "2", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example92", description: "Raise your index and middle fingers in a 'V' shape.", tip: "Keep your fingers separate and firm." },
    { id: 93, word: "3", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example93", description: "Raise your thumb, index, and middle fingers forming a 'W'.", tip: "Your fingers should be well extended." },
    { id: 94, word: "4", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example94", description: "Raise your four fingers keeping your thumb closed.", tip: "Your fingers should be together and firm." },
    { id: 95, word: "5", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example95", description: "Completely open your hand with all five fingers extended.", tip: "Your fingers should be separate and visible." },
    { id: 96, word: "6", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example96", description: "Bring your thumb tip together with your pinky tip while extending index and middle fingers.", tip: "The shape should be clear and distinguishable." },
    { id: 97, word: "7", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example97", description: "Bring your thumb tip together with your ring finger tip.", tip: "The movement should be precise." },
    { id: 98, word: "8", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example98", description: "Extend your thumb and index finger forming a gun shape.", tip: "The other fingers should be closed." },
    { id: 99, word: "9", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example99", description: "Form a hook with your index finger, keeping the other fingers closed.", tip: "The hook should be clear and visible." },
    { id: 100, word: "10", category: "Numbers", videoUrl: "https://www.youtube.com/watch?v=example100", description: "Cross your index fingers from both hands forming an 'X'.", tip: "The cross should be firm and in the center." },

    // PEOPLE AND SOCIETY
    { id: 101, word: "Friend (male)", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example101", description: "Interlock your index fingers from both hands in front of your chest.", tip: "Interlocking symbolizes union and trust." },
    { id: 102, word: "Friend (female)", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example102", description: "Interlock your index fingers and then touch your cheek.", tip: "The touch on the cheek adds the female gender." },
    { id: 103, word: "Person", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example103", description: "Draw a human outline with both index fingers.", tip: "The outline should go from head to shoulders." },
    { id: 104, word: "Boy", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example104", description: "Pinch your cheek with your thumb and index finger and lower your hand.", tip: "The soft pinch symbolizes a child's cheeks." },
    { id: 105, word: "Girl", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example105", description: "Touch your cheek with your thumb and then gently lower your hand.", tip: "The gesture should be more delicate than for boy." },
    { id: 106, word: "Man", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example106", description: "Touch your forehead with your thumb and then extend your hand.", tip: "The gesture symbolizes presence and firmness." },
    { id: 107, word: "Woman", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example107", description: "Touch your cheek with your thumb gently lowering it.", tip: "The gesture should be elegant and delicate." },
    { id: 108, word: "Teacher", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example108", description: "Touch your forehead with an open hand and then point forward.", tip: "The gesture symbolizes knowledge transmission." },
    { id: 109, word: "Student", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example109", description: "Pretend to read a book in front of you.", tip: "The gesture should show concentration and learning." },
    { id: 110, word: "Doctor", category: "People and Society", videoUrl: "https://www.youtube.com/watch?v=example110", description: "Touch your wrist taking your pulse with two fingers.", tip: "The gesture should be precise and professional." },

    // OTHER USEFUL WORDS
    { id: 111, word: "Yes", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example111", description: "Nod with your closed fist moving it up and down.", tip: "The movement should be firm like nodding your head." },
    { id: 112, word: "No", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example112", description: "Bring your thumb, index, and middle fingers together and move them side to side.", tip: "The side motion means negation." },
    { id: 113, word: "Maybe", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example113", description: "Rock your open hand from side to side with a doubtful expression.", tip: "Your facial expression should show uncertainty." },
    { id: 114, word: "Here", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example114", description: "Point to the ground in front of you with your index finger.", tip: "The gesture should be firm and direct to the point." },
    { id: 115, word: "There", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example115", description: "Point into the distance with your hand extended.", tip: "Your gaze should follow the direction of your hand." },
    { id: 116, word: "Today", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example116", description: "Hit the palm of your hand with the back of your other hand.", tip: "The hit should be firm indicating the present day." },
    { id: 117, word: "Tomorrow", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example117", description: "Move your hand forward from your shoulder.", tip: "The forward movement symbolizes the future." },
    { id: 118, word: "Yesterday", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example118", description: "Move your hand backward over your shoulder.", tip: "The backward movement symbolizes the past." },
    { id: 119, word: "Time", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example119", description: "Spin your index finger around the other index finger forming a circle.", tip: "The circular motion symbolizes the cycle of time." },
    { id: 120, word: "Money", category: "Other Useful Words", videoUrl: "https://www.youtube.com/watch?v=example120", description: "Rub your thumb against your index and middle fingers pretending to count bills.", tip: "The movement should be fast, like counting money quickly." }
];

// ============================================
// STATE
// ============================================

let currentCategory = 'all';
let currentSearch = '';

// ============================================
// DOM REFERENCES
// ============================================

const cardsGrid = document.getElementById('cards-grid');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const filterPills = document.querySelectorAll('.filter-pill');
const resultsCount = document.getElementById('results-count');
const emptyState = document.getElementById('empty-state');
const totalWordsSpan = document.getElementById('total-words');

// ============================================
// UTILITIES
// ============================================

function getCategoryIcon(category) {
    const icons = {
        'Greetings and Expressions': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
        'Family': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        'Food and Drink': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
        'Home and Places': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        'Actions': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
        'Emotions and States': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
        'Numbers': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="4" x2="20" y2="20"/><line x1="8" y1="4" x2="16" y2="20"/><line x1="4" y1="20" x2="20" y2="4"/></svg>`,
        'People and Society': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
        'Other Useful Words': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`
    };
    return icons[category] || icons['Other Useful Words'];
}

function openYouTubeLink(url) {
    window.open(url, '_blank');
}

// ============================================
// RENDERING
// ============================================

function renderCards(words) {
    cardsGrid.innerHTML = '';
    
    if (words.length === 0) {
        emptyState.classList.add('active');
        cardsGrid.style.display = 'none';
        resultsCount.textContent = '0';
        return;
    }
    
    emptyState.classList.remove('active');
    cardsGrid.style.display = 'grid';
    resultsCount.textContent = words.length;
    
    words.forEach((word, index) => {
        const card = document.createElement('article');
        card.className = 'word-card';
        card.style.animationDelay = `${index * 0.02}s`;
        
        card.innerHTML = `
            <div class="card-illustration">
                ${getCategoryIcon(word.category)}
            </div>
            <h3 class="card-title">${word.word}</h3>
            <span class="card-category">${word.category}</span>
            <p class="card-description">${word.description}</p>
            <div class="card-tip">
                <strong>💡 Tip:</strong>
                <span>${word.tip}</span>
            </div>
            <button class="video-btn" data-url="${word.videoUrl}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Watch example
            </button>
        `;
        
        const videoBtn = card.querySelector('.video-btn');
        videoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openYouTubeLink(word.videoUrl);
        });
        
        cardsGrid.appendChild(card);
    });
}

// ============================================
// FILTERING LOGIC
// ============================================

function getFilteredWords() {
    let filtered = wordsData;
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(w => w.category === currentCategory);
    }
    
    if (currentSearch) {
        const q = currentSearch.toLowerCase();
        filtered = filtered.filter(w => 
            w.word.toLowerCase().includes(q) ||
            w.category.toLowerCase().includes(q) ||
            w.description.toLowerCase().includes(q)
        );
    }
    
    return filtered;
}

function updateView() {
    renderCards(getFilteredWords());
}

// ============================================
// EVENT LISTENERS
// ============================================

filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.dataset.category;
        updateView();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    searchClear.classList.toggle('visible', currentSearch.length > 0);
    updateView();
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    searchClear.classList.remove('visible');
    updateView();
    searchInput.focus();
});



document.addEventListener('DOMContentLoaded', () => {
    totalWordsSpan.textContent = wordsData.length;
    updateView();
    console.log(`🤟 Kokos Talk - ${wordsData.length} LESSA words loaded`);
});