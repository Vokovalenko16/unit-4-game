$(document).ready(function() {
var Scorevalue = 0;
var Userwins = 0;
var Userloses = 0;
var Random_main = Math.floor(Math.random()*100 + 20);
var Randomrock1 = Math.floor(Math.random()*12 + 1);
var Randomrock2 = Math.floor(Math.random()*12 + 1);
var Randomrock3 = Math.floor(Math.random()*12 + 1);
var Randomrock4= Math.floor(Math.random()*12 + 1);
//Established Global variables//


var Randoms = {
    rock1: Randomrock1,
    rock2: Randomrock2,
    rock3: Randomrock3,
    rock4: Randomrock4
}

$(".random-num").html("<h1>" + Random_main + "<h1>")

function reset() {
    Random_main = Math.floor(Math.random()*100 + 20);
    Randomrock1 = Math.floor(Math.random()*12 + 1);
    Randomrock2 = Math.floor(Math.random()*12 + 1);
    Randomrock3 = Math.floor(Math.random()*12 + 1);
    Randomrock4= Math.floor(Math.random()*12 + 1);

    Randoms.rock1 = Randomrock1;
    Randoms.rock2 = Randomrock2;
    Randoms.rock3 = Randomrock3;
    Randoms.rock4 = Randomrock4;

    Scorevalue = 0;

    $(".random-num").html("<h1>" + Random_main + "<h1>")
    $(".score-value").html(Scorevalue);
}
//Random number gets picked and pasted on to the html class //

$(".rocks").on("click", function() {
    var keyid=$(this).attr('id')
    var Randnumb= Randoms[keyid]
    Scorevalue = Scorevalue + Randnumb;
         $(".score-value").html(Scorevalue);
    if (Scorevalue===Random_main){
        Userwins++;
        $("#score1").html(Userwins);
        setTimeout(function() {
        alert("you win")
        reset();
        },500)
    }
});});




// $("#rock1").on("click", function() {
//     Scorevalue = Scorevalue + Randomrock1;
//          $(".score-value").html(Scorevalue);
//     if (Scorevalue===Random_main){
//         alert("you win")
//         Userwins++;
//         $("#score1").html(Userwins);
//         return;
//     }
// });
// $("#rock2").on("click", function() {
//     Scorevalue = Scorevalue + Randomrock2;
//         $(".score-value").html(Scorevalue);
//     if (Scorevalue===Random_main){
//         alert("you win")
//         Userwins++;
//         $("#score1").html(Userwins);
//         return;
//         }
// });
// $("#rock3").on("click", function() {
//     Scorevalue = Scorevalue + Randomrock3;
//          $(".score-value").html(Scorevalue);
//     if (Scorevalue===Random_main){
//         alert("you win")
//         Userwins++;
//         $("#score1").html(Userwins);
//         return;
//         }
// });
// $("#rock4").on("click", function() {
//     Scorevalue = Scorevalue + Randomrock4;
//         $(".score-value").html(Scorevalue);
//     if (Scorevalue===Random_main){
//         alert("you win")
//         Userwins++;
//         $("#score1").html(Userwins);
//         return;
//         }
// });});


//Random number gets picked and pasted on to the html class when each crystal is clicked //
//Each crystal has specific number that does not change and is added to the score//
