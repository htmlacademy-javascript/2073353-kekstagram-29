const createPhotoElement = (photoData, onClick) => {
  const { url, comments, likes } = photoData;
  const photoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  // /** @type {HTMLElement} */
  const newPhoto = photoTemplate.cloneNode(true);
  newPhoto.querySelector('img').src = url;
  newPhoto.addEventListener ('click', () => {
    onClick();
  });
  newPhoto.querySelector('.picture__comments').textContent = comments.length;
  newPhoto.querySelector('.picture__likes').textContent = likes;
  return newPhoto;
};

export const renderPhotos = (photos, onClick) => {
  const fragment = document.createDocumentFragment();
  const pictureContainer = document.querySelector('.pictures');

  photos.forEach((photo) => {
    const selectPhoto = () => {
      onClick(photo);
    };
    const photoElement = createPhotoElement(photo, selectPhoto);
    fragment.append(photoElement);
  });
  pictureContainer.append(fragment);
};
