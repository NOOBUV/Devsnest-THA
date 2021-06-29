const input = document.querySelector("input");
const btn = document.querySelector(".addbtn");
const todocontainer = document.querySelector(".tdcont");
// const del=document.querySelectorAll(".del");
var todos = localStorage.getItem("todos");
// var arrdell=document.querySelectorAll(".del");
// console.log(todos)
// const name;
var del;
if (todos===null) {
  todos = [];
  localStorage.setItem("todos", JSON.stringify(todos));
} else {
    todos=JSON.parse(localStorage.getItem("todos"));
    loadTodo();

    del=document.querySelectorAll(".del");
}
function loadTodo() {
  JSON.parse(localStorage.getItem("todos")).map((todo,index) => {
    const newtodo = document.createElement("div");
    newtodo.classList.add("newtodo");
    todocontainer.appendChild(newtodo);
    newtodo.innerHTML = `<div class="todotext">${todo.title}</div>
        <button class="del">Del</button>`
        // let indexs=index;
  });
}

// function del() {
//     console.log(this)
//     // todos.splice(indexs,1);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }
del.forEach(deletedbtn => {
    deletedbtn.addEventListener("click",(e) =>{ 
        console.log(e.target);
        const name=e.target.parentElement.firstChild.innerHTML;
        todos=todos.filter((todo) => {
            todo.title != name;
        })
        localStorage.setItem("todos", JSON.stringify(todos));
        // e.target.parentElement.remove();

    });
    

});
btn.addEventListener("click", () => {
    if (input.value!=""){
        const newtodo = document.createElement("div");
        newtodo.classList.add("newtodo");
        newtodo.innerHTML = `<div class="todotext">${input.value}</div>
        <button class="del">Del</button>`
        todocontainer.appendChild(newtodo);
        // const tempval=input.value;
        let temp = {
            title: input.value,
            done: false,
        };
        // console.log(todos)
        todos.push(temp);
        console.log(todos);
        input.value = "";

        localStorage.setItem("todos", JSON.stringify(todos));
        newtodo.addEventListener("click", (e) => {
            console.log(e.target);
            // delete e.target.parentElement.remove();
            todos=todos.filter((todo) => {
                todo.title != name;
            })
            localStorage.setItem("todos", JSON.stringify(todos));
            const name=e.target.parentElement.firstChild.innerHTML;
        })
    }
    input.value = "";
    // del=document.querySelectorAll(".del");
  
});

const newTodo = localStorage.getItem("todos");
