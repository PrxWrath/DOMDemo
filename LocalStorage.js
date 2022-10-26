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
        console.log(uname.value,": ",email.value);
        localStorage.setItem('Name', uname.value);
        localStorage.setItem('Email', email.value);
        uname.value = '';
        email.value = '';
    }
    
}

