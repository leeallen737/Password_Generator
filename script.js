const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let buttonEl = document.getElementById('button-el')
let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')

let copied = document.getElementById('copied')



buttonEl.addEventListener('click', function() {
    passwordOne.textContent = '?H):QX`KgDt(00N)'
    passwordTwo.textContent = ')KRiA^o-3fjF/XRZ'

    randomPassword()
})

passwordOne.addEventListener('click', function() {
    navigator.clipboard.writeText(passwordOne.innerText)
    copied.textContent = 'Copied to Clipboard!'
    
    copied.className = "copied"
    setTimeout(function(){
        copied.className = "copied fade"
    }, 1000);

    
})

passwordTwo.addEventListener('click', function() {
    navigator.clipboard.writeText(passwordTwo.innerText)
    copied.textContent = 'Copied to Clipboard!'

    copied.className = "copied"
    setTimeout(function(){
        copied.className = "copied fade"
    }, 1000);

    
})

function randomPassword() {
    passwordOne.textContent = ''
    passwordTwo.textContent = ''

    for(let i = 0; i < 16; i++) {

        let randomNumbersOne = Math.floor(Math.random() * characters.length)
        let randomNumbersTwo = Math.floor(Math.random() * 61)

        passwordOne.textContent += characters[randomNumbersOne]
        passwordTwo.textContent += characters[randomNumbersTwo]

    }
}