let btn = document.querySelector('button')
// let bg = document.querySelector('div')
// let color = Math.floor(Math.random()*10)
// console.log(color)
// function change(color){
//     if(color < 4){
//         b
//     }

// }
// btn.onclick = change
btn.addEventListener("click",function(e){
    console.log(e)
    console.log(this);
    this.style.backgroundColor = "blue"
});
let inp = document.querySelector("input")
btn.addEventListener("keyup",function(e){
    console.log("Hello");
});