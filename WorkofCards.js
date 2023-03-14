
//geornete Liste mit 13 13 13 13 und dann 2 joker
//0-12 Bick
//13-25 Herz
//26-38 Karo
//39-51 Kreuz
var counter = 0;
var SortedCards = ["🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮", "🂱", "🂲", "🂳", "🂴", "🂵", "🂶", "🂷", "🂸", "🂹", "🂺", "🂻", "🂽", "🂾", "🃁", "🃂", "🃃", "🃄", "🃅", "🃆", "🃇", "🃈", "🃉", "🃊", "🃋", "🃍", "🃎", "🃑", "🃒", "🃓", "🃔", "🃕", "🃖", "🃗", "🃘", "🃙", "🃚", "🃛", "🃝", "🃞", "🂿", "🂿"]
var SortedCardNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53];
var randomCardNumbers
var exerciseBig
var exerciseKar
var exerciseKre
var exerciseHer
var Timer = 120
var paused = false;
let timeout
let timer_on = 0




function newCard() {
  stopCount()
  startCount()

  if (counter > 53) {
    counter = 0;
    randomCardNumbers = SortedCardNumbers.sort(function () {
      return Math.random() - 0.5;
    });

  }
  document.getElementById("card").innerText = SortedCards[SortedCardNumbers[counter]];
  document.getElementById("card").style = "font-size: 40mm;";
  document.getElementById("cardof").innerText = "Karte " + (counter + 1) + "/" + SortedCards.length;

  if (SortedCardNumbers[counter] >= 13 && SortedCardNumbers[counter] <= 38) {
    document.getElementById("card").style = "color: red; font-size: 40mm; ";
  }


  if (SortedCardNumbers[counter] < 13) {
    document.getElementById("exercise").innerText = exerciseBig
    document.getElementById("number").innerText = SortedCardNumbers[counter] + 1
  } else if (SortedCardNumbers[counter] < 26) {
    document.getElementById("exercise").innerText = exerciseHer
    document.getElementById("number").innerText = (SortedCardNumbers[counter] - 12)
  } else if (SortedCardNumbers[counter] < 39) {
    document.getElementById("exercise").innerText = exerciseKar
    document.getElementById("number").innerText = (SortedCardNumbers[counter] - 25)
  } else if (SortedCardNumbers[counter] < 51) {
    document.getElementById("exercise").innerText = exerciseKre
    document.getElementById("number").innerText = (SortedCardNumbers[counter] - 38)
  } else {
    document.getElementById("exercise").innerText = "Pause";
    document.getElementById("number").innerText = 0
  }



  counter++;
}


function startGame() {

  counter = 0;
  randomCardNumbers = SortedCardNumbers.sort(function () {
    return Math.random() - 0.5;
  });

  exerciseBig = document.getElementById("bigExer").value;
  if (exerciseBig != "") {
    document.getElementById("bigExer").placeholder = exerciseBig
  } else {
    exerciseBig = document.getElementById("bigExer").placeholder
  }

  exerciseKar = document.getElementById("karExer").value;
  if (exerciseKar != "") {
    document.getElementById("karExer").placeholder = exerciseKar
  } else {
    exerciseKar = document.getElementById("karExer").placeholder
  }

  exerciseKre = document.getElementById("kreExer").value;
  if (exerciseKre != "") {
    document.getElementById("kreExer").placeholder = exerciseKre
  } else {
    exerciseKre = document.getElementById("kreExer").placeholder
  }

  exerciseHer = document.getElementById("herExer").value;
  if (exerciseHer != "") {
    document.getElementById("herExer").placeholder = exerciseHer
  } else {
    exerciseHer = document.getElementById("herExer").placeholder
  }
  document.getElementById("CardGame").hidden = "";
  document.getElementById("MainMenu").hidden = "hidden;"
  paused = false;
}
function pause() {
  document.getElementById("CardGame").hidden = "hidden;"
  document.getElementById("paused").hidden = "";
  paused = true;
  stopCount()
}
function continuen() {
  document.getElementById("CardGame").hidden = ""
  document.getElementById("paused").hidden = "hidden"
  startCount()
}

function exit() {
  counter = 0;
  document.getElementById("card").innerText = "Karte"
  document.getElementById("exercise").innerText = "Übung"
  document.getElementById("number").innerText = "Anzahl"
  document.getElementById("CardGame").hidden = "hidden;"
  document.getElementById("MainMenu").hidden = ""
  document.getElementById("cardof").innerText = "Karte 0/54"
  document.getElementById("card").style = "padding: 10px;";
  document.getElementById("time").innerHTML = "2:00"
  stopCount()
}

function toTimeString(seconds) {
  return (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}

function timedCount() {
  document.getElementById("time").innerHTML = toTimeString(Timer) 
  Timer--
  timeout = setTimeout(timedCount, 1000)
  if (Timer == -1) {
    clearTimeout(timeout)
    Timer = 120
    newCard()
  }
  
}

function stopCount() {
  clearTimeout(timeout);
  timer_on = 0;
  Timer = 120
}

function startCount() {
  if (!timer_on) {
    timer_on = 1
    Timer = 120
    timedCount()
  }
}