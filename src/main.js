import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

hideLoader();

function handleSubmit(event) {
  event.preventDefault();

  const query = event.currentTarget.elements['search-text'];
  const queryValue = query.value.trim();

  if (!queryValue) {
    iziToast.warning({
      messageColor: '#fafafb',
      titleColor: '#fafafb',
      backgroundColor: '#ffa000',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(queryValue)
    .then(response => {
      if (response.data.total === 0) {
        iziToast.error({
          messageColor: '#fafafb',
          titleColor: '#fafafb',
          backgroundColor: '#ef4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      createGallery(response.data.hits);
    })
    .catch(error => {
      iziToast.error({
        messageColor: '#fafafb',
        titleColor: '#fafafb',
        backgroundColor: '#ef4040',
        message: error,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
  form.reset();
}
