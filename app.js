let gameContainer = document.querySelector(".container")
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let turno = true;
let winContainer = document.querySelector(".win-container");
let msgPara = document.querySelector("#msg");
let newGameButton = document.querySelector(".new-game-btn");
let count = 0;
let winnerSelector = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [1,4,8],
    [2,4,6]
];
const resetGame = () =>{
    turno=true;
    enabledBox();
    winContainer.classList.add('hide');
    gameContainer.classList.remove("hide-container");
    reset.classList.remove('hide-container');
};
//adding event listener to every boxes
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled= true;
        count++;
        let isWinner=checkWinner();
       
        if(count===9&&!isWinner){
            gameDraw();
        }
    });
});
const gameDraw =() =>{
    msgPara.innerText = `The game is draw`;
    winContainer.classList.remove("hide");
    disabledBox();
    winnerpage();
};

const winnerpage =()=>{
    gameContainer.classList.add("hide-container");
    reset.classList.add('hide-container');
}
const disabledBox = () =>{
    for(let box of boxes){
    box.disabled = true;
}
};
const enabledBox = () =>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText="";
}

};

//winner msg
const showWinner = (winner)=>{
    msgPara.innerText = `Congratulations, the winner is ${winner}`;
    winContainer.classList.remove("hide");
    disabledBox();
    winnerpage();
};
//checking winner
const checkWinner = ()=>{
    for(let pattern of winnerSelector){
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if(val1!=""&&val2!=""&&val3!=""){
        if(val1===val2&&val2===val3) {
            console.log("winner",val1);
        showWinner(val1);
        }
        
    }
    }
};
reset.addEventListener("click",resetGame);
newGameButton.addEventListener("click",resetGame);