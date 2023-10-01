let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
let player = {
     name: "Ana",
     chips: "145"
}

playerEl.textContent=player.name + ": $" +player.chips
let cards=[]
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard+secondCard
    isAlive=true
    renderGame()
}
function getRandomCard(){
    let cardNumber = Math.floor(Math.random()*13) + 1
    if (cardNumber === 1){
        return 11
    } else if( cardNumber > 10 ){
        return 10
    } else {
        return cardNumber
    }

}
function renderGame(){
    cardsEl.textContent= "Cards: "
    for(let i = 0; i < cards.length ; i++){
        cardsEl.textContent += cards[i]+ " "
    }
    sumEl.textContent = "Sum: " + sum
if( sum <= 20){
    message = "Do you want to draw a new card?"
}else if(sum === 21){
    message = "Wohoo! You have got blackjack!"
    hasBlackJack = true
}else{
    message = "You are out the game!"
    isAlive=false
}
messageEl.textContent=message
}
function newCard(){
    if(hasBlackJack === false &&  isAlive){
    let card = getRandomCard()
    sum+=card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}
