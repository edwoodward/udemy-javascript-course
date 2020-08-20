//wack computer game
const timeouts = [2000, 500, 1000, 700];
let randomComputer;
let gameboard = document.querySelector('.gameboard');

build = () => {
    let h1 = document.createElement('h1');
    h1.innerHTML = 'Wack the computer';
    gameboard.appendChild(h1);
    for(let i = 0; i < 6; i++){
        buildComputer();
    }

}

buildComputer = () => {
    let officeDiv = document.createElement('div');
    officeDiv.setAttribute('class', 'office');
    let deskDiv = document.createElement('div');
    deskDiv.setAttribute('class', 'desk');
    let computerDiv = document.createElement('div');
    computerDiv.setAttribute('class', 'computer');
    computerDiv.addEventListener('click', function(){
        hitComputer();
    });
    officeDiv.appendChild(deskDiv);
    officeDiv.appendChild(computerDiv);
    gameboard.appendChild(officeDiv);

}

popup = () => {
    let computers = document.querySelectorAll('.computer');
    randomComputer = computers[Math.floor(Math.random() * computers.length)];
    randomComputer.classList.add('popup');
    let randomTimeout = timeouts[Math.floor(Math.random() * timeouts.length)];
    window.setTimeout(hideComputer, randomTimeout);
}

hideComputer = () => {
    randomComputer.classList.remove('popup');
    popup();
}

hitComputer = () => {
    event.target.classList.remove('popup');
    let score = document.querySelector('.score');
    score.innerHTML = parseInt(score.innerHTML) + 1 + '';
}

startGame = () => {
    let randomTimeout = timeouts[Math.floor(Math.random() * timeouts.length)]
    window.setTimeout(popup, randomTimeout)
}
//end of wack computer game

//color game
let msg = document.getElementById('msg');
let sequence = [];
let guess = [];
const colors = ['red', 'blue', 'yellow', 'green'];
let counter = 0;

startColorGame = () => {
    counter = 0;
    guess = [];
    const parent = document.getElementById('selectedColors');
    parent.innerHTML = '';
    let buttonMsg = document.getElementById('buttonMsg');
    buttonMsg.innerHTML = 'Watch the pattern, then click the color buttons and repeat the pattern';
    buildButtons();
    createColorSequence();
    window.setTimeout(displaySequence, 2000);

}

createColorSequence = () => {
    sequence = [];
    for( let x = 0; x < 4; x++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        sequence.push(color);
    }
}

displaySequence = () => {
    msg.style.backgroundColor = sequence[counter];
    counter++;
    window.setTimeout(white, 2000);
}

white = () => {
    msg.style.backgroundColor = 'white';
    if(counter < sequence.length) {
        window.setTimeout(displaySequence, 500);
    }

}

buildButtons = () => {
    let parent = document.getElementById('colorOptions');
    parent.innerHTML = '';
    for(let i = 0; i < colors.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'sm-box');
        div.setAttribute('onclick', 'buildSelection(' + i + ')');
        div.style.backgroundColor = colors[i];
        div.innerHTML = colors[i];
        parent.appendChild(div);

    }
}

buildSelection = (colorIndex) => {
    const parent = document.getElementById('selectedColors');
    const selectionMsg = document.getElementById('selectionMsg');
    if(selectionMsg === null){
        const msgdiv = document.createElement('div');
        msgdiv.setAttribute('class', 'margin');
        msgdiv.setAttribute('id', 'selectionMsg');
        msgdiv.innerHTML = 'Your Selections';
        parent.appendChild(msgdiv);
    }
    const div = document.createElement('div');
    div.setAttribute('class', 'sm-box');
    div.style.backgroundColor = colors[colorIndex];
    div.innerHTML = colors[colorIndex];
    parent.appendChild(div);
    guess.push(colors[colorIndex]);
    if(guess.length === sequence.length) {
        let correct = true;
        for(let i = 0;i < sequence.length; i++) {
            if(sequence[i] !== guess[i]) {
                correct = false;
                break;
            }
        }
        const congrats = document.getElementById('congrats');
        if(correct) {
            congrats.innerHTML = 'You are Correct. The colors were ' + sequence;
        }
        else {
            congrats.innerHTML = 'You did not guess correctly. You guessed ' + guess + ' but the correct colors were ' + sequence;
        }

    }
}
//end of color game

//display countdown
let countdownMsg = document.getElementById('countdown');
startCountdown = () => {
    window.setTimeout(countdown, 1000);
}

countdown = () => {
    let currentDate = new Date();
    let eventDate = document.getElementById('date').value;
    let interval = new Date(eventDate).getTime() - currentDate.getTime();

    let days = Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);
    countdownMsg.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
    if(interval > 0){
        window.setTimeout(countdown, 1000);
    }
    else {
        countdownMsg.innerHTML = 'Countdown has expired'
    }

}
//end of countdown

//word scramble game
const words = ['happy', 'code', 'bunny', 'dog', 'cat'];
let scramble = document.getElementById('scramble');
let btn5 = document.getElementById('btn5');

scrambleWord = () => {
    //get random word
    let word = words[Math.floor(Math.random() * Math.floor(words.length))];

    //scramble it
    let scrambled = shuffle(word);

    //display it
    scramble.innerHTML = 'Guess this word: ' + scrambled;

}

shuffle = (wordToShuffle) => {
    let wordArray = wordToShuffle.split('');

    for (let i = 0; i < (wordArray.length - 1); ++i) {
        let randomIndex = getRandomInt(wordArray.length);

        let temp = wordArray[i];
        wordArray[i] = wordArray[randomIndex];
        wordArray[randomIndex] = temp;
    }

    return wordArray.join('');
}

getRandomInt = (numberRange) => {
    return Math.floor(Math.random() * numberRange);
}

guessWord = () => {
    let guess = document.getElementById('str');

    if(words.includes(guess.value)){
        scramble.innerHTML = 'You guessed correctly'
    }
    else {
        scramble.innerHTML = 'You are incorrect'
    }
}
//end of word scramble

window.addEventListener('load', function(){
    build();

});
btn5.addEventListener('click',scrambleWord);

