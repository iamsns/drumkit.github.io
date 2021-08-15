for (var i = 0; i < document.querySelectorAll("button").length; i++) {
   
    document.querySelectorAll("button")[i].addEventListener("click", plays);
    function plays(){
        playsound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    }
}


document.addEventListener("keydown", function(event) {
    playsound(event.key); 
    buttonAnimation(event.key);
})


function playsound(keypressed) {
    switch (keypressed) {
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
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play(); 
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play(); 
            break;
        case "l":
            var kickbass = new Audio('sounds/kick-bass.mp3');
            kickbass.play(); 
            break;
        default: 
            break;
    }
}
    function buttonAnimation(keypressed) {
        var activeButton = document.querySelector("."+keypressed).classList;
        activeButton.add("pressed");
        setTimeout(() => {
            activeButton.remove("pressed");
        }, 100);
    }
