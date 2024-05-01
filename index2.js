let input = document.querySelector(".todo")
let todos = document.querySelector(".todos")
let checkbox = document.querySelector("#checkbox")
let id = 0;

function createTodo(checked, todoName) {
    let model = `<li>
        <label for="check${id}">
            <img src="/images/icon-check.svg" />
            <input type="checkbox" id="check${id}" ${checked==true?"checked":""}/>
        </label>
        <p>${todoName}</p>
        <img src="/images/icon-cross.svg" class="close" />
    
        </li>`
    id++
    todos.innerHTML += model;
    input.value = ""
}


input.addEventListener("dblclick", () => createTodo(checkbox.checked, input.value));

