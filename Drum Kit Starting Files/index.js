for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  switch (buttonInnerHTML) {
    case "w":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("./sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("./sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("./sounds/kick.mp3").play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

document.addEventListener("keypress", function (event) {
  console.log(event);
});

function makeSound(key)
