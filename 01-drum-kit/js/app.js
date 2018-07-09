window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');    
});

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}))