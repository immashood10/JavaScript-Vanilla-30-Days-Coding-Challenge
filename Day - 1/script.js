function playSound(e) {     
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    if (!sound) return; // stop the function from running all together.
    sound.currentTime = '0';
    sound.play();
    //   console.log(key);
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound)