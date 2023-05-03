let scoreHome = document.getElementById("score-home-el")
let scoreGuest = document.getElementById("score-guest-el")
let countHome = 0
let countGuest = 0

function onepointHome() {
    countHome += 1
    scoreHome.textContent = countHome
}

function twopointHome() {
    countHome += 2
    scoreHome.textContent = countHome
}

function threepointHome() {
    countHome += 3
    scoreHome.textContent = countHome
}


function onepointGuest() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function twopointGuest() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function threepointGuest() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}