const buton = document.querySelector('.enviar');
const start = document.querySelector('.start-page');
const final = document.querySelector('.final-page');
const itens = document.querySelectorAll('li');
const itensArray = Array.from(itens);
const rate = document.querySelector('.rate');

function noneEvent() {
    start.classList.add('hide');
    final.classList.add('see');
}

buton.addEventListener('click', noneEvent);

itensArray.forEach(item => {
    item.addEventListener('click', addColors);
    function addColors() {
        itensArray.forEach(item => item.classList.remove('clicado', 'previa'));
        item.classList.add('clicado');
        const prev = item.previousElementSibling.classList.add('previa');
        rate.innerText = item.innerText;
        
    }
});
