// How can you update the DOM based on user input in real time (e.g.., live preview of a form)?
let nameInput=document.querySelector('#name')
let emailInput=document.querySelector('#email')

let nameValue= document.querySelector('.nameValue')
let eamilValue= document.querySelector('.emailValue')

nameInput.addEventListener('input',function(e){
    nameValue.innerText=(e.target.value)
})

emailInput.addEventListener('input',function(e){
    eamilValue.innerText=(e.target.value)
})