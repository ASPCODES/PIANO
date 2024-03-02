const volumeSlider = document.querySelector('.volume-slider input');
const pianoKeys = document.querySelectorAll('.piano-keys .key');
const keyCheckBox = document.querySelector('.keys-checkbox input');

const allKeys = []
const audio = new Audio("./tunes/a.wav");

const playTune = (key => {
    audio.src = `./tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`.key[data-key = "${key}"]`)
    if (clickedKey) {
        clickedKey.classList.add("active");
        setTimeout(() => {
            clickedKey.classList.remove("active")
        }, 200);
    }
});

pianoKeys.forEach(key => {
    allKeys.push(key.getAttribute("data-key"));
    key.addEventListener('click', () => playTune(key.getAttribute("data-key")))
});

const handleVolume = (e) =>{
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};


const pressedKeys = (e) => {
    const key = e.key.toUpperCase();
    if (allKeys.includes(key)) playTune(key);
};

volumeSlider.addEventListener("click", handleVolume);
keyCheckBox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKeys);
