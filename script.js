let userScore = 0;
let compScore = 0;

// LOGIN FUNCTION
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("gameSection").style.display = "block";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid login!";
    }
}

// GAME FUNCTION
function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    let resultText = "";

    if (userChoice === compChoice) {
        resultText = "It's a Draw!";
    } 
    else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        resultText = "You Win!";
        userScore++;
    } 
    else {
        resultText = "Computer Wins!";
        compScore++;
    }

    document.getElementById("result").innerText =
        `You: ${userChoice} | Computer: ${compChoice} → ${resultText}`;

    document.getElementById("score").innerText =
        `Score: You ${userScore} | Computer ${compScore}`;
}