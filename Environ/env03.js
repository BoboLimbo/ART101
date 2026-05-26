let appearingImage1 = document.getElementById("hey");
let appearingImage2 = document.getElementById("bubble-hollander");

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

