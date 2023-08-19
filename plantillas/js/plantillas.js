  
function mostrartextos(){
    const elementos=document.querySelectorAll('.textomostras');

    elementos.forEach(elemento =>{

        const poscision =elemento.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(poscision < windowHeight){
            elemento.classList.add('mostrartextos')
        }
    })
}

window.addEventListener('scroll',mostrartextos);

mostrartextos();
