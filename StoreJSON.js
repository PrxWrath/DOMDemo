const form = document.querySelector('.myForm');
const msg = document.querySelector('.msg');
const btn = document.querySelector('#submit-btn');
form?.addEventListener('submit', onSubmit);

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
        localStorage.setItem('User', userJSON);
        uname.value = '';
        email.value = '';
    }
    
}

