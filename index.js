CODE STARTS FROM LINE 40
//create two variables, firstCard and secondCard.
// let blackJack = false;
// let isAlive = true;
// if(sum <= 20){
//   console.log('Do you want to draw a new card?🙂');
// }else if(sum === 21){
//   console.log('Wohoo! You\'ve got Blackjack!🥳');
//   blackJack = true;
// }else {
//   console.log('You\'re out of the game!😭')
//   isAlive = false;
// }

//create a variable called isAlive and assign it to true
//flip its value to false in the appropreate code block
//CASH OUT!
// console.log(blackJack);
// console.log(isAlive);
//Reassign the message variable to the string we're logging out.
//declare a variable called message and assign its value to an emply string.

//create a startGame() function. Move the conditional below inside tghghe body of the function.
//Store the message-el paragraph in a variable called messageEl
//store the sum paragraph in a variable called sumEl
// sumEl = document.getElementById('sum-el'); 
//queryselector  -  returns the first Element within the document that matches the specified selector, or group of selectors
//store the cards paragraph in a variable called cardsEl and render the cards in format => "Cards: 10 4"
  //render the sum on the page using this format => "Sum: 13"
//display the message in the messageEl using the messageEl.textContent 
//Create a new function called startGame() that calles renderGame()
//Create a new function newCard that logs out "Drawing a new card from the deck"
// let newcardEl = document.querySelector('newcard-el');
  //create a card variable and hard code its value to a number(2-11)
  //Add the new card to the sum variable
  //Call startGame()
//
//Create a function, getRandomCard(), they always return the number 5
//use getRandomCard() to set the values of firstCard and SecondCard

function getRandomCard(){
  let randomCard = Math.floor(Math.random()*13) + 1;
  if(randomCard === 1){
    return 11;
  }else if(randomCard > 10){
    return 10
  }else{
    return randomCard;
  }
}

let cards = [];
let sum = 0;
let blackJack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

let player = {
  name: 'Karthik',
  chips: 150
}

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard,secondCard];
  sum = cards[0] + cards[1];
  renderGame()
}
function renderGame(){
  if(sum <= 20){
    message = 'Do you want to draw a new card?';
  }else if(sum === 21){
    message = 'You\'ve got Blackjack!';
    blackJack = true;
  }else {
    message = 'You\'re out of the game!';
    isAlive = false;
  }
  sumEl.textContent = "Sum: " + sum;
  //create a for loop that renders out all the cards instead of just two
 
  cardsEl.textContent = "Cards: ";
  for(let i = 0; i < cards.length; i++)
  {
    cardsEl.textContent += cards[i] + " ";    
  }
  messageEl.textContent = message;
}

//Only allow the player to get a new card if she IS alive and does NOT have BlackJack

function newCard(){
  if(blackJack === false && isAlive === true){
    let num3 = getRandomCard();
    sum += num3;
    cards.push(num3);
    console.log(cards);
    renderGame()    
  } else{
    return null;
  }
}
