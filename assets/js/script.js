// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.
// Persist events between refreshes of a page


// displays current day at top of calendar
var currentDate = moment(); // 24 March 2023
$("#currentDay").text(currentDate.format("dddd Do MMMM YYYY")).css('color','orange')

var currentTime = moment();
console.log(currentTime)

// Present timeblocks for standard business hours when the user scrolls down.
var businessHours = 8
for (i=0; i<businessHours; i++) {
    $( "#0" ).clone().appendTo( "#timeBlockContainer" ).attr("id", "0"+(i+1)).children().eq(0).children().eq(0).attr("id",i+1);
}

var time0 = moment("9","h a");
$('#t0').text(time0.format("h a"))
colorCode(time0, "#0") 

var time1 = moment("10","h a");
$('#1').text(time1.format("h a"))
colorCode(time1, "#1")

var time2 = moment("11","h a");
$('#2').text(time2.format("h a"))
colorCode(time2, "#2")

var time3 = moment("12","h a");
$('#3').text(time3.format("h a"))
colorCode(time3, "#3")

var time4 = moment("13","h a");
$('#4').text(time4.format("h a"))
colorCode(time4, "#4")

var time5 = moment("14","h a");
$('#5').text(time5.format("h a"))
colorCode(time5, "#5")

var time6 = moment("15","h a");
$('#6').text(time6.format("h a"))
colorCode(time6, "#6")

var time7 = moment("16","h a");
$('#7').text(time7.format("h a"))
colorCode(time7, "#7")

var time8 = moment("17","h a");
$('#8').text(time8.format("h a"))
colorCode(time8, "#8")


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function colorCode(time, block) { // block = the row id
if (currentTime.isBefore(time)) {
    $(block).children().eq(1).addClass("future")
    console.log(time + "," + block+ ":" + currentTime + "future")
} else if (currentTime.isAfter(time)) {
    $(block).children().eq(1).addClass("past")
    console.log(time + ":" + currentTime + "past")
} else {
    $(block).children().eq(1).addClass("present")
    console.log(time + ":" + currentTime + "now")
// $(block).children().eq(1).addClass("present") //correct targeting
console.log(time)
}
}

var textArea = document.querySelectorAll("textarea")
var textInput = textArea.value

// Save the event in local storage when the save button is clicked in that timeblock.
var saveBtn = $('.saveBtn')
saveBtn.on('click', function() {
    console.log('saveBtn')
    localStorage.setItem("to-do",textInput)
    console.log(localStorage.getItem("to-do"))
}
)