let toDo =[];
let req = prompt("Enter your action: ");
while(true){
    if(req == 'quit'){
        console.log("Quiting To Do");
        break;}
    if(req == 'lists'){
        console.log("To Do Lists are as follows :");
        for(list of toDo){
            console.log(list);
        }
        console.log("--------------");    
        req = prompt("Enter your action: ");

       
    }
    if(req == 'add'){
    let add = prompt("Enter the task u want to add");
    toDo.push(add);
    console.log("task added");
    req = prompt("Enter your action: ");
    }
    if(req == 'delete'){
        toDo.pop();
        console.log("Task removed");
        req = prompt("Enter your action: ");
    }
}
