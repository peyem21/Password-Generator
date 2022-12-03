const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passWord1 = document.getElementById("password1")
let passWord2 = document.getElementById("password2")
let geN = document.getElementById("gen")

let randButton = document.getElementById("randbutton")

let i = 0
function generator() {
    let random1 = Math.floor( Math.random() * characters.length )

    return characters[random1]
}



function passGenerator() {
    passWord1.textContent = generator() + generator() + generator()
     + generator() + generator() + generator() + generator() + generator() +
     generator() + generator() + generator() + generator() + generator()

     passWord2.textContent = generator() + generator() + generator()
     + generator() + generator() + generator() + generator() + generator() +
     generator() + generator() + generator() + generator() + generator()
}