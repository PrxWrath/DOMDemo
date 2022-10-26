const form = document.querySelector('.myForm');
const msg = document.querySelector('.msg');
const btn = document.querySelector('#submit-btn');

const container = document.querySelector(".container");

form?.addEventListener('submit', onSubmit);

//display users in local storage when document is loaded
document.addEventListener('DOMContentLoaded', displayUsers(0));

//add new users
function onSubmit(e){

    e.preventDefault();    
    const uname = document.querySelector('#name');
    const email = document.querySelector('#email');

    if(uname.value==='' || email.value===''){
        msg.classList.add('bg-danger')
        msg.classList.add('text-light')
        msg.innerHTML='Please enter values in all fields.'
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        let user = {
            name: uname.value,
            email: email.value
        }
        
        let userJSON = JSON.stringify(user);

        //remove from screen if email already exists
        if(localStorage.getItem(`User${user.email}`)!==null){
            let existing = document.getElementById(`${user.email}`);
            existing.remove();
        }

        localStorage.setItem(`User${email.value}`, userJSON);
        uname.value = '';
        email.value = '';
        displayUsers(localStorage.length-1) //display the recently added user 
    }
     
}


//display existing users   
function displayUsers(k){
    
    let uname = document.querySelector('#name');
    let email = document.querySelector('#email');

    for(let i=k; i<localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
            
            let newDiv = document.createElement('div');
            newDiv.className = 'list-group-item m-auto bg-dark text-light w-50';
            newDiv.setAttribute('id', user.email);
            
            let editBtn = document.createElement('button');
            editBtn.className = 'btn btn-sm btn-primary mr-2 float-right';
            editBtn.textContent = 'Edit'
            editBtn.addEventListener('click', (e)=>{
                uname.value = user.name;
                email.value = user.email;
                newDiv.remove();
                localStorage.removeItem(`User${user.email}`)
            })

            let delBtn = document.createElement('button');
            delBtn.textContent = 'X'
            delBtn.className = 'btn btn-sm btn-danger float-right';
            delBtn.addEventListener('click', (e)=>{
                newDiv.remove();
                localStorage.removeItem(`User${user.email}`)
            })

            let data = document.createTextNode(user.name+": "+user.email);
            newDiv.appendChild(data);
            newDiv.appendChild(delBtn);
            newDiv.appendChild(editBtn);
        
            container.appendChild(newDiv);  
    }
} 



