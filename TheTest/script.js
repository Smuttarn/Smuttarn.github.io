var clicks = 0;
var hasClicked = true;
var timestamp;

$("#redButton").click(function(){
    clicks++;
    clickCheck();
})

window.onload = function(){
    getTimestamp();
}

function getTimestamp(){
    timestamp = Date.now();
}

function changeText(text){
    $("#feedbackText").text(text);
}

function milliToSec(millis){
    return Math.floor(millis/1000);
}

function getWastedTime(){
    var output = Date.now() - timestamp;
    alert(output);
    return milliToSec(output);
}

function clickCheck(){

    switch(clicks){
    case 1: case 3: case 7:
        changeText("Something");
        break;
    case 2: case 4: case 8:
        changeText("Nothing");
        break;
    case 5:
        changeText("What are you doing?");
        break;
    case 6:
        changeText("...");
        break;
    case 9:
        changeText("I mean...");
        break;
    case 10:
        changeText("...what are you trying to accomplish?");
        break;
    case 11:
        changeText("You've already wasted " + getWastedTime() + " seconds of your life here.")
    }
}




var canvas = $("#playCanvas");