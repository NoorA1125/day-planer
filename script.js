var today = document.querySelector("#currentDay");
var textArea = document.querySelector(".description");
var container = document.querySelector(".container");
hour = 9;
var timeBlock;
var saveButton = document.querySelector(".btn");


today.textContent = moment().format("dddd MMMM Do YYYY h:mm a");
saveButton.addEventListener("click", saveTask);

//When the button is pressed - save to local storage
textArea.value = localStorage.getItem('Things to do');
function saveTask() {
    localStorage.setItem('Things to do',textArea.value);
};