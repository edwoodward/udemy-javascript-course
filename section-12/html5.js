//canvas drawing
let msg = document.getElementById('msg');
let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');
let pos = {x:0, y:0};
let color = document.getElementById('color');
let colorValue = 'blue';
let save = document.getElementById('save');

let clear = document.getElementById('clear');


function init() {
    canvas1.addEventListener('mousemove',draw);
    canvas1.addEventListener('mousemove',setPosition);
    canvas1.addEventListener('mouseenter',setPosition);
    color.addEventListener('change', setColor);
}

setColor = (e) => {
    colorValue = e.target.value;
}

draw = (e) => {
    if(e.buttons !==1) return;
    ctx1.beginPath();
    ctx1.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx1.lineTo(pos.x, pos.y);
    ctx1.strokeStyle = colorValue;
    ctx1.stroke();

}

setPosition = (e) => {
    pos.x = e.pageX;
    pos.y = e.pageY;
}
//end canvas drawing

//load image into canvas
let imgLoader = document.getElementById('imgLoader');

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

uploadImage = () => {
    let fr = new FileReader();
    fr.readAsDataURL(event.target.files[0]);
    fr.onload = function(e){
        let image = new Image();
        image.src = event.target.result;
        image.onload = function(){
            canvas2.width = image.width;
            canvas2.height = image.height;
            ctx2.drawImage(image,0,0);
            ctx2.fillText("Javascript Course", 50, 50);
        }
    }
}
//end of load image

//drawing circles that move across the screen
let pos2 = {x:0, y:50};
let pos3 = {x:50, y:100};
let canvas3 = document.getElementById('canvas3');
let ctx3 = canvas3.getContext('2d');
let circlesBtn = document.getElementById('circles');


function drawCircles() {
    pos2.x = pos2.x + 5;
    pos3.y = pos3.y + 5;
    if (pos2.x > canvas3.width) {
        pos2.x = 0;
    }
    if (pos2.y > canvas3.height) {
        pos2.y = 50;
    }
    if (pos3.x > canvas3.width) {
        pos3.x = 50;
    }
    if (pos3.y > canvas3.height) {
        pos3.y = 100;
    }
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    ctx3.beginPath();
    ctx3.arc(pos2.x, pos2.y, 50, 0, 2 * Math.PI);
    ctx3.fillStyle = "red";
    ctx3.fill();

    ctx3.beginPath();
    ctx3.arc(pos3.x, pos3.y, 50, 0, 2 * Math.PI);
    ctx3.fillStyle = "blue";
    ctx3.fill();
    window.setTimeout(drawCircles, 100)
}

save.addEventListener('click', function(){
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');
    //let canvas = document.getElementById('myCanvas');
    canvas1.toBlob(function(blob) {
        let url = URL.createObjectURL(blob);
        downloadLink.setAttribute('href', url);
        downloadLink.click();
    });
})
clear.addEventListener('click', function(){
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
})
window.addEventListener('load', (event) => {
    init();
})
imgLoader.addEventListener('change',uploadImage, false);
circlesBtn.addEventListener('click', drawCircles);