let output = document.getElementById('message');
let names = ['Ed', 'Mary', 'Bob', 'Cindy', 'Jessica', 'Scott']
let colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
let clickCount = 1;

buildTable = () => {
    let table = document.createElement('table');
    table.border = 1;
    table.setAttribute('id', 'table1');
    for (let row = 0; row < names.length; row++) {
        let newrow = table.insertRow();
        for (let col = 0; col < 3; col++) {
            if(col == 0) {
                let cell = newrow.insertCell();
                cell.textContent = names[row];
                cell.setAttribute('data-row', row);
                cell.addEventListener('click',function(){
                    updateCount(this);
                });
            }
            else if(col == 1){
                let indexCell = newrow.insertCell();
                var link = document.createElement("a");
                link.setAttribute("href", "udemy-javascript-course:deleteName(" + row + ");")
                var linkText = document.createTextNode("Delete");
                link.appendChild(linkText);
                indexCell.appendChild(link);
            }
            else {
                let emptyCell = newrow.insertCell();
                var link2 = document.createElement("a");
                link2.setAttribute("href", "udemy-javascript-course:editName(" + row + ");")
                var linkText2 = document.createTextNode("Edit");
                link2.appendChild(linkText2);
                emptyCell.appendChild(link2);
            }
        }
    }
    document.body.insertBefore(table,document.getElementById('filler'));

}

deleteName = (t) => {
    names.splice(t, 1);
    let tab = document.getElementById('table1');
    tab.remove();
    buildTable();
}

addPerson = () => {
    let table = document.getElementById('table1');
    let person = document.getElementById('np');
    let tableSize = table.rows.length;
    names.push(person.value);
    let row = table.rows[1].cloneNode(true);
    row.cells[0].innerHTML = person.value;
    let link1 = document.createElement("a");
    link1.setAttribute("href", "udemy-javascript-course:deleteName(" + tableSize + ");");
    let linkText1 = document.createTextNode("Delete");
    link1.appendChild(linkText1);
    row.cells[1].innerHTML = '';
    row.cells[1].appendChild(link1);
    let link2 = document.createElement("a");
    link2.setAttribute("href", "udemy-javascript-course:editName(" + tableSize + ");");
    let linkText2 = document.createTextNode("Edit");
    link2.appendChild(linkText2);
    row.cells[2].innerHTML = '';
    row.cells[2].appendChild(link2);
    table.appendChild(row);

}

editName = (t) => {
    let table = document.getElementById('table1');

    let tablerow = table.rows[parseInt(t)];
    tablerow.style.backgroundColor = 'yellow';
    let name = tablerow.cells[0].innerHTML;
    let editedName = prompt('Please edit the name', name);
    if (editedName == null || editedName === "") {
        tablerow.cells[0].innerHTML = name;
    }
    else {
        tablerow.cells[0].innerHTML = editedName;
        names[parseInt(t)] = editedName;
    }

}

let textItem = document.getElementById('textItem');
let msg = document.getElementById('message');

textItem.addEventListener('select', function(){
    let start = this.selectionStart;
    let end = this.selectionEnd;
    let str = this.value;
    msg.innerHTML = 'The selected text is: ' + str.substring(start,end);
});

let hdr = document.querySelector('.holder');
let box = document.getElementById('box');

hdr.addEventListener('mousemove', function(e){
    box.innerHTML = e.clientX + ' ' + e.clientY;
})

hdr.addEventListener('mouseover', function(){
    this.classList.toggle('active')
})

let img = document.getElementById('img');
let msg2 = document.getElementById('msg2');

img.addEventListener('mouseover', function(){
    msg2.innerHTML = 'over';
    this.src = 'http://via.placeholder.com/350x150/0000FF/fff?text=image2'
})

img.addEventListener('mouseout', function(){
    msg2.innerHTML = 'out';
    this.src = 'http://via.placeholder.com/350x150/ff0000/fff?text=image1'
})

let titles = document.querySelectorAll('.acc');
for(let i = 0; i < titles.length; i++){
    titles[i].onclick = function() {
        this.nextElementSibling.classList.toggle('active');
        for(let x = 0; x < titles.length; x++) {
            if(titles[x] !== this) {
                let item = titles[x];
                item.nextElementSibling.classList.remove('active');
            }
        }
    }
}