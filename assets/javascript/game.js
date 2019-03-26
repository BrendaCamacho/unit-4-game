 $(document).ready(function() {

  var rand = [];

  for (var i = 19; i < 121; i++) {  
    rand.push(r);
  }

  var crystals = [];

  for (var c = 1; c < 13; c++) {
    crystals.push(c);
  }

  var randNumber;
  var crystalNumber = [];
  var circulo;
  var corazon;
  var gota;
  var rombo;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;


  function pickRandomNumber(arr) {
    var x = arr[Math.floor(Math.random() * arr.length)];
    randNumber = x;
    $("#randonNumber").html(randNumber);
  }

  function pickRandomCrystals(arr) {
    for (var y = 0; y < 4; y++){
      var a = arr[Math.floor(Math.random() * arr.length)];
      crystalNumber.push(a);
    }
    console.log("random numbers: " + randNumber)
    console.log("crystal numbers: " + crystalNumber)

  }

  function crystalValues(arr){
    for (i = 0; i < arr.length; i++) {
  

  $("#button-" + (i+1)).attr("value",arr[i]);
    }

    c1 = arr[0];
    c2 = arr[1];
    c3 = arr[2];
    c4 = arr[3];

  }

  function gameReset(x){
    crystalNumber = [];
    pickRandomNumber(rand);
    pickRandomCrystals(crystals);
    crystalValues(crystalNumber);

    totalScore = 0;
    $("#totalNumber").html(totalScore);

    alert(x);
  }


  pickRandomNumber(rand);
  pickRandomCrystals(crystals);
  crystalValues(crystalNumbers);

  $("#button-1").on("click", function() {
    totalScore += c1;
    $("#totalNumber").html(totalScore);
  });

  $("#button-2").on("click", function() {
    totalScore += c2;
    $("#totalNumber").html(totalScore);
  });

  $("#button-3").on("click", function() {
    totalScore += c3;
    $("#totalNumber").html(totalScore);
  });

  $("#button-4").on("click", function() {
    totalScore += c4;
    $("#totalNumber").html(totalScore);
  });

  $("button").on("click", function() {
    if (totalScore === randNumber){
      wins++;
      console.log(totalScore);
      $("#totalNumber").html(totalScore);
      $("#wins").html("Wins: " +wins);
      setTimeout(function() {gameReset("You win! :) ")}, 200);
    }

    else if(totalScore > randNumber){
      losses++;
      $("#totalNumber").html(totalScore);
      $("#losses").html("Losses: " + losses);
      setTimeout(function() {gameReset("You lose! :(")}, 200);
    }
  })





});