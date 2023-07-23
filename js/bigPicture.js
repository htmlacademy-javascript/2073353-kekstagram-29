//import { renderPhotos } from "./pictures";

export const makePictureBig = (data) => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  //console.log(bigPicture);
  const socialComment = bigPicture.querySelector('.social__comments');
  socialComment.innerHTML = '';

  const commentFragment = document.createDocumentFragment();
  const commentTemplate = document.querySelector('#comment')
    .content
    .querySelector('.social__comment');

  // const newComment = commentTemplate.cloneNode(true);

  data.comments.forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__picture').alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    commentFragment.append(newComment);
  });
  bigPicture.querySelector('.social__comments').append(commentFragment);


  bigPicture.querySelector('.social__caption').textContent = data.description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

document.querySelector('.big-picture__cancel').addEventListener('click', () => {
  document.querySelector('.big-picture').classList.add('hidden');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.big-picture').classList.add('hidden');
  }
});
