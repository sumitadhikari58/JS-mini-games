// let url = "https://catfact.ninja/fact"
// // fetch(url)
// // .then((req)=>{
// //     return req.json()
// // })
// // .then((res)=>{
// //     console.log(res.fact)
// // })
// // .catch((err)=>{
// //     console.log(err);
// // })
// async function getFacts() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
    
// }
// let btn = document.querySelector("button")
// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector(".result");
//     p.innerHTML = fact;
// })
// async function getFacts() {
//     try{
//     let res = await axios.get(url);
//     return res.data.fact;
//     }
//     catch(e){
//         console.log(e);
//         return "NO FACT";
//     }

    
// }
// async function getfact() {
//     try{
//         const header = {headers: {Accept:"application/json"}}
//         let res = await axios.get(url,header);
//         console.log(res);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button")
btn.addEventListener("click",async()=>{
    let value = document.querySelector("input").value;
    console.log(value);
    let res=await getCollege(value);
    SharedWorker(colArr);
})
function show(colArr){
    let list = document.querySelector("#list");
    list.innerText = ""
    for(col of colArr){
        console.log
    }
}
async function getCollege(country) {
    try{
        let cty = await axios.get(url+country); 
        return resizeBy.data;
    }
    catch(err){
        console.log(err);
    }
    
}