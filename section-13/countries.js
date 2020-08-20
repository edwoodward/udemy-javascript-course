window.addEventListener('load', (event) => {
    init();
});
let loadData = document.getElementById('load');
let msg = document.getElementById('msg');
//loadData.addEventListener('click',init);
let asia = [];
let europe = [];
let africa = [];
let americas = [];
const REGIONS = ['Asia', 'Europe', 'Africa', 'Americas'];

init = () => {
    loadJSON();
}

loadJSON = () => {
    let xHR = new XMLHttpRequest;
    xHR.addEventListener("load", displayCountries);
    xHR.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    xHR.send();
}

function displayCountries() {
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
    html = "<h4>Asia</h4>";
    for(let i = 0; i < asia.length; i++) {
        html += '<p><strong>Name: </strong>' + asia[i].name + ' <strong>Flag: </strong><img src="' + asia[i].flag + '" width="50" height="30"></p>';
    }

    html += "<br/><h4>Africa</h4>";
    for(let i = 0; i < africa.length; i++) {
        html += '<p><strong>Name: </strong>' + africa[i].name + ' <strong>Flag: </strong><img src="' + africa[i].flag + '" width="50" height="30"></p>';
    }

    html += "<br/><h4>Americas</h4>";
    for(let i = 0; i < americas.length; i++) {
        html += '<p><strong>Name: </strong>' + americas[i].name + ' <strong>Flag: </strong><img src="' + americas[i].flag + '" width="50" height="30"></p>';
    }

    html += "<br/><h4>Europe</h4>";
    for(let i = 0; i < europe.length; i++) {
        html += '<p><strong>Name: </strong>' + europe[i].name + ' <strong>Flag: </strong><img src="' + europe[i].flag + '" width="50" height="30"></p>';
    }
    msg.innerHTML = html;
}