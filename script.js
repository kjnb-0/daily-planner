//adding current day/time
var rightNow = moment().format("dddd, MMMM Do");
$("#currentDay").text(rightNow);


function scheduleEvent() {
  //i is hours of the day - only cycle through these
  for (i = 9; i <= 17; i++) {
    //variables
    var row = $("<div class='row'></div>");
    var hour = $("<div class='hour'></div>");
    var timeblock = $("<textarea type='text'></textarea>");
    var button = $('<button class="saveBtn">Save</button>');
    //add elements in - why are the rows so small??
    $(".container").append(row);
    row.append(hour);
    hour.text(moment(i, "h").format("hh a"));
    row.append(timeblock);
    row.append(button);
    //format for past,present,future
    var currentHour = moment().format("hh");
    var hourBlock = i;
    if (hourBlock > currentHour) {
      timeblock.addClass("future");
    } else if (hourBlock < currentHour) {
      timeblock.addClass("past");
    } else {
      timeblock.addClass("present");
    }
  }
}
scheduleEvent();

//event is saved in local storage

//$(".saveBtn").click(function () {})
