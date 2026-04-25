
let count=0;

let colors=["TEAL", "NAVY", "INDIGO","FUCHSIA"];

let colorCount;

let pencil={
    color: "blue",
    isSharp: true,
}

$("#needy-button") .click( function() {

    count = count + 1;

    colorCount=count-1;

$("#needy-button") .html("You clicked me " + count + " times! Stop! Or I will turn you " + colors[colorCount] );

$("#needy-button").css("background-color", colors[colorCount]);

$("html").css("background-color", colors[colorCount]);

});