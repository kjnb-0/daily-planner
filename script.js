
$(document).ready(function () {

//add current day/time
var rightNow = moment().format("dddd, MMMM Do");
$("#currentDay").text(rightNow);

function scheduleEvent() {
  //i is hours of the day - only cycle through these
  for (i = 9; i <= 17; i++) {
    //variables
    var row = $("<div class='row'></div>");
    var hour = $("<div class='hour'></div>");
    var timeblock = $("<textarea type='text' id='timeblock' class='col-10'></textarea>");
    var saveBtn = $("<button class='saveBtn' id='saveBtn'>Save</button>");
    var currentHour = moment().format("HH");
    var hourBlock = i;


    //add elements in - YAY fixed column size 
    $(".container").append(row);
    row.append(hour);
    //display in 12hr am/pm format
    hour.text(moment(i,"h").format("hh a"));
    row.append(timeblock);
    row.append(saveBtn);
    //format for past,present,future
    //need 24hr time to compare 
    if (hourBlock > currentHour) {
      timeblock.addClass("future");
    } else if (hourBlock < currentHour) {
      timeblock.addClass("past");
    } else {
      timeblock.addClass("present");
    }
  }

  //event is saved in local storage
  $(saveBtn).click(function () {
    ////????
    var userEvent = $("#timeblock").val();
    alert(userEvent)
console.log(userEvent);
    //localStorage.setItem("event", );
  });
}
scheduleEvent();
})