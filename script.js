var today = document.querySelector("#currentDay");
var container = document.querySelector(".container");
var currentHour = moment().format("H");
var $timeSlots = document.querySelector("#time-slots");
//var startButton = document.querySelector("#startButton");


today.innerHTML = moment().format("dddd MMMM Do YYYY h:mm:ss a");

//***** Code for dynamically doing it */
for (let i = 8; i <= 17; i++) {
    $timeSlots.append(buildTimeSlot(i));
    $timeSlots.innerHTML = currentHour;
    
}
function buildTimeSlot(hour) {
    // if statements showing past, present and future in differnet colors
    var background = "background-color";
    if (currentHour === hour) {
      background = "present";
    } else if (currentHour > hour) {
      background = "past";
    } else {
      background = "future";
    }
    // actual js code building html
    var $timeSlots = $("<div>")
      .addClass("row time-block")
      .attr("id", `hour-${hour}`);
    var $hour = $("<div>").addClass("col-md-1 hour").text(hour);
    var $textArea = $("<textarea>").addClass(
      "col-md-10 description " + background
    );
    var $button = $("<button>")
      .addClass("btn saveBtn col-md-1")
      //fas and fas-save is the save btn icon
      .append($("<i>").addClass("fas fa-save"));
    //appending the code to the page
    return $timeSlots.append($hour, $textArea, $button);
  }




// function createCalender() {
//     container = document.querySelector(".container");
//     var timeBlock = document.createElement("div");
//     timeBlock.id = "hour-1";
//     timeBlock.class = "row time-block";
//     var hour = document.createElement("div");
//     hour.class = "col-md-1 hour";
//     timeBlock.appendChild(hour);
//     //hour.innerHTML = moment().format(hh); (from 12AM - 12PM only)
//     container.appendChild(timeBlock);
//     draw();
// }

// function draw() {
//     // (C1) QUESTION
//     timeBlock.innerHTML = "";

//     // (C2) OPTIONS
//     container.innerHTML = "";
//     container = document.querySelector("#container");
//     for (let i in hour) {
//         let radio = document.createElement("input");
//         radio.type = "radio";
//         radio.name = "quiz";
//         radio.id = "quizo" + i;
//         container.appendChild(radio);
//         let label = document.createElement("label");
//         label.innerHTML = quiz.data[now].o[i];
//         label.setAttribute("for", "quizo" + i);
//         label.dataset.idx = i;
//         label.addEventListener("click", select);
//         container.appendChild(label);
//     }
// };

// createCalender();
window.addEventListener("load", buildTimeSlot());