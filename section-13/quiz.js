let msg = document.getElementById('msg');
let answer = document.getElementById('answer');
let html = '';

// this would not work with ES6 notation
function postQuestions() {
    let questions = JSON.parse(this.responseText);
    for(let i = 0; i < questions.length; i++){
        html += '<h5>Question ' + (i + 1) + '</h5>'
        html += '<p>' + questions[i].question + '?</p>'
        let correct = questions[i].correct
        for(let j = 0; j < questions[i].answers.length; j++) {
            let isCorrect = j == correct;
            html += '<div id="div' + i + j + '" data-id="' + isCorrect + '" onclick="checkAnswer(div' + i.toString() + j.toString() + ')">' + questions[i].answers[j] + '</div>';

        }
    }
    msg.innerHTML = html;
}

loadJSON = () => {
    let xHR = new XMLHttpRequest;
    xHR.addEventListener("load", postQuestions);
    xHR.open('GET', 'http://discoveryvip.com/shared/json.php?f=quiz', true);
    xHR.send();
}

checkAnswer = (divNum) => {
    if(divNum.dataset.id === 'true'){
        answer.innerHTML = '<strong>Your answer is correct!</strong>';
        divNum.style.width = "100px";
        divNum.style.background = 'green';
    }
    else {
        answer.innerHTML = '<strong>Your answer is incorrect. Please try again.</strong>';
        divNum.style.width = "100px";
        divNum.style.background = 'red';
    }
}

init = () => {
    loadJSON();
}

window.addEventListener('load', (event) => {
    init();
});