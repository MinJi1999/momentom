const character = document.getElementById("character");
const ghost = document.querySelector("#ghost");
const franken = document.querySelector("#green");
const pumkin = document.querySelector("#orange");
const fabric = document.querySelector("#white");
const friday = document.querySelector("#grey");
const gameScore = document.getElementById("gameScore");
const whiteBtn = document.getElementById("character-change-btn-white");
const greyBtn = document.getElementById("character-change-btn-grey");
const orangeBtn = document.getElementById("character-change-btn-orange");
const greenBtn = document.getElementById("character-change-btn-green");
const btnContainer = document.getElementById("btn-container1");
const btnContainer2 = document.getElementById("btn-container2");
const gameConsole = document.getElementById("game-console");
const neonContainer = document.getElementById("neonContainer");
const noNeonBtn = document.getElementById("noBtn");
const playNeonBtn = document.getElementById("playBtn");

let count = 0;
gameConsole.style.display = "flex";
neonContainer.style.display = "flex";
let selectedGhostElement = "";

askQuestion();
function askQuestion(){
  if(gameConsole.style.display === "flex"){
    gameConsole.style.display = "none";
  }
}
function removeAlert(){
  neonContainer.style.display = "none";
  gameConsole.style.display = "flex";
}

playNeonBtn.addEventListener("click", removeAlert);
noNeonBtn.addEventListener("click", ()=>{
  return history.back();
  }
)

function btn(btn, ghost) {
  btn.addEventListener("click", function () {
    ghost.style.display = "block";
    intervalCheckDead(ghost);
    selectedGhostElement = ghost;
  });
}
btn(greyBtn, friday);
btn(orangeBtn, pumkin);
btn(whiteBtn, fabric);
btn(greenBtn, franken);

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(() => {
    character.classList.remove("animate");
  }, 350);
}

const checkDead = function (name) {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let ghostLeft = parseInt(
    window.getComputedStyle(name).getPropertyValue("left")
  );
  if (ghostLeft < 55 && ghostLeft > 0 && characterTop >= 280) {
    alert("You LOSE 🤣 score : " + count);
    count = 0;
    name.style.animation = "none";
    name.style.display = "none";
  } else if (name.style.display == "block") {
    count++;
    gameScore.innerHTML = `score : ${count}`;
  }
};

function intervalCheckDead(name) {
  setInterval(function () {
    checkDead(name);
  }, 10);
}

function restartGame() {
  selectedGhostElement.setAttribute("style", "display:block;");
}