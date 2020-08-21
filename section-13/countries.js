let msg = document.getElementById('msg');
let asia = [];
let europe = [];
let africa = [];
let americas = [];

init = () => {
    loadJSON();
}

loadJSON = () => {
    console.log('loadJson called');
    let xHR = new XMLHttpRequest;
    xHR.addEventListener("load", displayCountries);
    xHR.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    xHR.send();
}

function displayCountries() {
    console.log('displayCountries called');
    let countries = JSON.parse(this.responseText);
    for(let i = 0; i < countries.length; i++){

        switch(countries[i].region){
            case 'Asia':
                asia.push(countries[i]);
                break;
            case 'Africa':
                africa.push(countries[i]);
                break;
            case 'Europe':
                europe.push(countries[i]);
                break;
            case 'Americas':
                americas.push(countries[i]);
                break;
            default:
                break;
        }

    }
    displayRegions();
}


displayRegions = () => {
    console.log('displayRegions called');
    html = "<h4>Asia</h4>";
    buildTableHeader();
    loadTableData(asia);
    closeTable();

    html += "<br/><h4>Africa</h4>";
    buildTableHeader();
    loadTableData(africa);
    closeTable();

    html += "<br/><h4>Americas</h4>";
    buildTableHeader();
    loadTableData(americas);
    closeTable();

    html += "<br/><h4>Europe</h4>";
    buildTableHeader();
    loadTableData(europe);
    closeTable();

    msg.innerHTML = html;
}

buildTableHeader = () => {
    html += '<table><tr><th>Country</th><th>Flag</th></tr>';
}

loadTableData = (dataArray) => {
    for(let i = 0; i < dataArray.length; i++) {
        html += '<tr><td>' + dataArray[i].name + '</td><td><img src="' + dataArray[i].flag  + '" width="50" height="30"></td></tr>';
    }
}

closeTable = () => {
    html += '</table>';
}

window.addEventListener('load', (event) => {
    init();
});