let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-game");
let msg = document.querySelector("#msg");
let msgContiner = document.querySelector(".msg-continer");

let turnO = true//player-x,player-O

const winPat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

/* const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContiner.classList.add("hide");
} */

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disabledBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disabledBoxes();
}

const checkwinner = () => {
    for (let pat of winPat) {
           let pos1val = boxes[pat[0]].innerText; 
           let pos2val = boxes[pat[1]].innerText; 
           let pos3val = boxes[pat[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val !=""){
        if(pos1val===pos2val && pos2val === pos3val)
        {
            console.log("Winner",pos1val);
            showWinner(pos1val)
        }
    }
  } 
}

//newgameBtn.addEventListener("click",resetGame);
//resetBtn,addEventListener("click",resetGame);