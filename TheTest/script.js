var clicks = 0;
var hasClicked = false;
var timestamp;




window.onload = function(){
    getTimestamp();
    openingScene();
}


function openingScene(){
    $("#redButton").hide();
    $("#feedbackText").hide();
    clickCheck();

    $("#feedbackText").fadeIn(3000, function(){
        $("#redButton").fadeIn(2000);
    });
}


$("#redButton").click(function(){
    clicks++;
    clickCheck();
})



$(document).ready(function(){
    $("#redButton").css("cursor", "pointer");
    buttonActive(true);
})

function buttonActive(status){
    if(status){
        $("#redButton").css("background-color", "red");
        $("#redButton").css("border", "7px solid darkgray");
    }
    else if(!status){
        $("#redButton").css("background-color", "gray");
        $("#redButton").css("border", "10px solid darkgray");
    }
}

function changeText(text){
    $("#feedbackText").fadeOut(500, function(){
        buttonActive(true);
        $(this).text(text);
    }).fadeIn(800, buttonActive(false));
}

function getTimestamp(){
    timestamp = Date.now();
}

function milliToSec(millis){
    return Math.floor(millis/1000);
}

function getWastedTime(){
    var output = Date.now() - timestamp;
    return milliToSec(output);
}

function clickCheck(){

    switch(clicks){
    case 1: case 3: case 7: case 11:
        changeText("Something");
        break;
    case 0: case 2: case 4: case 6: case 12:
        changeText("Nothing");
        break;
    case 5:
        changeText("What are you doing?");
        break;
    case 8:
        changeText("...");
        break;
    case 9:
        changeText("I mean...");
        break;
    case 10:
        changeText("...what are you trying to accomplish?");
        break;
    case 13:
        changeText("You've already wasted " + getWastedTime() + " seconds of your life..");
        break;
    case 14:
        changeText("Tbh, you ain't got much time.");
        break;


    }
}




var canvas = $("#playCanvas");