const button = document.getElementById('btn');
const heads = document.getElementById('heads');
const tails = document.getElementById('tails');

tossCoin = () => {
    let selection = 1;
    if(heads.checked){
        selection = 0;
    }
    const rand = Math.floor(Math.random() * Math.floor(2));
    output.innerHTML = (rand == selection ? 'You Win! ' : 'You Lost! ') + 'The coin landed on ' + (rand == 0 ? 'heads' : 'tails')
}


toggleHeads = () => {
    if(heads.checked){
        tails.checked = false;
    }
}

toggleTails = () => {
    if(tails.checked){
        heads.checked = false;
    }
}

heads.addEventListener('change',toggleHeads);
tails.addEventListener('change',toggleTails);
button.addEventListener('click',tossCoin);
const output = document.getElementById('output');