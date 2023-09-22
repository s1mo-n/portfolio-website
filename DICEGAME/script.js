//document.querySelector(".thedicegame").textContent = "c";

function diceGame(){

    let dice1 = Math.floor((Math.random()*6)+1);
    let dice2 = Math.floor((Math.random()*6)+1);


    document.querySelector(".dice1").innerHTML = "<img src='./assets/dice"+dice1+".png' alt=''>";
    document.querySelector(".dice2").innerHTML = "<img src='./assets/dice"+dice2+".png' alt=''>";
  
    let winner;
    
    if (dice1 > dice2) {
        winner = "Player 1 wins!";
    } else if (dice1 < dice2) {
        winner = "Player 2 wins!";
    } else if (dice1 = dice2) {
        winner = "It's a draw!";
    }
    document.querySelector(".thedicegame em").textContent = winner;

}





