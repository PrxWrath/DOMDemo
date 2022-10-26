const form = document.getElementById('itemForm');
const list = document.getElementById('items');
form?.addEventListener('submit', addItems);
list?.addEventListener('click', deleteItems);

function addItems(e){
    e.preventDefault();
    
    
    const item = document.getElementById('item');
    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm mr-2 float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    newItem.appendChild(document.createTextNode(item.value));
    newItem.appendChild(delBtn);
    newItem.appendChild(editBtn);
    list.appendChild(newItem);
    item.value = '';
}

function deleteItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Delete this item?')){
            const i = e.target.parentElement;
            list.removeChild(i);
        }
    }
}