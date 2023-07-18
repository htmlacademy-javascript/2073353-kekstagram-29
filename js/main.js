
const message = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const names = ['Роберт', 'Артём', 'Вероника', 'Захар', 'Ариана',
  'Даниил', 'Карина', 'Михаил', 'Василиса', 'Арина',
  'Алексей', 'Виктория', 'Владимир', 'Милана', 'Георгий'];


const photoDescription = ['удивительное зрелище',
  'это что-то новое',
  'это должен увидеть каждый',
  'сфотографировал на прогулке',
  'Непонятное нечто',
  'Видели такое?'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementFromArray = (elements) => {
  const index = getRandomInteger(0, elements.length - 1);
  const element = elements[index];
  return element;
};

const getRandomElementFromPull = (elements) => {
  const index = getRandomInteger(0, elements.length - 1);
  const element = elements[index];
  elements.splice(index, 1);
  return element;
};

const createArray = (max) => {
  const array = [];
  let a = 1;
  for (let i = 0; i < max; i++) {
    array[i] = a;
    a++;
  }
  return array;
};

const objectIDs = createArray(25);
const photoIDs = createArray(25);
const commentIds = createArray(750);

const createComment = () => ({
  id: getRandomElementFromPull(commentIds), //id — любое число. Идентификаторы не должны повторяться.
  avatar: `img/avatar-${getRandomInteger(1, 25)}.svg`, //строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
  //Аватарки подготовлены в директории img.
  message: (
    Math.random() > 0.5
      ? `${getRandomElementFromArray(message)} ${getRandomElementFromArray(message)}`
      : getRandomElementFromArray(message)
  ),
  name: getRandomElementFromArray(names)
});


const postsArray = (arrayLength, buildFunction) => Array.from({ length: arrayLength }, buildFunction);

const createObject = () => ({
  id: getRandomElementFromPull(objectIDs),
  url: `photos/${getRandomElementFromPull(photoIDs)}.jpg`, //'строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.'
  description: getRandomElementFromArray(photoDescription),//'строка — описание фотографии. Описание придумайте самостоятельно.',
  likes: getRandomInteger(15, 200), //'число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.',
  comments: postsArray(getRandomInteger(0, 30), createComment)
});

postsArray(25, createObject);
