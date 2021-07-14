//adding current day/time
var rightNow = moment().format("dddd, MMMM Do");
$("#currentDay").text(rightNow);

// var time = [8,9,10,11,12,13,14,15,16,17]
// var hourNow = moment().format('HH');
// console.log(hourNow)
// var classIndex = time.indexOf(hourNow);
// console.log(classIndex)

function formatTimes() {
  //i is hours of the day - only cycle through these
  for (i = 9; i <= 17; i++) {
    $row = $(`<div class= "row">`);
    $hour = $(`<div class = "hour">`);

    $hour.text(moment(i, "h").format("hh a"));
//text area to enter event in each row
    $event = $(`<textarea type='text' name='eventText'></textarea>`);
//make the save button
    $button = $(`<button class= "saveBtn" data-id='${i}'>Save</button>`);
//add
    $(".container").append($row);
    $($row).append($hour);
    $($row).append($event);
    $($row).append($button);
  }
}
formatTimes();

//add timeblocks w/ color coding past present future

// function scheduleEvent() {}
// scheduleEvent();

//enter event into timeblock

//save button in timeblock
//need to actually add the button .saveBtn (from css file)

//event is saved in local storage
//$(".saveBtn").click(function () {})
