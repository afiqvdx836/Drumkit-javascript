var numberOfDrumsButtons = document.querySelectorAll(".drum").length;




for(var i=0; i<numberOfDrumsButtons; i++){

    // Detecting Button Press
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
    
}

// Detect when keyboard Press
document.addEventListener("keypress", function(event){
   makeSound(event.key);

   buttonAnimation(event.key);
   console.log(event);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "k":
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play();
        break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        default: console.log(innerHTML);


    }
}


function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);

    // add CSS animation when key pressed
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();