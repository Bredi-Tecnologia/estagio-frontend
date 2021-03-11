/*Segurar a ativação do scroll */
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply (context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout (timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(c0ntext, args);
    };
};

/*Adicionar a classe 'animate'*/

const target = document.querySelectorAll ('[data-anime');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    })
}

/*Ativar a função a partir do momento que o usuário entrar no site*/
animeScroll();

/*Verificar se exite itens com Target*/

if(target.length) {
    window.addEventListener ('scroll', debounce (function() {
    animeScroll();
    }, 200));
}

