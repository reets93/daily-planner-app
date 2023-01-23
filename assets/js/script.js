// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.
// Persist events between refreshes of a page


// displays current day at top of calendar
var currentDate = moment(); // 24 March 2023
$("#currentDay").text(currentDate.format("dddd Do MMMM YYYY")).css('color', 'orange')

var currentTime = moment();
var currentHour = moment().format("h a")
var currentMinute = moment().format("mm")
console.log(currentTime + " ; " + currentHour + " ; " + currentMinute)

// Present timeblocks for standard business hours when the user scrolls down.
var businessHours = 9;
// for (i = 0; i < businessHours; i++) {
//     $("#0").clone().appendTo("#timeBlockContainer").attr("id", "0" + (i + 1)).children().eq(0).children().eq(0).attr("id", i + 1);
// }

var time0 = moment("9", "h a");
$('#t0').text(time0.format("h a"))
colorCode(time0, "#0")
$('#ta0').text(localStorage.getItem("item0"))


var time1 = moment("10", "h a");
$('#1').text(time1.format("h a"))
colorCode(time1, "#01")
$('#ta1').text(localStorage.getItem("item1"))


var time2 = moment("11", "h a");
$('#2').text(time2.format("h a"))
colorCode(time2, "#02")
$('#ta2').text(localStorage.getItem("item2"))


var time3 = moment("12", "h a");
$('#3').text(time3.format("h a"))
colorCode(time3, "#03")
$('#ta3').text(localStorage.getItem("item3"))

var time4 = moment("13", "h a");
$('#4').text(time4.format("h a"))
colorCode(time4, "#04")
$('#ta4').text(localStorage.getItem("item4"))

var time5 = moment("14", "h a");
$('#5').text(time5.format("h a"))
colorCode(time5, "#05")
$('#ta5').text(localStorage.getItem("item5"))

var time6 = moment("15", "h a");
$('#6').text(time6.format("h a"))
colorCode(time6, "#06")
$('#ta6').text(localStorage.getItem("item6"))

var time7 = moment("16", "h a");
$('#7').text(time7.format("h a"))
colorCode(time7, "#07")
$('#ta7').text(localStorage.getItem("item7"))

var time8 = moment("17", "h a");
$('#8').text(time8.format("h a"))
colorCode(time8, "#08")
$('#ta8').text(localStorage.getItem("item8"))


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function colorCode(time, block) { // block = the row id
    var endTimeSlot = time.add(59, 'm')
    // if (currentTime.isBetween(time, endTimeSlot, 'minutes', []) === true) {
        if (time < currentTime > endTimeSlot) {
        $(block).children().eq(1).addClass("present")
        console.log(time + ":" + currentTime + "now" + " endTimeSlot: " + endTimeSlot)
    } else {
        if (currentTime.isBefore(time)) {
            $(block).children().eq(1).addClass("future")
            console.log(block + ":" + "future")
        } else if (currentTime.isAfter(time)) {
            $(block).children().eq(1).addClass("past")
            console.log(block + ":" + "past")
        }
    }
}



// Save the event in local storage when the save button is clicked in that timeblock.

$('#save0').on('click', function() {
    console.log("save0");
    localStorage.setItem("item0", $('#ta0').val())
}
 )

 $('#save1').on('click', function() {
    console.log("save1");
    localStorage.setItem("item1", $('#ta1').val())
}
 )

 $('#save2').on('click', function() {
    console.log("save2");
    localStorage.setItem("item2", $('#ta2').val())
}
 )

 $('#save3').on('click', function() {
    console.log("save3");
    localStorage.setItem("item3", $('#ta3').val())
}
 )

 $('#save4').on('click', function() {
    console.log("save4");
    localStorage.setItem("item4", $('#ta4').val())
}
 )

 $('#save5').on('click', function() {
    console.log("save5");
    localStorage.setItem("item5", $('#ta5').val())
}
 )

 $('#save6').on('click', function() {
    console.log("save6");
    localStorage.setItem("item6", $('#ta6').val())
}
 )

 $('#save7').on('click', function() {
    console.log("save7");
    localStorage.setItem("item7", $('#ta7').val())
}
 )

 $('#save8').on('click', function() {
    console.log("save8");
    localStorage.setItem("item8", $('#ta8').val())
}
 )

 $('#save9').on('click', function() {
    console.log("save9");
    localStorage.setItem("item9", $('#ta9').val())
}
 )


