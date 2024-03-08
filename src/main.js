import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


import { showImages } from './js/render-functions.js';
import { getImages } from './js/pixabay-api.js';


const formEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const listEl = document.querySelector('.gallery');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  listEl.innerHTML = '';

  const value = event.currentTarget.image_name.value;

  if (value.length === 0 || value.trim() === '') {
    iziToast.error({
      title: '',
      message: 'Could you, please choose some type of photos',
      class: 'popup-message',
      theme: 'dark',
      backgroundColor: '#ef4040',
      messageColor: '#fff',
      iconUrl: cross,
      position: 'topRight',
      pauseOnHover: true,
      timeout: 3000,
    });
  } else {
    loaderEl.classList.remove('is-hidden');
    getImages(value)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            title: '',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            class: 'popup-message',
            theme: 'dark',
            backgroundColor: '#ef4040',
            messageColor: '#fff',
            iconUrl: cross,
            position: 'topRight',
            pauseOnHover: true,
            timeout: 3000,
          });
        }

        const images = data.hits.slice(0, 15);

        showImages(images, listEl);
      })
      .catch(() => {
        iziToast.error({
          title: '',
          message: 'Error while loading images!',
          class: 'popup-message',
          theme: 'dark',
          backgroundColor: '#ef4040',
          messageColor: '#fff',
          iconUrl: cross,
          position: 'topRight',
          pauseOnHover: true,
          timeout: 3000,
        });
      })
      .finally(() => {
        loaderEl.classList.add('is-hidden');
        formEl.reset();
      });
  }
});