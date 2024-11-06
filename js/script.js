const miFotoimg = document.querySelector('#mifotoimg');

function alternarRotacionImg() {
    if (miFotoimg.style.animationPlayState === 'paused') {
        miFotoimg.style.animationPlayState = 'running';
    }   else { miFotoimg.style.animationPlayState = 'paused'; }
}

const rotacionEvento = ['click','touchstart',]

for (let i = 0; i < rotacionEvento.length; i++) {
    const elementValor = rotacionEvento[i];
    miFotoimg.addEventListener(elementValor, alternarRotacionImg)
}