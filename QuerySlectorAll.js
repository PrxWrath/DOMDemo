const items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';

const oddItems = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i of oddItems){
    i.style.backgroundColor = 'green';
}