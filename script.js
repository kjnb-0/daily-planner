//adding current day/time
  const rightNow = moment().format("dddd, MMMM Do");
  $("#currentDay").text(rightNow);



var time = [8,9,10,11,12,13,14,15,16,17]
var hourNow = moment().format('HH');
console.log(hourNow)
var classIndex = time.indexOf(hourNow);
console.log(classIndex)

function formatTime() {
    for (let i=8;i<=17;i++){ 
        let timeBlock = i;
    if(timeBlock == hourNow){
        $input.addClass('present')
    } else if (timeBlock < timeNow){
        input.addClass('past')
    } else {
        input.addClass('future')
    }
}}


var row = $('<div class="row">')

//add timeblocks w/ color coding past present future

function scheduleEvent() {}
    

scheduleEvent();

//enter event into timeblock

//save button in timeblock
//need to actually add the button .saveBtn (from css file)

//event is saved in local storage
//$(".saveBtn").click(function () {})
