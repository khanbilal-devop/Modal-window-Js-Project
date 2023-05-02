'use strict';


const overlayElement = document.querySelector('.overlay');
const modalElement = document.querySelector('.modal');
const buttonCollection =  document.getElementsByClassName('show-modal');
const closeButton = document.querySelector('.close');


const displayModal = () => {
    overlayElement.classList.remove('hidden');
    modalElement.classList.remove('hidden');
}

const hideModal = () => {
    overlayElement.classList.add('hidden');
    modalElement.classList.add('hidden');
}

closeButton.addEventListener('click',hideModal)

document.addEventListener('keydown', (e)  => {
    if(e.code === 'Escape'){
        hideModal();
    }
});


for(let i = 0 ; i < buttonCollection.length ; i++){
    const button = buttonCollection[i];
    button.addEventListener("click", displayModal);
} 