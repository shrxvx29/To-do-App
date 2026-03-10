var input = document.getElementById("input");
var list = document.getElementById("list");

function Add() {
    if (input.value === "") {
        alert("Please add a task!");
        return;
    }
    var listitem = document.createElement("li");
    listitem.innerHTML = input.value + "<button onclick='deleteItem(event)'>Delete</button>";
    list.append(listitem);
    input.value = "";
    input.focus();
        savetasks();

}
window.onload = function() {
    if (localStorage.getItem("tasks")) {
        list.innerHTML = localStorage.getItem("tasks");
    }
}
function savetasks(){
    localStorage.setItem("tasks", list.innerHTML);
}

function deleteItem(event) {
    event.target.parentElement.remove();
    savetasks();
}

function handleKeypress(event) {
    if (event.key === "Enter") Add();
}