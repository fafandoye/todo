const { listenerCount } = require("process");

//SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.queryselector(".todo-button");
const todoList = document.queryselector(".toda-list");

//ECOUTEURS
todoButton.addEventListener("click",addTodo);


//FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    //todo DIV;
    const todoDiv = document.createElement("div");

    todoDiv.classList.add("Todo");
      //créer le li;
      const newodo.createElement("li");
      newTodo.innerTText ="hey";
      newTodo.classList.add("todo-items");
      todoDiv.appendChild(newTodo);
      //Button Check
      const completeButton =document.createElement("button");
      completeButton.innerHTML ='< class="fa-solid fa-check"></i>'
      completeButton.classList.add("complete-btn");
      todoDiv.appendChild(completeButton);
      /AJOUTER NOTRE TODO A TODO-LIST
      todo-list.appendChild(todoDiv);




}

