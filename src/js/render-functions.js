import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function showImages(images, gallery) {
  gallery.innerHTML = images
    .map(
      img =>
        `<li>
                <a class='gallery-link' href="${img.largeImageURL}">
                <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}"></a>
                <ul class="gallery-list">
                    <li class='gallery-item'>
                        <h2 class='gallery-title'>Likes</h2>
                        <p class='gallery-value'>${img.likes}</p>
                    </li>
                    <li class='gallery-item'>
                        <h2 class='gallery-title'>Views</h2>
                        <p class='gallery-value'>${img.views}</p>
                    </li>                    
                    <li class='gallery-item'>
                        <h2 class='gallery-title'>Comments</h2>
                        <p class='gallery-value'>${img.comments}</p>
                    </li>                    
                    <li class='gallery-item'>
                        <h2 class='gallery-title'>Downloads</h2>
                        <p class='gallery-value'>${img.downloads}</p>
                    </li>
                </ul>
                </li>`
    )
    .join('');

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}
