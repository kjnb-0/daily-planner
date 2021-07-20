$(document).ready(function () {
  //add current day/time
  var rightNow = moment().format("dddd, MMMM Do");
  $("#currentDay").text(rightNow);

  function scheduleEvent() {
    //i is hours of the day - only cycle through these
    for (i = 9; i <= 17; i++) {
      //variables
      var row = $("<div class='row'></div>");
      var hour = $("<div class='hour col-1'></div>");
      //added backticks to make a string to use i for unique ids for each timeblock
      var timeblock = $(
        `<textarea type='text' class='col-9' id='${i}'></textarea>`
      );
      var saveBtn = $(
        `<button class='saveBtn col-1' id='button${i}'>Save</button>`
      );

      var currentHour = moment().format("HH");
      var hourBlock = i;

      //add elements in - YAY fixed column size
      $(".container").append(row);
      row.append(hour);
      //display in 12hr am/pm format
      hour.text(moment(i, "hh").format("hh a"));
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
  }
  scheduleEvent();

  $(".container").on("click", "button", function () {
    console.log("testing clicking");
    console.log(this);
    var button = $(this);
    //find button id
    var buttonid = button.attr("id");
    //split button id to remove 'button' and just get id number to match with timeblock id number
    var timeblockid = buttonid.split("button")[1];
    console.log(timeblockid);
    //remove 'button'
    var textarea = $("#" + timeblockid);
    //match button id to timeblock id
    console.log(textarea);
    //get input from matching timeblock
    var input = textarea.val();
    console.log(input);
    //save that string to local storage
    localStorage.setItem("event", input);
    //store multiple events????????? - not just 1 overriding the others
    //save on refresh
    //read from local storage on page load, if it has value, plug in
  });
});
