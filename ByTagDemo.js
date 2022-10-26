const ul = document.getElementsByTagName('li');
const items = document.getElementsByClassName('list-group-item');

//modify content of li tag elements 
for(let i of ul){
    i.style.backgroundColor = '#ccc'
    i.style.fontWeight = 'bold';
}

//make the new item a part of list group
ul[4].classList.add('list-group-item');

//modify content of class
for(let i of items){
    i.style.fontSize = '18px';
}