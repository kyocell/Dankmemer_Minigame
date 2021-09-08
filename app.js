var colorLogic = {
    0: {
        color: "black",
        symbol: "⬛️",
    },
    1: {
        color: "red",
        symbol: "🟥",
    },
    2: {
        color: "orange",
        symbol: "🟧",
    },
    3: {
        color: "yellow",
        symbol: "🟨",
    },
    4: {
        color: "green",
        symbol: "🟩",
    },
    5: {
        color: "blue",
        symbol: "🟦",
    },
    6: {
        color: "white",
        symbol: "⬜️",
    },
    7: {
        color: "brown",
        symbol: "🟫",
    },
}

var wordLogic = {
    0: "Kite",
    1: "Tea",
    2: "Telephone",
    3: "Clock",
    4: "Necklace",
    5: "Pen",
    6: "Wood",
    7: "Cigarette",
    8: "Guitar",
    9: "Soap",
    10: "Notebook",
    11: "Sunglasses",
    12: "Keyboard",
    13: "Water",
    14: "Ball",
    15: "Flowers",
    16: "Coat",
    17: "Camera",
    18: "Box",
    19: "Book",
    20: "Phone",
}

const checkBtn = document.querySelector('.btn-submit');
const startBtn = document.querySelector('.btn-start');

const questionContainer = document.querySelector('.question-container');
const logicContainer = document.querySelector('.logic-container');
const answerContainer = document.querySelector('.answer-container');
const gameStartContainer = document.querySelector('.game-start-container');
const gameContainer = document.querySelector('.game-container');

const outputResult = document.querySelector('.result');
const outputSolution = document.querySelector('.solution');

logicContainer.style.display = "none";
answerContainer.style.display = "none";
gameContainer.style.display = "none";
outputResult.style.display = "none";
outputSolution.style.display = "none";

startBtn.addEventListener('click', () => {
    gameStartContainer.style.display = 'none';
    gameContainer.style.removeProperty('display');
    questionContainer.style.display = "";
    logicContainer.style.display = "";
    setTimeout(function() {
        gameConstructor();
    }, 10)
});

function arrayShuffle(array) {
    array.sort(function(a, b){return 0.5 - Math.random()})
    return array
}

var randomAiChoice
function randomInt(min, max) {
    randomAiChoice = Math.floor(Math.random() * (max-min) + min);
    return randomAiChoice
}

var initialSet = {};
var combinationSet = {};
var pointsCounter = 0;

function gameConstructor() {
    randomInt(0, 5);

    outputResult.style.display = "none";
    outputSolution.style.display = "none";

    colorArray = [0, 1, 2, 3, 4, 5, 6, 7];
    wordArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    colorArrayShuffled = arrayShuffle(colorArray);
    wordArrayShuffled = arrayShuffle(wordArray);

    if (randomAiChoice == 0) {
        logicContainer.style.borderLeftColor = 'grey'
    } else {
        logicContainer.style.borderLeftColor = colorLogic[randomAiChoice].color
    }
    
    for (let i = 0; i < 5; i++) {
        initialSet[i] = colorArrayShuffled[i];
    }

    for (let i = 0; i < 5; i++) {
        combinationSet[colorArrayShuffled[i]] = wordArrayShuffled[i];
    }

    for (let i = 0; i < 5; i++) {
        document.querySelector('.color-'+i).innerHTML = colorLogic[initialSet[i]].symbol;
        document.querySelector('.word-'+i).innerHTML = wordLogic[combinationSet[initialSet[i]]];
    }

    questionContainer.innerHTML = "<strong>Memorize the above combinations.</strong>"

    setTimeout(function() {
        questionContainer.innerHTML = "What color is <strong>" + wordLogic[combinationSet[initialSet[randomAiChoice]]] + "</strong>";
        for (let i = 0; i < 5; i++) {
            document.querySelector('.color-'+i).innerHTML = '?';
        }
        answerContainer.style.removeProperty('display');
    }, 10000);
}

checkBtn.addEventListener('click', () => {
    answerContainer.style.display = 'none';
    questionContainer.innerHTML = '-'
    const userInput = document.querySelector('.user-answer');
    const pointsContainer = document.querySelector('.points-container');

    if (userInput.value.toLowerCase() == colorLogic[initialSet[randomAiChoice]].color) {
        outputResult.style.removeProperty('display');
        outputSolution.style.removeProperty('display');
        pointsCounter++;
        outputResult.style.color = 'green'
        outputResult.innerHTML = 'Correct!'
        pointsContainer.innerHTML = 'Points: ' + pointsCounter;
        outputSolution.innerHTML = '';
        setTimeout(function() {
            gameConstructor();
        }, 4000)
    } else {
        outputResult.style.removeProperty('display');
        outputSolution.style.removeProperty('display');
        pointsCounter--;
        outputResult.style.color = 'red'
        outputResult.innerHTML = 'Wrong!'
        pointsContainer.innerHTML = 'Points: ' + pointsCounter;
        outputSolution.innerHTML = 'Answer: <strong>' + colorLogic[initialSet[randomAiChoice]].color + '</strong ' + colorLogic[initialSet[randomAiChoice]].symbol;
        setTimeout(function() {
            gameConstructor();
        }, 4000)
    }
    userInput.value = "";
});

const aboutBoxBtn = document.querySelector('.btn-about')
const howtoplayBoxBtn = document.querySelector('.btn-how-to-play')
const infoBoxOne = document.querySelector('.information-about');
const infoBoxTwo = document.querySelector('.information-how-to-play')

infoBoxOne.style.display = 'none'
infoBoxTwo.style.display = 'none'

aboutBoxBtn.addEventListener('mouseover', () => {
    infoBoxOne.style.removeProperty('display');
    setTimeout(function() {
        infoBoxOne.style.display = 'none'
    }, 2000)
})

howtoplayBoxBtn.addEventListener('mouseover', () => {
    infoBoxTwo.style.removeProperty('display');
    setTimeout(function() {
        infoBoxTwo.style.display = 'none'
    }, 2000)
})