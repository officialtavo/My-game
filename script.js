/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening");
let optionOneButton = document.querySelector(".option-one");
let optionTwoButton = document.querySelector(".option-two");
let optionThreeButton = document.querySelector(".option-three");
let optionFourButton = document.querySelector(".option-four");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionThreeScreen = document.querySelector(".option-three-screen");
let optionFourScreen = document.querySelector(".option-four-screen");
let buttons = document.querySelector(".buttons");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
optionOneButton.onclick = function() {
    opening.style.display = "none";
    optionTwoScreen.style.display = "block";
    buttons.style.display = "none";
    console.log("hi");
};


optionTwoButton.onclick = function() {
    opening.style.display = "none";
    optionOneScreen.style.display = "block";
    buttons.style.display = "none";

};

optionThreeButton.onclick = function() {
    optionOneScreen.style.display = "none";
    optionThreeScreen.style.display = "block";
    optionTwoScreen.style.display = "none";
};
optionFourButton.onclick = function() {
    optionOneScreen.style.display = "none";
    optionFourScreen.style.display = "block";
    optionTwoScreen.style.display = "none";
};