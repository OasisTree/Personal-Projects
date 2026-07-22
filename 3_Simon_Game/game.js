let level = 0;
let highestLevel = 0;
let defaultColorSequence = [];
let userColorSequence = [];
let ctr = 0;
const colors = ["green", "red", "yellow", "blue"];

$("body").keypress(function () {
  start();
});

function start() {
  userColorSequence = [];
  defaultColorSequence = [];
  ctr = 0;
  level = 0;
  $("body").off("keypress");
  generateLevel();
}

function generateLevel() {
  level++;
  ctr = 0;
  userColorSequence = [];
  generateRandomSequence();
  setTimeout(() => {
    $("#level-title").text(`Level ${level}`);
  }, 400);
  displaySequence();
}

function generateRandomSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  defaultColorSequence.push(randomNumber);
}

function displaySequence() {
  const color = colors[defaultColorSequence[level - 1]];
  setTimeout(() => {
    $("#" + color)
      .fadeOut(100)
      .fadeIn(100);
  }, 800);
  getUserSequence();
}

function getUserSequence() {
  $(".btn")
    .off()
    .click(function () {
      const color = $(this).attr("id");
      animateClass(this, "pressed");
      playSound(color);
      userColorSequence.push(colors.indexOf(color));
      checkSequence();
    });
}

function checkSequence() {
  if (userColorSequence[ctr] !== defaultColorSequence[ctr]) {
    gameOver();
  } else {
    ctr++;
    if (ctr === defaultColorSequence.length) {
      generateLevel();
      updateHighestLevel();
    }
  }
}

function gameOver() {
  playSound("wrong");
  $("#level-title").text("Game Over, Press Any Key to Restart");
  animateClass("body", "game-over");
  $("body").keypress(function () {
    start();
  });
}

function animateClass(element, className) {
  $(element).addClass(className);
  setTimeout(() => {
    $(element).removeClass(className);
  }, 100);
}

function playSound(color) {
  const audio = new Audio(`./sounds/${color}.mp3`);
  audio.play();
}

function updateHighestLevel() {
  setTimeout(() => {
    if (level > highestLevel) {
      highestLevel = level;
      $("#highest-level").text(`Highest Level: ${level}`);
    }
  }, 400);
}
