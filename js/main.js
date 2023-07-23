import './data.js';
import {createPosts} from './data.js';
import {renderPhotos} from './pictures.js';
import {makePictureBig} from './bigPicture.js';

const selectPicture = (photo) => {
  makePictureBig(photo);
};

const mockData = createPosts(25);
renderPhotos(mockData, selectPicture);
// const pictureContainer = document.querySelector('.pictures');

// pictureContainer.addEventListener ('click', (event) => {
//   if (event.target.tagName !== 'IMG') {
//     return;
//   }
//   const url = event.target;
//  makePictureBig({  });
// });


