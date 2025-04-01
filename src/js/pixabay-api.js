
import axios from 'axios';

// const API_KEY = '49618658-bd62d28bb73c3efea12ea07c4'

export function getImagesByQuery(query) {
    return axios.get('https://pixabay.com/api/?', {
        params: {
            key: '49618658-bd62d28bb73c3efea12ea07c4',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    })
}