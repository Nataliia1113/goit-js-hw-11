// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

import { showImages } from './js/render-functions.js';
import { getImages } from './js/pixabay-api.js';

const formEl = document.querySelector('.form');
const loaderEl = document.querySelector('.loader');
const listEl = document.querySelector('.gallery');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  listEl.innerHTML = '';

  // const cards = event.currentTarget.image_name.value;
  const input = document.querySelector('input');
  const cards = input.value.trim();

  if (cards.length === 0 || cards.trim() === '') {
    iziToast.warning({
      message: 'You forgot to enter details',
    });
  } else {
    loaderEl.classList.remove('is-hidden');
    getImages(cards)
      .then(data => {
        
        if (!data.hits.length) {
          iziToast.info({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }

        const images = data.hits.slice(0, 15);

        showImages(images, listEl);
      })
      .catch(() => {
        iziToast.error({
          message: 'Error',
        });
      })
      .finally(() => {
        loaderEl.classList.add('is-hidden');
        formEl.reset();
      });
  }
});
