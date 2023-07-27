const toStyleScale = (zoomNumber) => {
  const scaleNumber = zoomNumber / 100;
  const scale = `scale(${scaleNumber})`;
  return scale;
};

export const setupUploader = () => {
  const img = document.querySelector('.img-upload__preview img');

  const imgUpload = document.querySelector('.img-upload__input');

  // const insertPhoto = () => {
  //   img.src = imgUpload.files[0].name;
  // };

  const showForm = () => {
    const overlay = document.querySelector('.img-upload__overlay');
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    // insertPhoto();
  };

  imgUpload.onchange = showForm;

  const closeButton = document.querySelector('.img-upload__cancel');
  const closePicture = () => {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.body.classList.remove('modal-open');
    img.src = '';

  };
  closeButton.onclick = closePicture;
  const hashtagElement = document.querySelector('.text__hashtags');
  const commentElement = document.querySelector('.text__description');

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !(document.activeElement === hashtagElement) &&
  !(document.activeElement === commentElement)) {
      document.querySelector('.img-upload__overlay').classList.add('hidden');
      document.body.classList.remove('modal-open');
      img.src = '';

    }
  });
  const zoomOutElement = document.querySelector('.scale__control--smaller');
  const zoomInElement = document.querySelector('.scale__control--bigger');
  const zoomValue = document.querySelector('.scale__control--value');
  let zoomNumber = 100;

  zoomInElement.onclick = () => {
    if (zoomValue.value !== '100%') {
      zoomNumber += 25;
      zoomValue.value = `${zoomNumber}%`;
      toStyleScale(zoomNumber);
      img.style.transform = `scale(${zoomNumber / 100})`;
    }
  };
  zoomOutElement.onclick = () => {
    if (zoomValue.value !== '25%') {
      zoomNumber -= 25;
      zoomValue.value = `${zoomNumber}%`;
      const scale = zoomNumber / 100;
      toStyleScale(zoomNumber);
      img.style.transform = `scale(${scale})`;
    }
  };

  zoomValue.onchange = () => {
    const scale = zoomNumber / 100;
    img.style.transform = `scale(${scale})`;
  };

};
