const form = document.getElementById('itemForm');
const list = document.getElementById('items');
const filter = document.getElementById('filter');
filter?.addEventListener('keyup', filterItems);
form?.addEventListener('submit', addItems);
list?.addEventListener('click', deleteItems);


function filterItems(e){
    let key = e.target.value.toLowerCase();
    let items = list.querySelectorAll('.list-group-item');
    
    Array.from(items).forEach((item)=>{
        
        let i = item.firstChild.textContent + item.childNodes.item(2).textContent;
        if(i.toLowerCase().includes(key)){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }  
    })
    
}

function addItems(e){
    e.preventDefault();
    
    
    const item = document.getElementById('item');
    const description = document.getElementById('desc');
    
    const newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    
    
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm mr-2 float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    newItem.appendChild(document.createTextNode(item.value +": "+desc.value));
    newItem.appendChild(delBtn);
    newItem.appendChild(editBtn);
    list.appendChild(newItem);
    item.value = '';
    description.value = '';
}

function deleteItems(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Delete this item?')){
            const i = e.target.parentElement;
            list.removeChild(i);
        }
    }
}