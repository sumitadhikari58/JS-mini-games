// let h1 = document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             if (num > 3)
//                 reject("error")
//             h1.style.color = color;
//             resolve("Color changed to " + color);
            
//         }, delay);
//     });
// }
// async function demo() {
//     try{
//     await changeColor("red",1000);
//     await changeColor("yellow",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// changeColor("red",1000).then((result) => {
//     console.log(result);
//     return changeColor("blue",1000);
// })
// .then((result) => {
//     console.log(result);
//     return changeColor("green",1000);
// })
// .catch((error) => {
//     console.error("Error changing color: " + error);
// });
// // // changeColor("red",1000,function(){
// //     changeColor("blue",1000,function(){
// //         changeColor("green",1000,function(){
// //             changeColor("orange",1000,function(){
// //                 changeColor("purple",1000,function(){
// //                     changeColor("black",1000);
// //                 });
// //             });
// //         });
// //     });
// // });
// // function savetoDB(data){
   
// //     return new Promise((resolve,reject)=>{ 
// //         let speed = Math.floor(Math.random()*10) + 1;
// //         if(speed <= 7){
// //             resolve("Data saved successfully!");
// //         }
// //         else{
// //             reject("Failed to save data.");
// //         }
// // });
// // }
// // let request = savetoDB("Hello, World!")
// // request.then((resolve)=>{
// //     console.log("Data saved successfully!");
// //     console.log(resolve);
// //     return savetoDB("Another data");
// // })
// // .then((resolve)=>{
// //     console.log("Second data saved successfully!");
// //     console.log(resolve);
// // })
// // .catch((error)=>{
// //     console.error("Failed to save data.");
// //     console.error(error);
// // });
// // // savetoDB("Hello, World!",()=>{
// // //     console.log("Data saved successfully!");
// // //     savetoDB("Another data",()=>{
// // //         console.log("Second data saved successfully!");
// // //     },()=>{
// // //         console.log("Failed to save second data.");
// // //     });
// // // },()=>{
// // //     console.log("Failed to save data.");
// // // });
// async function greet(){
//     return "hello";
    
// }
// greet()
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>
// {
//     console.log(err);
// })
// function getNum (){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         let num = Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve()
//        },1000); 
//     });
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
// }
// demo();
let data = 
  '{"fact": "If your cat snores, or rolls over on his back to expose his belly, it means he trusts you.","length": 90}'
  let valid = JSON.parse(data);
  console.log(valid.fact)
  let student = {
    "class" : 9,
    "name" : "sumit"
  }
