function playSoundOnKey(e) {
    // Identifies the data-key for the key pressed by user, 
    // and selects the matching audio for that key
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    // Identifies the data-key and class for the key pressed by user, 
    // and selects the corrosponding element 
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!audio) return;      // if there is no audio with the key pressed then nothin happens
    audio.currentTime = 0;  // Starts the audio from the beginning everytime its called
    audio.play();
    key.classList.add('playing');
}

function playSoundOnClick(e) {
    // Identifies the data-key for the element clicked on by user, 
    // and selects the matching audio for that element
    const audio = document.querySelector(`audio[data-key="${e.toElement.dataset.key}"]`);
    // Identifies the data-key and class for the element clicked on by user, 
    // and selects the corrosponding element 
    const key = document.querySelector(`.key[data-key="${e.toElement.dataset.key}"]`);
    if(!audio) return;      // if there is no audio with the key pressed then nothin happens
    audio.currentTime = 0;  // Starts the audio from the beginning everytime its called
    audio.play();
    key.classList.add('playing');
}

// Removes the class of playing from the element after it has finished playing
function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSoundOnKey)
window.addEventListener('click', playSoundOnClick)