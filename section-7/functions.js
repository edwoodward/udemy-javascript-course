let output = document.getElementById("output");
let listBtn = document.getElementById("listBtn");
let dups = document.getElementById("dups");
let dupBtn = document.getElementById("dupBtn");
let names = document.getElementById("names");
let shuffleBtn = document.getElementById("shuffleBtn");


let shoppingList = [];

function addItem() {
    const item = document.getElementById("item");
    shoppingList.push(item.value);
    let html = '';
    for(let x = 0; x < shoppingList.length; x++) {
        html += (x+1) + '. ' +  shoppingList[x] + '<br/>';
    }
    output.innerHTML = html;
}

const testArray = ['Ed', 'Tony','Carol', 'Jessica', 'Stan', 'Jan', 'Hope', 'Fred', 'Jessica', 'Stan', 'Jan', 'Hope', 'Fred', 123, 234, 345, 456, 123,234, 345, 456 ];
dups.innerHTML = 'Test Array: ' + testArray;
let userNames = ['Ed', 'Tony','Carol', 'Jessica', 'Stan', 'Jan', 'Hope', 'Fred'];
names.innerHTML = 'Original Order: ' + userNames;


removeDups = () => {
    let noDups = [];
    for(let x = 0; x < testArray.length; x++) {
        if(!noDups.includes(testArray[x])) {
          noDups.push(testArray[x]);
        }
    }
    dups.innerHTML = 'Test Array: ' + testArray + '<br/>' + 'No Duplicates: ' + noDups;
}

shuffleArray = () => {
    let html = 'Original Order: ' + userNames + '<br/>';
    for(let x = 0; x < userNames.length; x++) {
        let rand = Math.floor(Math.random() * Math.floor(userNames.length - 1));
        let temp = userNames[x];
        userNames[x] = userNames[rand];
        userNames[rand] = temp;
    }

    html += 'New Order: ' + userNames;
    names.innerHTML = html;
}


listBtn.addEventListener('click',addItem);
dupBtn.addEventListener('click',removeDups);
shuffleBtn.addEventListener('click',shuffleArray);