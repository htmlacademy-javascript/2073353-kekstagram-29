import './data.js';
import {createPosts} from './data.js';
import {renderPhotos} from './pictures.js';
import {makeBigPicture} from './bigPicture.js';
import {setupUploader} from './form.js';
import { initiateValidator } from './validation.js';
import { init } from './effects.js';

initiateValidator();

const selectPicture = (photo) => {
  makeBigPicture({
    ...photo,
    comments: {
      length: photo.comments.length,
      getPaginated: (page, pageSize) => {
        const result = photo.comments.slice(page * pageSize, (page + 1) * pageSize);
        return result;
      },
    }
  });
};

const mockData = createPosts(25);
renderPhotos(mockData, selectPicture);

setupUploader();

init();
