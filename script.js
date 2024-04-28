
//These  are 3 variables that represent the 3elements in html  file
const playerDisplay = document.getElementById("player-choice")
const computerDisplay = document.getElementById("computer-choice")
const resultDisplay = document.getElementById("resultDisplay")

const choices = ["Rock", "Paper", "Scissors"];
// array of choices to choose 


function Game(playerChoice) { 
    const computerChoice = choices[Math.floor(Math.random() * 3)]; //creates a random number from 0-2 which basically picks one of the choices from array randomly

    const getResult = (playerChoice, computerChoice) => //this functions decides what happens
//down below is a ternary operator to decide if its a tie, winner, or looser
        playerChoice === computerChoice 
        ? "🤷🏻‍♂️ TIE 🤷🏻‍♂️" 
 :  (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") 
    ? "🎉 WINNER 🎉" 
    : "😿 COMPUTER WINS 😿" 
    
    const result = getResult(playerChoice, computerChoice); // here we put the result from the getResult function and put it inside this result variable
    resultDisplay.textContent =result;  //displays result
    playerDisplay.textContent = `Player: ${playerChoice}` ; //this line and the one below two just display the choices 
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    
    resultDisplay.style.backgroundColor = //this just styles the game result 
    result === "🤷🏻‍♂️ TIE 🤷🏻‍♂️" 
    ? "blue"
    : result === "🎉 WINNER 🎉"
    ? "green"
    : "red";
    resultDisplay.style.border = "2px solid transparent" ;
    resultDisplay.style.color = "white";
}