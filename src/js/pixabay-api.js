import axios from 'axios';

export default async function searchImagesByQuery(query, page) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45461935-4caf943777d43ef92827c838d';

  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    iziToast.error({
      position: 'topRight',
      message: `${error}`,
    });
  }
}
