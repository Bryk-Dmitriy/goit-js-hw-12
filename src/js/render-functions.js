import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createImages(data) {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
  const list = document.querySelector('.gallery');
  let images = data.hits
    .map(hit =>
        `
    <li class="photo-card">
      <a href="${hit.largeImageURL}">
        <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" width="360" height="152"/>
      </a>
      <div class="info">
        <p class="likes"><b>Likes:</b> ${hit.likes}</p>
        <p class="vievs"><b>Views:</b> ${hit.views}</p>
        <p class="comments"><b>Comments:</b> ${hit.comments}</p>
        <p class="dowloads"><b>Downloads:</b> ${hit.downloads}</p>
      </div>
      </li>
  `)
    .join('');
  list.insertAdjacentHTML('beforeend', images);
  lightbox.refresh();
}

export function clearImages() {
  const list = document.querySelector('.gallery');
  list.innerHTML = '';
}

export function scrollDown() {
  const list = document.querySelector('.gallery');
  const height = list.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}