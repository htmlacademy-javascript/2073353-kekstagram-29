//import { renderPhotos } from "./pictures";

export const makePictureBig = (data) => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  const totalCommentsCount = data.comments.length;
  bigPicture.querySelector('.comments-count').textContent = totalCommentsCount;
  //console.log(bigPicture);
  const socialComment = bigPicture.querySelector('.social__comments');
  socialComment.innerHTML = '';


  const commentTemplate = document.querySelector('#comment')
    .content
    .querySelector('.social__comment');

  // const newComment = commentTemplate.cloneNode(true);

  let page = 0;
  const pageSize = 5;

  const renderComment = (comment) => {
    const newComment = commentTemplate.cloneNode(true);
    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__picture').alt = comment.name;
    newComment.querySelector('.social__text').textContent = comment.message;
    return newComment;
  };

  const refreshCounter = () => {
    const curCount = page * pageSize;

    const isFullLoaded = curCount >= totalCommentsCount;
    const displayCount = isFullLoaded ? totalCommentsCount : curCount;
    bigPicture.querySelector('.comments-current-count').textContent = displayCount;

    if (isFullLoaded) {
      document.querySelector('.social__comments-loader').classList.add('hidden');
    }
  };
  const renderMoreComments = () => {
    const commentFragment = document.createDocumentFragment();
    const comments = data.comments.getPaginated(page, pageSize);
    page++;
    comments.forEach((comment) => {
      const result = renderComment(comment);
      commentFragment.append(result);
    });
    bigPicture.querySelector('.social__comments').append(commentFragment);
    refreshCounter();
  };
  renderMoreComments();
  const loader = document.querySelector('.social__comments-loader');
  loader.addEventListener('click', () => {
    renderMoreComments();
  });

  bigPicture.querySelector('.social__caption').textContent = data.description;
  //bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  //bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
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

