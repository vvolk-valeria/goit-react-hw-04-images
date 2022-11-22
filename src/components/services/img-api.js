
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30134376-fefd65acec5dcb1f681d352f7';
const seachParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal', 
  safesearch: true,
})

export function fetchImg(searchQuery, page, PER_PAGE) { 
 return fetch(`${BASE_URL}/?key=${API_KEY}&q=${searchQuery}&${seachParams}&page=${page}&per_page=${PER_PAGE}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Нет изображений по запросу ${searchQuery}`));
        })
};


