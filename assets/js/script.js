// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.
// Persist events between refreshes of a page


// displays current day at top of calendar
var currentDate = moment(); // 24 March 2023
$("#currentDay").text(currentDate.format("dddd Do MMMM YYYY")).css('color','orange')


// Present timeblocks for standard business hours when the user scrolls down.
var businessHours = 8

for (i=0; i<businessHours; i++) {
    $( "#9" ).clone().appendTo( ".container" );
}