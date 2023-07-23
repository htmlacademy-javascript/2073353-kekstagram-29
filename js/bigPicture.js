
export const makeBigPicture = (data) => {
  document.querySelector('.social__comments-loader').classList.remove('hidden');
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  const totalCommentsCount = data.comments.length;
  bigPicture.querySelector('.comments-count').textContent = totalCommentsCount;
  const socialComment = bigPicture.querySelector('.social__comments');
  socialComment.innerHTML = '';


  const commentTemplate = document.querySelector('#comment')
    .content
    .querySelector('.social__comment');

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
    //console.log(curCount + ' < ' + totalCommentsCount);
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

