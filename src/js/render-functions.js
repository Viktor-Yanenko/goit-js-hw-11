import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader')

export function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class='gallery-item'>
            <a class='gallery-link' href='${largeImageURL}'>
                <img
                    src='${webformatURL}'
                    alt='${tags}'
                    width='360'
                    height='200'/>
            </a>
            <div>
                <ul class='photo-stats-list'>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Likes</p>
                        <p class='photo-stats-number'>${likes}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Views</p>
                        <p class='photo-stats-number'>${views}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Comments</p>
                        <p class='photo-stats-number'>${comments}</p>
                    </li>
                    <li class='photo-stats-item'>
                        <p class='photo-stats-heads'>Downloads</p>
                        <p class='photo-stats-number'>${downloads}</p>
                    </li>
                </ul>
            </div>
        </li>
    `).join('');
    gallery.innerHTML = markup;
    lbox.refresh();
}

const lbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})

export function clearGallery() { 
    gallery.innerHTML = '';
}

export function showLoader() { 
    loader.style.display = 'block';
}
export function hideLoader() {
    loader.style.display = 'none';
}