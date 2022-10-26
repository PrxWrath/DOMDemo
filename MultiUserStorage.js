const form = document.querySelector('.myForm');
const msg = document.querySelector('.msg');
const btn = document.querySelector('#submit-btn');
const container = document.querySelector(".container");

form?.addEventListener('submit', onSubmit);

//display users in local storage when document is loaded
document.addEventListener('DOMContentLoaded', displayUsers(0));

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
        localStorage.setItem(`User${email.value}`, userJSON);
        uname.value = '';
        email.value = '';
    }
    displayUsers(localStorage.length-1) //display the recently added user  
}


    
function displayUsers(k){

    for(let i=k; i<localStorage.length; i++){
            let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
            
            let newDiv = document.createElement('div');
            newDiv.className = 'list-group-item m-auto bg-dark text-light w-50';
            let data = document.createTextNode(user.name+": "+user.email);
            newDiv.appendChild(data);
        
            container.appendChild(newDiv);  
    }
} 



