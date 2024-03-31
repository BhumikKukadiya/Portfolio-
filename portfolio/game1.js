const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#computer-score");

let userScore = 0;
let compScore = 0;

const gencompchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const rendInx = Math.floor(Math.random() * 3);
    return option[rendInx];
};

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw, Play again."
};

const showwinner = (userwin) => {
    if (userwin) {
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = "You win."
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compscore.innerText = compScore;

        msg.innerText = "You los."
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});