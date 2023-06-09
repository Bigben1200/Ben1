let P1Button = document.querySelector("#P1");
let p1dis = document.querySelector("#p1dis");
let P2Button = document.querySelector("#P2");
let p2dis = document.querySelector("#p2dis");
let P1Score = 0;
let P2Score = 0;
let gameOver = false;
let winningScore = 5;

P1Button.addEventListener("click", function() {
    if(!gameOver) {
        P1Score++;
        if(P1Score === winningScore) {
            gameOver = true;
        }
        p1dis.textContent = P1Score;
    }
});
P2Button.addEventListener("click", function() {
    if(!gameOver) {
        P2Score++;
        if(P2Score === winningScore) {
            gameOver = true;
        }
        p2dis.textContent = P2Score;
    }
});

let ResetButton = document.querySelector("#Reset");
ResetButton.addEventListener("click", function() {
    window.location.reload();
});