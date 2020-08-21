let output = document.getElementById('wrapper');
let filler = document.getElementById('filler')

let holder = [];
const names = ['Ed', 'Mary', 'Bob', 'Cindy', 'Jessica', 'Scott']
let nameToLookFor;

start = () => {
    if(document.getElementById('boxes')){
        document.getElementById('boxes').remove();
        document.getElementById('msg1').innerHTML = 'Welcome'
    }
    setNameToLookFor();

    document.getElementById('msg2').innerHTML = 'Guess selected name by clicking on the box';
    holder = names.slice();
    holder.sort(function(a,b){
        return 0.5 - Math.random()
    });
    buildBoxes();
}

buildBoxes = () => {
    let body = document.getElementById('body');
    const spanElement = document.createElement('span');
    spanElement.setAttribute('id','boxes');

    for(let x in holder) {
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'box');
        divElement.setAttribute('onmouseover', 'updateText(this, "' + holder[x] +'")');
        divElement.setAttribute('onmouseout', 'updateText(this, "Hidden")');
        divElement.setAttribute('onclick', 'handleClick(this)');
        divElement.innerHTML = 'Hidden ' + x;
        spanElement.appendChild(divElement);
    }
    body.appendChild(spanElement);
}

updateText = (t, text) => {
    t.innerHTML = text;
}

setNameToLookFor = () => {
    nameToLookFor = names[Math.floor(Math.random() * Math.floor(names.length))];
}

handleClick = (t) => {
    if(nameToLookFor === t.innerHTML) {
        document.getElementById('msg1').innerHTML = 'Yay!!';
        document.getElementById('msg2').innerHTML = 'You guessed correctly! The name to guess was ' + nameToLookFor;
    }
    else {
        document.getElementById('msg1').innerHTML = 'Sad Trombone';
        document.getElementById('msg2').innerHTML = t.innerHTML + ' was not the correct answer'

    }
}

function changeImg(t){
    if(t.src === 'https://via.placeholder.com/150/2288FF/FFFFFF') {
        t.src = 'https://via.placeholder.com/150/FFFF00/000000';
    }
    else
    {
        t.src = 'https://via.placeholder.com/150/2288FF/FFFFFF';
    }
}

let targetHolder;
startDrag = () => {
  output.innerHTML = 'Drag started';
  targetHolder = event.target;
}

noDrop = () => {
  event.preventDefault();
}

startDrop = () => {
  event.preventDefault();
  output.innerHTML = 'Dropped';
  if(event.target.className==='box') {
    event.target.appendChild(targetHolder);
  }
}

let images = ['1', '2', '3', '4', '5'];
let colors = ['111', '222', 'ff0000', '0000FF', '333'];
let colorChoice = 0;

(function(){
  window.setTimeout(swapImage, 3000);
})();

function swapImage() {
    if(colorChoice < images.length) {
        let image = document.getElementById('image');
        image.src = 'https://via.placeholder.com/350x50/' + colors[colorChoice] + '/fff?text=image' + images[colorChoice];
        colorChoice++;
        window.setTimeout(swapImage, 3000);
        if(colorChoice == images.length){
            colorChoice=0;
        }
    }
}

setSize = () => {
  let op = document.getElementById('op');
  let swapImage = document.getElementById('swap');
  let color = document.getElementById('color');
  swapImage.src = 'https://via.placeholder.com/' + op.value + '/' + color.value.substring(1) + '/';
}