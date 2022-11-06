let homeCount=0
let guestCount=0

let homeScore=document.getElementById("homescore")
let guestScore=document.getElementById("guestscore")

homeScore.textContent=homeCount
guestScore.textContent=guestCount

console.log(homeScore.textContent)

function plusOneHome(){
    homeCount+=1
    homeScore.textContent=homeCount
    console.log(homeScore.textContent)
}
function plusTwoHome(){
    homeCount+=2
    homeScore.textContent=homeCount
}
function plusThreeHome(){
    homeCount+=3
    homeScore.textContent=homeCount
}

function plusOneGuest(){
    guestCount+=1
    guestScore.textContent=guestCount
}
function plusTwoGuest(){
    guestCount+=2
    guestScore.textContent=guestCount
}
function plusThreeGuest(){
    guestCount+=3
    guestScore.textContent=guestCount
}

function newGame(){
    homeCount=0
    guestCount=0
    homeScore.textContent=homeCount
    guestScore.textContent=guestCount
}