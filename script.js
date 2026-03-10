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
}

function deleteItem(event) {
    event.target.parentElement.remove();
}

function handleKeypress(event) {
    if (event.key === "Enter") Add();
}