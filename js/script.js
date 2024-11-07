const miFotoimg = document.querySelector('#mifotoimg');

let estadoDeRotacion = JSON.parse(localStorage.getItem('miEstadoRotacion')) || false;


function alternarRotacionImg() {
    if (estadoDeRotacion === false) {
        miFotoimg.style.animationPlayState = 'running';
        estadoDeRotacion = true;
    }   else { miFotoimg.style.animationPlayState = 'paused';
        estadoDeRotacion = false;  // cambiamos el estado de la rotación al contrario del estado anterior
     }
     // Guardar en localStorage el estado
    localStorage.setItem('miEstadoRotacion', JSON.stringify(estadoDeRotacion));
}



miFotoimg.addEventListener('click', alternarRotacionImg);

// Aplicar el estado inicial de la animación basado en el valor de 'estadoDeRotacion'
if (estadoDeRotacion === true) {
    miFotoimg.style.animationPlayState = 'running';
} else {
    miFotoimg.style.animationPlayState = 'paused';
}





const enviarcorreo = document.querySelectorAll('.enviarcorreo');


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


//traemos todos los botones que nos redirijen al visor de la hoja de vida

const abrirHdv = document.querySelectorAll('.abrirHdv');

// agregamos un evento de click a cada botón para abrir el visor de la hoja de vida
abrirHdv.forEach(function(buttonHdv){
    buttonHdv.addEventListener('click', function() {
        window.location.href = "mis-documentos/pdf-visor/web/viewer.html?file=../../mi-hdv.pdf"
    });
});


const linkMiGit = document.querySelectorAll('.linkMiGit');

// agregamos un evento de click a cada botón para abrir el visor de la hoja de vida
linkMiGit.forEach(function(buttonMiGit){
    buttonMiGit.addEventListener('click', function() {
        window.open("https://github.com/zkv0");
    });
});
