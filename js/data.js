import {message, photoDescription, names} from './mock-data.js';
import {createArray, getRandomElementFromArray,
  getRandomElementFromPull, getRandomInteger
} from './utils.js';

const objectIDs = createArray(25);
const photoIDs = createArray(25);
const commentIds = createArray(750);

const createComment = () => ({
  id: getRandomElementFromPull(commentIds), //id — любое число. Идентификаторы не должны повторяться.
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`, //строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
  //Аватарки подготовлены в директории img.
  message: (
    Math.random() > 0.5
      ? `${getRandomElementFromArray(message)} ${getRandomElementFromArray(message)}`
      : getRandomElementFromArray(message)
  ),
  name: getRandomElementFromArray(names)
});


const createComments = (arrayLength) => Array.from({ length: arrayLength }, createComment);

const createObject = () => ({
  id: getRandomElementFromPull(objectIDs),
  url: `photos/${getRandomElementFromPull(photoIDs)}.jpg`, //'строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.'
  description: getRandomElementFromArray(photoDescription),//'строка — описание фотографии. Описание придумайте самостоятельно.',
  likes: getRandomInteger(15, 200), //'число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.',
  comments: createComments (getRandomInteger(0, 30))
});


export const createPosts = (arrayLength) => Array.from({ length: arrayLength }, createObject);
