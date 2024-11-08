let userSeq = [];
let gameSeq = [];

let level = 0;
let started = false;
let highScore = 0;

let btns = ["yellow" , "red" ,"green" , "purple" ];

let h2 = document.querySelector("h2");



document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});



function btnFlash(btn){
       btn.classList.add("flash");
       setTimeout(function(){
              btn.classList.remove("flash");
        } , 200)
}


function levelUp(){

    userSeq = [];
    level++;

    h2.innerText = `Level ${level}`;
 
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let btn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    


    btnFlash(btn);
};


function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){

            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game Over ! Your score was <i> ${level} </i> <br> Press Any key to Start Again`;
        
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        } , 200);

        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);
    

    let userColor = btn.getAttribute("id");

    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
};


let allBtns = document.querySelectorAll(".boxes");

for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
};




function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

