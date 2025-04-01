import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions'

const form = document.querySelector('.form');
const container = document.querySelector('.gallery')
form.addEventListener('submit', handleSubmit);

hideLoader();

function handleSubmit(event) {
    event.preventDefault();
    showLoader();

    const query = event.currentTarget.elements['search-text'];
    const queryValue = query.value.trim();

    getImagesByQuery(queryValue)
        .then(response => {
            if (response.data.total === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                })
                return hideLoader();
            }
            container.innerHTML = createGallery(response.data.hits);
            return hideLoader();
        })
        .catch(error => {
            iziToast.error({})
        })
    clearGallery();    
    form.reset();
}