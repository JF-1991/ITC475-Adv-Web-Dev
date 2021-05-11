// Global variables
var winner = "";
var loss = "";
var time = 0;

// Change light color from red to green
function startRace() {
  var neonStopLight = document.getElementById("stopLight");
  var neoneGoLight = document.getElementById("goLight");
  var checkBox = document.getElementById("checkBox");

  neonStopLight.style.display = "none";
  neoneGoLight.style.display = "block";
  checkBox.style.display = "none";
}

// Submit Racers
function submitRace() {
  var lightCycleRedVar = document.getElementById("lightCycleRed");
  var lightCycleBlueVar = document.getElementById("lightCycleBlue");
  var lightCycleGreenVar = document.getElementById("lightCycleGreen");
  var lightCycleOrangeVar = document.getElementById("lightCycleOrange");

  var checkBoxRed = document.getElementById("cycleRed");
  var checkBoxBlue = document.getElementById("cycleBlue");
  var checkBoxGreen = document.getElementById("cycleGreen");
  var checkBoxOrange = document.getElementById("cycleOrange");

  time = 0;

  if (checkBoxRed.checked == true) {
    lightCycleRedVar.style.display = "block";
  } else lightCycleRedVar.style.display = "none";
  if (checkBoxBlue.checked == true) {
    lightCycleBlueVar.style.display = "block";
  } else lightCycleBlueVar.style.display = "none";
  if (checkBoxGreen.checked == true) {
    lightCycleGreenVar.style.display = "block";
  } else lightCycleGreenVar.style.display = "none";
  if (checkBoxOrange.checked == true) {
    lightCycleOrangeVar.style.display = "block";
  } else lightCycleOrangeVar.style.display = "none";
}

// Restart light color, cycle position, set winner banner to hidden
function restartRace() {
  var winRedVar = document.getElementById("winRed");
  var winBlueVar = document.getElementById("winBlue");
  var winGreenVar = document.getElementById("winGreen");
  var winOrangeVar = document.getElementById("winOrange");

  var neonStopLightVar = document.getElementById("stopLight");
  var neonGoLightVar = document.getElementById("goLight");
  var checkBox = document.getElementById("checkBox");

  var lightCycleRedVar = document.getElementById("lightCycleRed");
  var lightCycleBlueVar = document.getElementById("lightCycleBlue");
  var lightCycleGreenVar = document.getElementById("lightCycleGreen");
  var lightCycleOrangeVar = document.getElementById("lightCycleOrange");

  var winnerInput = document.getElementById("winner");
  var lossInput = document.getElementById("loss");
  var timeInput = document.getElementById("time");
  var submitBtn = document.getElementById("submitButton");

  winRedVar.style.display = "none";
  winBlueVar.style.display = "none";
  winGreenVar.style.display = "none";
  winOrangeVar.style.display = "none";

  neonGoLightVar.style.display = "none";
  neonStopLightVar.style.display = "block";
  checkBox.style.display = "block";

  lightCycleRedVar.style.left = 0; lightCycleRedVar.style.display = "none";
  lightCycleBlueVar.style.left = 0; lightCycleBlueVar.style.display = "none";
  lightCycleGreenVar.style.left = 0; lightCycleGreenVar.style.display = "none";
  lightCycleOrangeVar.style.left = 0; lightCycleOrangeVar.style.display = "none";

  winnerInput.style.display = "block";
  lossInput.style.display = "block";
  timeInput.style.display = "block";
  submitBtn.style.display = "block";
}

// Light cycle movement
function moveObject() {
  var leftBlue = 0;
  var leftRed = 0;
  var leftGreen = 0;
  var leftOrange = 0;

  var lightCycleRedVar = document.getElementById("lightCycleRed");
  var lightCycleBlueVar = document.getElementById("lightCycleBlue");
  var lightCycleGreenVar = document.getElementById("lightCycleGreen");
  var lightCycleOrangeVar = document.getElementById("lightCycleOrange");

  var winRedVar = document.getElementById("winRed");
  var winBlueVar = document.getElementById("winBlue");
  var winGreenVar = document.getElementById("winGreen");
  var winOrangeVar = document.getElementById("winOrange");

  var checkBoxRed = document.getElementById("cycleRed");
  var checkBoxBlue = document.getElementById("cycleBlue");
  var checkBoxGreen = document.getElementById("cycleGreen");
  var checkBoxOrange = document.getElementById("cycleOrange");

  var timerID = 0;
  timerID = setInterval(function () {
    time += 1;


    if (checkBoxRed.checked == true) {
      var randLengthRed = Math.floor(Math.random() * 25 + 1);
      leftRed += randLengthRed;
    }
    if (checkBoxBlue.checked == true) {
      var randLengthBlue = Math.floor(Math.random() * 25 + 1);
      leftBlue += randLengthBlue;
    }
    if (checkBoxGreen.checked == true) {
      var randLengthGreen = Math.floor(Math.random() * 25 + 1);
      leftGreen += randLengthGreen;
    }
    if (checkBoxOrange.checked == true) {
      var randLengthOrange = Math.floor(Math.random() * 25 + 1);
      leftOrange += randLengthOrange;
    }


    if (leftBlue > 1300) {
      clearInterval(timerID);
      winner = "Blue";
      if (checkBoxRed.checked == true) loss = "Red";
      if (checkBoxGreen.checked == true) loss = "Green";
      if (checkBoxOrange.checked == true) loss = "Orange";
      winBlueVar.style.display = "block";
    } else if (leftRed > 1300) {
      clearInterval(timerID);
      winner = "Red";
      if (checkBoxBlue.checked == true) loss = "Blue";
      if (checkBoxGreen.checked == true) loss = "Green";
      if (checkBoxOrange.checked == true) loss = "Orange";
      winRedVar.style.display = "block";
    } else if (leftGreen > 1300) {
      clearInterval(timerID);
      winner = "Green";
      if (checkBoxRed.checked == true) loss = "Red";
      if (checkBoxBlue.checked == true) loss = "Blue";
      if (checkBoxOrange.checked == true) loss = "Orange";
      winGreenVar.style.display = "block";
    } else if (leftOrange > 1300) {
      clearInterval(timerID);
      winner = "Orange";
      if (checkBoxRed.checked == true) loss = "Red";
      if (checkBoxBlue.checked == true) loss = "Blue";
      if (checkBoxGreen.checked == true) loss = "Green";
      winOrangeVar.style.display = "block";
    }

    lightCycleRedVar.style.left = leftRed + "px";
    lightCycleBlueVar.style.left = leftBlue + "px";
    lightCycleGreenVar.style.left = leftGreen + "px";
    lightCycleOrangeVar.style.left = leftOrange + "px";
  }, 50);
}

// Submit data to form/database
function formSubmit() {
  time = time * .05; // Convert time to seconds
  document.getElementById("winner").value = winner;
  document.getElementById("loss").value = loss;
  document.getElementById("time").value = time;
}