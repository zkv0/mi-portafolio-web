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
};




const enviarcorreo = document.querySelectorAll('.enviarcorreo')


for (let i = 0; i < enviarcorreo.length; i++) {
    const element = enviarcorreo[i];
    element.addEventListener('click', function () {
        const micorreo = "2dz1m2c06s@proton.me";
        const miasunto = 'Estamos interesados en ti.';
    
        const enlacemicorreo = `mailto:${micorreo}?subject=${miasunto}`;
          // Redirigimos al usuario al enlace mailto
          window.location.href = enlacemicorreo;
    });
    
}
