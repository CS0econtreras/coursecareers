function addTodo() {
    const todoElement = document.getElementById("new-todo");
    const todo = todoElement.value; 
    todoElement.value = "";
    if (todo.length < 3) {
        return alert("You must have at least 3 characters for your TODO")
    }
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);
    //we set onclick to the this element that was clicked and removed
    li.setAttribute("onclick", "this.remove()");
    //this li apends the text which is a text node we created witht he user input todo
    li.appendChild(text);
    //then we append the li into the list we got by id from the html
    list.appendChild(li);
}