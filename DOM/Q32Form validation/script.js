let nameInput=document.querySelector('#name')
let emailInput=document.querySelector('#email')
let passwordInput = document.querySelector('#password')
let nameError=document.querySelector('.nameError')
let EmailError=document.querySelector('.EmailError')
let PasswordError=document.querySelector('.PasswordError')



let nameValue= document.querySelector('.nameValue')
let eamilValue= document.querySelector('.emailValue')
let passwordValue= document.querySelector('.password')

nameInput.addEventListener('input',function(e){
    let name=(e.target.value)
    if(name.length<3){
        nameError.innerText='name most be three character long'
    }else{
        nameError.innerText=''
    }
})

emailInput.addEventListener('input',function(e){
    let email=(e.target.value)
    if(!email.includes('@') || !email.includes('.')){
        EmailError.innerText='Email is invalid'
    }else{
        EmailError.innerText='';
    }
    
})

passwordInput.addEventListener('input',function(e){
    let password=(e.target.value)
    if(password.length<6){
        PasswordError.innerText='name most be 6 character long'
    }else{
        PasswordError.innerText=''
    }
})