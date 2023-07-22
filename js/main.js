import './data.js';
import {createPosts} from './data.js';
import {renderPhotos} from './pictures.js';
const mockData = createPosts(25);
renderPhotos(mockData);
