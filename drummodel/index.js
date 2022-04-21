for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
 document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   var soundGenerator = this.innerHTML;
   makeSound(soundGenerator);
     animationGenerator(soundGenerator);
 });
}

//$("button").cilck(function () {
  //var soundGenerator=$(this).text();
  //makeSound(soundGenerator);
 //animationGenerator(soundGenerator);

//} );

//document.addEventListener("keydown",function(event)
//{
  //makeSound(event.key);
    //animationGenerator(event.key);
//});
$(document).keydown(function(event)
{
  makeSound(event.key);
    animationGenerator(event.key);
});


function makeSound(key){
switch (key) {
  case "w":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;
  case "a":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;
  case "s":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;
  case "d":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;
  case "j":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;
  case "k":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;
  case "l":
  var kick = new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;
  default:

}
}
function animationGenerator(currentKey){
   var azhagesh=document.querySelector("." + currentKey);
  azhagesh.classList.add("pressed");
  setTimeout(function(){
  azhagesh.classList.remove("pressed"); },100);


}
