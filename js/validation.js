export const initiateValidator = () => {
  window.onload = function () {
    const form = document.getElementById('upload-select-image');

    // create the pristine instance
    const pristine = new Pristine(form);

    form.addEventListener('submit', (evt) => {
      // check if the form is valid
      const valid = pristine.validate(); // returns true or false

      if (!valid) {
        evt.preventDefault();
        return;
      }
      const duplicateReg = /\b(\w+)\b.*\b\1\b/;
      const hashtag = document.querySelector('.text__hashtags').value;
      if (duplicateReg.test(hashtag)) {
        evt.preventDefault();
      }
    });
  };
};
