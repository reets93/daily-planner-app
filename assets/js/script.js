// displays current day at top of calendar
var currentDate = moment(); // 24 March 2023
$("#currentDay").text(currentDate.format("dddd Do MMMM YYYY")).css('color', 'blue')

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
    if (currentTime.isBetween(time, endTimeSlot, 'minutes', []) === true) {
    // if (time < currentTime > endTimeSlot) {
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
var saveBtn = $('.saveBtn')

function save(button, key, ta) {
    $(button).on('click', function () {
        console.log(button)
        localStorage.setItem(key, $(ta).val())
    })
}

save("#save0","item0","#ta0")
save("#save1","item1","#ta1")
save("#save2","item2","#ta2")
save("#save3","item3","#ta3")
save("#save4","item4","#ta4")
save("#save5","item5","#ta5")
save("#save6","item6","#ta6")
save("#save7","item7","#ta7")
save("#save8","item8","#ta8")
