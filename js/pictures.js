const createPhotoElement = ({ url, comments, likes }) => {
  const photoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const newPhoto = photoTemplate.cloneNode(true);
  newPhoto.querySelector('img').src = url;
  newPhoto.querySelector('.picture__comments').textContent = comments.length;
  newPhoto.querySelector('.picture__likes').textContent = likes;
  return newPhoto;
};

export const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  const pictureContainer = document.querySelector('.pictures');
  photos.forEach((photo) => {
    const photoElement = createPhotoElement(photo);
    fragment.append(photoElement);
  });
  pictureContainer.append(fragment);
};
