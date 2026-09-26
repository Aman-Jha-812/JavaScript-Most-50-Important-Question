
let button= document.querySelector('button')
let password= document.querySelector('#password')

button.addEventListener('click',()=>{
    let passwordType= password.type;
    password.type= passwordType === 'password' ? 'text' : 'password'

    button.innerText = passwordType === 'password' ? 'hide' : 'show'
})