let appearingImage1 = document.getElementById("hey");
let appearingImage2 = document.getElementById("bubble-hollander");
let buttonImage = document.getElementById("weather-button");

let environmentTitle = "Up in the Sky";

let environmentElements = ["clouds", "warm sky", "sunset", "flying people"];

let mainEntity = {
    name: "Plane Hollander",
    mood: "confused",
    isMoving: true,
    favoriteElement: environmentElements[1]
};


$("#super").click(function () {

    console.log("prime is clicked");
    appearingImage1.src = "bubble-prime.png";
    appearingImage1.style.width = "140px";
    appearingImage1.style.height = "auto";


})


$("#hollander img").click(function () {

    console.log("hollander is clicked");
    appearingImage2.style.display = "block";

})

buttonImage.addEventListener("click", function() {

    let userInput = prompt("Prime here, how about a change of scenery? You want noon, sunset, or night?");
    let keyword = userInput ? userInput.toLowerCase() : "";

    if (keyword === "noon") {
        document.body.style.backgroundImage = "url('Noon.jpeg')";

    } else if (keyword === "sunset") {
        document.body.style.backgroundImage = "url('Sunset.jpg')";

    } else if (keyword === "night") {
        document.body.style.backgroundImage = "url('Night.jpeg')";

    } else {
        alert("Yeah... I got no idea what that means. Try 'noon', 'sunset', or 'night'.");
    }

});


