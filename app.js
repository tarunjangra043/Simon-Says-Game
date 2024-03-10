let gameSeq = [];
let userSeq = [];


let btns = ["red","green","yellow","purple"];

let started=false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("Event trigger");
    if(started==false) {
        // console.log("Game is Started");
        started=true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];

    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randBtn);
    // choose random color....
    gameFlash(randBtn);
}


function checkAns(indx) {
    // console.log("Curr Level ",level);

    // let indx = level-1;

    if(userSeq[indx]==gameSeq[indx]) {
        // console.log("Same Value");
        if(userSeq.length==gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started=false;
    gameSeq = [];
    userSeq = [];
    level=0;
}