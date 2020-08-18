let output = document.getElementById("output");
let tableBtn = document.getElementById("table-btn");
let car = document.getElementById("car");
let carBtn = document.getElementById("car-btn");
let array = document.getElementById("array");
let arrayBtn = document.getElementById("array-btn");
let banana = document.getElementById("banana");
let bananaBtn = document.getElementById("banana-btn");


buildTable = () => {
    let html = "<table>";
    for (let row = 0; row < 5; row++) {
        html += "<tr>";
        for (let col = 0; col < 3; col++) {
            html += "<td>Cell = " + ((col + 1) + (row * 3)) + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    output.innerHTML = html;

}

carDetails = () => {
    let carDetails = {numOfWheels: 4, color: 'blue', hatchback: true, interiorColor: 'red'};
    for(let x in carDetails) {
      car.innerHTML += x + ' = ' + carDetails[x] + '<br/>';
    }
}

nameLoop = () => {
    const userNames = ['Ed', 'Tony','Carol', 'Jessica', 'Stan', 'Jan', 'Hope', 'Fred'];

    for(let i = userNames.length; i > 0; i--) {
      array.innerHTML += userNames[i-1] + '<br/>';
    }
}

eatBananas = () => {
    const reply = prompt('How many bananas will you eat?');
    // let calories = 0;
    // for(let x = 0; x < Number(reply); x++) {
    //   calories += 89;
    // }
    let calories = Number(reply) * 89;
    banana.innerHTML = "Eating " + reply + ' bananas, you consumed ' + calories + ' calories';
}







tableBtn.addEventListener('click',buildTable);
carBtn.addEventListener('click',carDetails);
arrayBtn.addEventListener('click',nameLoop);
bananaBtn.addEventListener('click', eatBananas);