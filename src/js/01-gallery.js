// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryIt = galleryItems.map(function ({ preview, original, description }) {
    return `<li class="gallery__item">
     <a class="gallery__link" href="${original}" target="_blank">
        <img 
    class = "gallery__image"
    src="${preview}"
    data-source="${original}" 
    alt="${description}"
         />
    </a>
    </li>`;
}
).join("");

gallery.insertAdjacentHTML('beforeend', galleryIt);

gallery.addEventListener('click', clickImage);


function clickImage(event) {

    event.preventDefault();
 
    const imgInstance = event.target;
    if (imgInstance.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img class="gallery__image" src="${imgInstance.dataset.source}" width="800" height="600">
`)
    instance.show();
 window.addEventListener('keydown', onCloseModalClick);
}

function onCloseModalClick(event) {
    const openInstance = document.querySelector(".basicLightbox")
    if (event.code === "Escape") {
        openInstance.remove();
           window.removeEventListener('keydown', onCloseModalClick);  
    }

}
