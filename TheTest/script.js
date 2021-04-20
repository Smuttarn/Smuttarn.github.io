

//Testing jQuery
var hasClicked = false;
$("#testButton").click(function(){
    if(hasClicked){
        $("#test").text("Something");
        hasClicked = false;
        return;
    }

    $("#test").text("Nothing");
    hasClicked = true;
})




var canvas = $("#playCanvas");