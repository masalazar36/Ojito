// Leer mensaje personalizado de la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
    const mainMessageElement = document.querySelector('#mainMessage');
    mainMessageElement.textContent = decodeURI(messageCustom);
}

// Elementos del DOM
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const coverElement = document.querySelector('.cover');
const letterElement = document.querySelector('.letter');
const paperElement = document.querySelector('.paper');
const heartElement = document.querySelector('.heart');
const optionsElement = document.querySelector('.options');

// Estado inicial
btnCloseElement.disabled = true;
heartElement.style.display = 'none';

btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;

    // Abrir la tapa
    coverElement.classList.add('open-cover');

    // Abrir el papel con delay
    setTimeout(() => {
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');
        optionsElement.classList.add('open-options');
    }, 300);

    // Ocultar la carta
    setTimeout(() => {
        letterElement.style.opacity = '0';
        letterElement.style.visibility = 'hidden';
    }, 500);

    // Mostrar el corazón
    setTimeout(() => {
        heartElement.style.display = 'block';
        heartElement.style.opacity = '1';
        heartElement.style.animation = 'none';
        void heartElement.offsetWidth;
        heartElement.style.animation = 'crecer 1s forwards';
    }, 600);

    // Ajustar z-index al final
    setTimeout(() => {
        coverElement.style.zIndex = -1;
    }, 800);
});

btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    // Cerrar la tapa
    coverElement.classList.remove('open-cover');

    // Cerrar papel con delay
    setTimeout(() => {
        paperElement.classList.remove('open-paper');
        paperElement.classList.add('close-paper');
        optionsElement.classList.remove('open-options');
    }, 300);

    // Mostrar la carta de nuevo
    setTimeout(() => {
        letterElement.style.opacity = '1';
        letterElement.style.visibility = 'visible';
    }, 500);

    // Ocultar el corazón
    heartElement.style.opacity = '0';
    setTimeout(() => {
        heartElement.style.display = 'none';
    }, 300);

    // Restaurar z-index
    setTimeout(() => {
        coverElement.style.zIndex = 0;
    }, 800);
});
