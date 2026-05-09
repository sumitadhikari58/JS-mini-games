const tasks=[];
function render(){
const ul = document.getElementById('todo-list')
tasks.forEach(function(task,index){
    const li = document.createElement('li');
    li.innerHTML = `
    <input type="checkbox" ${task.done ? 'checked' : ''}>
    <span>${task.text}</span>
    <button>Delete</button>
    `;
    ul.appendChild(li);
});
}
let addbtn = document.getElementById('add');
addbtn.addEventListener("click",()=>{
    addTask();
})
function addTask(){
    const read = document.getElementById('tasks').value;
    if(!read) return;
    tasks.push({
        text : read,
        done : false
    })
    document.getElementById('tasks').value = '';
    render();
}