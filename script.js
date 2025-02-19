let currentState = 'start'; 
let answerSelected = false; 

function renderQuestion() {
    const questionContainer = document.getElementById('question');
    const answersContainer = document.getElementById('answers');
    const nextButton = document.getElementById('next-btn'); 

    questionContainer.innerHTML = ''; 
    answersContainer.innerHTML = ''; 

    
    nextButton.style.display = 'none'; 
}

    switch (currentState) {
        case 'start':
            questionContainer.innerHTML = "You are in the world of Minecraft. Do you want to:";
            addAnswerButton('Explore the Enchanted Forest', 'enchantedForest');
            addAnswerButton('Venture into the Desert', 'desertAdventure');
            addAnswerButton('Descend into the Underworld', 'underworldChallenge');
            break;
        
        case 'enchantedForest':
            questionContainer.innerHTML = "You see a mysterious light. Do you:";
            addAnswerButton('Follow the light', 'followLight');
            addAnswerButton('Stay on the main path', 'stayOnPath');
            break;
            case 'desertAdventure':
                questionContainer.innerHTML = "You arrive in the desert. Do you:";
                addAnswerButton('Search for an oasis', 'searchOasis');
                addAnswerButton('Set up camp', 'setCamp');
                break;
    
            case 'underworldChallenge':
                questionContainer.innerHTML = "You enter the Nether. Do you:";
                addAnswerButton('Search for ancient ruins', 'searchRuins');
                addAnswerButton('Build a fortress', 'buildFortress');
                break;
    
            default:
                questionContainer.innerHTML = "Thank you for playing!";
                break;
        }