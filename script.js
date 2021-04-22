let footer = document.querySelector('footer p').innerHTML += new Date().getFullYear();
const googleURL = 'https://script.google.com/macros/s/AKfycbwCIhtU6B4I8wrFnd_v5M5Qr8_iNG4aTwyOLr7e_FcPrcyKEMXE-YKmLwSxZI6KX9zLWA/exec'

//const line = document.getElementById('line');
let email = document.getElementById('email');
let inputBox= document.getElementById('inputBox');
let loading = document.getElementById('loading-container');

let form = document.forms['emailform']
form.addEventListener('submit', e => {
    
    e.preventDefault()
   
    if(email.value != ""){
        loading.style = 'display:block';
        inputBox.style = 'display:none';
        email_data =new FormData(form); 
        email.value = ""
            fetch(googleURL, { method: 'POST', body: email_data })
            .then(response => {console.log('Success!', response);
            location.href = 'succes.html';})
            .catch(error => console.error('Error!', error.message))
    }    
})






