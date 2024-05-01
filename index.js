let ul = document.querySelector("ul")
let items = document.querySelector(".items")
let itemsCount = 0
items.innerHTML = itemsCount + " items left"
let id = 0

function addTodo(checked, name) {
    console.log(checked, name)
    let newEl = document.createElement("li")
    let checkbox = document.createElement("input")
    let label = document.createElement("label")
    label.setAttribute("for", "check"+id)
    label.classList.add("checkbox")
    // <label for="check" class="checkbox">
    //   </label>
    checkbox.setAttribute("type", "checkbox")
    checkbox.id = "check"+id
    id++
    checkbox.checked = checked
    let p = document.createElement("p")
    let img = document.createElement("img")
    img.setAttribute("src", "/images/icon-check.svg")
    p.innerText = name;
    if (checked == true) {
        p.style.textDecoration = "line-through";
    }

    label.append(img );
    newEl.append(label,checkbox, p);
    ul.appendChild(newEl);
    itemsCount++

    items.innerHTML = itemsCount + " items left"
}



let input = document.querySelector(".input-text")
console.log(input)
input.addEventListener("dblclick", () => {
    let checkbox = document.querySelector("#check")
    let ul = document.querySelector("ul")
    addTodo(checkbox.checked, input.value)

})