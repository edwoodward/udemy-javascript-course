const button = document.getElementById('btn');
const responses = [
    'It is certain.',
    'Without a doubt.',
    'Reply hazy, try again',
    'Cannot predict now',
    'Don\'t count on it',
    'My sources say no'
];
makeMagic = () => {
    let rand = Math.floor(Math.random() * Math.floor(6));
    output.innerHTML = 'The Magic 8 Ball says: ' + responses[rand];
}

button.addEventListener('click',makeMagic);
const output = document.getElementById('output');