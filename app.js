window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
})
function endTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
}
const buttons = document.querySelectorAll(".drum");
buttons.forEach(button => button.addEventListener("click", function () {
    makeSound(this.innerHTML);
}))
function makeSound(key) {
    switch (key) {
        case "A": const a1 = new Audio("sounds/clap.wav"); a1.play(); break;
        case "S": const a2 = new Audio("sounds/hihat.wav"); a2.play(); break;
        case "D": const a3 = new Audio("sounds/kick.wav"); a3.play(); break;
        case "F": const a4 = new Audio("sounds/openhat.wav"); a4.play(); break;
        case "G": const a5 = new Audio("sounds/boom.wav"); a5.play(); break;
        case "H": const a6 = new Audio("sounds/ride.wav"); a6.play(); break;
        case "J": const a7 = new Audio("sounds/snare.wav"); a7.play(); break;
        case "K": const a8 = new Audio("sounds/tom.wav"); a8.play(); break;
        case "L": const a9 = new Audio("sounds/tink.wav"); a9.play(); break;
        default: break;
    }
}
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", endTransition));