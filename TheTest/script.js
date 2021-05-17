var clicks = 0;
var hasClicked = false;
var timestamp;




$("#redButton").click(function(){
    clicks++;
    clickCheck();
})

window.onload = function(){
    getTimestamp();
    //changeText("Nothing");

    openingScene();
}


function openingScene(){
    $("#redButton").hide();
    $("#feedbackText").hide();

    $("#redButton").fadeIn(3000, function(){
        $("#feedbackText").fadeIn(2000, function(){
            $(this).text("Nothing");
        });
    });
}


function disableButton(){
    $("#redButton").css("background-color", "red");
    $("#redButton").css("border", "7px solid darkgray");
}

function enableButton(){
    $("#redButton").css("background-color", "gray");
    $("#redButton").css("border", "10px solid darkgray");
}



function changeText(text){
    $("#feedbackText").fadeOut(500, function(){
        disableButton();
        $(this).text(text);
    }).fadeIn(800, enableButton());
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
    case 2: case 4: case 6: case 12:
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
    }
}




var canvas = $("#playCanvas");