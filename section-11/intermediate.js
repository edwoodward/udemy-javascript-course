//game
let msg = document.getElementById('msg');
//let message = document.getElementById('message');
let score = document.getElementById('score');
let gameBoard = document.getElementById('gameboard');
let playLockout = false;
let gamePlay = false;
let tileImages = [];
let tileArray = [];
let tilesFlipped = [];
let cardFlipped = -1
let timer;

//match game
document.getElementById('start').addEventListener('click',function(){
    startGame();
});

startGame = () => {
    msg.innerHTML = '';
    document.getElementById('start').style.visibility='hidden';
    if(!gamePlay) {
        gamePlay = true;
        buildTilesArray();
        tileArray = tileImages.concat(tileImages);
        shuffleTiles(tileArray);
        buildBoard();
    }
}

buildTilesArray = () => {
    for(let i = 0;i<7;i++) {
        tileImages.push(i+'.jpg');
    }
}

shuffleTiles = (tileImages) => {
    for(let x = 0; x < tileImages.length; x++) {
        let rand = Math.floor(Math.random() * Math.floor(tileImages.length - 1));
        let temp = tileImages[x];
        tileImages[x] = tileImages[rand];
        tileImages[rand] = temp;
    }
}

buildBoard = () => {
    let html = '';
    let x = 0;
    tileArray.forEach(function(e) {
        html += '<div class="gameTile">';
        html += ' <img id="card' + x + '" src="http://via.placeholder.com/150/000000/ffffff?text=click" ' +
            'onclick="pickCard(' + x + ',this)" class="flipImage"></div>';
        x++;

    })
    gameBoard.innerHTML = html;
}

pickCard = (index, t) => {
    if(!playLockout && !isInArray(t.id, tilesFlipped)) {
        if (cardFlipped >= 0) {
            cardFlip(index, t);
            playLockout = true;
            let match = isAMatch();
            if (match) {
                msg.innerHTML = 'Match Found!';
                cardFlipped = -1;
                playLockout = false;
                checkGameOver();
            } else {
                msg.innerHTML = 'No match';
                timer = setInterval(hideCard, 1000);
            }
        } else {
            cardFlipped = index;
            cardFlip(index, t);
        }
    }
}

isInArray = (index, array) => {
    return array.indexOf(index) > -1;
}

cardFlip = (index, target) => {
    target.src = "http://via.placeholder.com/250/ffffff/000000?text=" + tileArray[index];
    tilesFlipped.push(target.id);
}

hideCard = () => {
    for (let x = 0; x < 2; x++) {
        let vid = tilesFlipped.pop();
        document.getElementById(vid).src = 'http://via.placeholder.com/250/000000/ffffff?text=click';
    }
    clearInterval(timer);
    cardFlipped = -1;
    playLockout = false;
    msg.innerHTML = "Select Again";
}

checkGameOver = () => {
    if(tilesFlipped.length === tileArray.length){
        msg.innerHTML = 'Game Over!';
        document.getElementById('start').style.visibility='visible';
        gamePlay = false;
        tilesFlipped = [];
        tileArray = [];
        tileImages = [];

    }
}

isAMatch = () => {
    let src1 = tilesFlipped[tilesFlipped.length - 1];
    let src2 = tilesFlipped[tilesFlipped.length - 2];
    return document.getElementById(src1).src === document.getElementById(src2).src
}
//end of match game

//find and replace
function findAndReplace() {
    let text = document.getElementById('text');
    let find = document.getElementById('find');
    let replaceStr = document.getElementById('replace');
    //only replaces the first one
    //let newText = text.innerHTML.replace(find.value, replaceStr.value);
    //replaces all - not case sensitive
    let newText = text.innerHTML.split(find.value).join(replaceStr.value);
    text.innerHTML = newText;

}