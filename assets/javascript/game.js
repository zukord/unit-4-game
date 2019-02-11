var numberToGuess = Math.floor(Math.random() * 102 + 19);
var numberOptions = [];
var wins = 0;
var losses = 0;
var counter = 0;

function setNumberOptions(){
    numberOptions = [];
        for (var i=0; i < 4; i++) {
            var numberToPush = Math.floor(Math.random() * 12 + 1);

            if ($.inArray(numberToPush, numberOptions) < 0){
            numberOptions.push(numberToPush);
            } else {
            i--;
            }
        }

}

function playGame(){
    setNumberOptions();
    $("#numberToGuess").html(numberToGuess)
    $("#currentScore").html(counter);

   for (var i=0; i < numberOptions.length; i++) {
       imageCrystal= $("<img>")
       imageCrystal.attr("src", "assets/images/cBall" + i + ".jpg")
       imageCrystal.addClass("crystal-image");
       imageCrystal.attr("data-crystalvalue", numberOptions[i]);
       $("#crystal" + (i + 1)).append(imageCrystal);
   }

$(".crystal-image").on("click", function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#currentScore").html(counter);

    if (counter === numberToGuess) {
        wins++;
      $("#winsAndLosses").html("<p>Congratulations, you win!</p><br/><p>Wins: " + wins + "</p><br/><p>Losses: " + losses +"</p>" );
      counter = 0;
      numberToGuess = Math.floor(Math.random() * 102 + 19);
      $(".crystal").empty();
      playGame();
    }

    else if (counter >= numberToGuess) {
        losses++;
        $("#winsAndLosses").html("<p>Sorry, you lose.</p><br/><p>Wins: " + wins + "</p><br/><p>Losses: " + losses +"</p>" );
        counter = 0;
        numberToGuess = Math.floor(Math.random() * 102 + 19);
        $(".crystal").empty();
        playGame();
    }

})
}

