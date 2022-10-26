const items = document.querySelector('#items');
items.parentElement.style.backgroundColor = '#bb8de5';

console.log(items.firstChild);
console.log(items.lastChild);

items.firstElementChild.style.backgroundColor = '#f4f4f4'
items.lastElementChild.style.backgroundColor = '#ccc'

console.log(items.nextSibling);
console.log(items.previousSibling);

items.nextElementSibling.innerText = 'Welcome to items list app';
items.previousElementSibling.innerText = 'List of Items'

const greeting = document.createElement('div');
greeting.className = 'title';
greeting.setAttribute('title', 'Greeting Div');
greeting.style.fontSize = '20px'
const textNode = document.createTextNode('Hello World :)');
greeting.appendChild(textNode);

const msg = document.createElement('div');
msg.className = 'title';
msg.setAttribute('title', 'Msg Div');
msg.style.fontSize = '20px'
const textMsg = document.createTextNode('Hello World :)');
msg.appendChild(textMsg);


const container = document.querySelector('header .container');
const heading = document.querySelector('header h1');
const listDiv = document.querySelector('#main');
const list = document.querySelector('.list-group');

container.insertBefore(greeting,heading);
listDiv.insertBefore(msg,list);




