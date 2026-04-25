let gameSeq = [];
let userSeq = [];
let btns= ["green","red","yellow","blue"];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start == false){
        console.log("Game Started");
        start = true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}
function userBtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = "Level " + level;
    let randoIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randoIdx];
   let randbtn = document.querySelector(`.${randomColor}`);
   gameSeq.push(randomColor);
   console.log(gameSeq);
    btnFlash(randbtn);
}
function check(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
            
    }
}
    else{
        h2.innerHTML = `Game Over!Your score was <b>${level}</b>. Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#ffffff";
        },200);
        reset();
    }    

}
function btnPress(){
   let btn = this;
   userBtnFlash(btn);
   userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    let idx = userSeq.length - 1;
    check(idx);
}
let buttons = document.querySelectorAll(".btn");
for(btn of buttons){
    btn.addEventListener("click",btnPress);
}
function reset(){
    gameSeq = [];
    userSeq = [];
    start = false;
    level = 0;
}