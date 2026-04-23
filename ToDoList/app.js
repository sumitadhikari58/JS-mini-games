let btn = document.querySelector('button')
let ul = document.querySelector("ul")
let input = document.querySelector("input")
btn.addEventListener("click",function(){
    let item = document.createElement("li")
    item.innerText = input.value
    let dltBtn = document.createElement("button")
    dltBtn.innerText = "Delete"
    item.appendChild(dltBtn)
    console.log(input.value)
    ul.appendChild(item)
    input.value = ""
})
ul.addEventListener("click",function(e){
    if(e.target.nodeName === "BUTTON"){
        e.target.parentElement.remove()
    }
})