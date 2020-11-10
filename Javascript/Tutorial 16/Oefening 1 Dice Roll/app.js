// Opdracht: Dice Roll
    // Math.floor(Math.random() * 6) + 1




let button = document.getElementById('diceRollerbutton');
const diceOne = document.getElementById('placeholder1');
const diceTwo = document.getElementById('placeholder2');

// function changeDice

function changeDice(){
    const firstRandomDice = Math.floor(Math.random() * 6) + 1;
    const secondRandomDice = Math.floor(Math.random() * 6) + 1;
    diceOne.innerHTML = `<img src="assets/dice${firstRandomDice}.png" style="height: 100px; width: 100px;">`;
    diceTwo.innerHTML = `<img src="assets/dice${secondRandomDice}.png" style="height: 100px; width: 100px;">`;
}

button.addEventListener('click',changeDice)
