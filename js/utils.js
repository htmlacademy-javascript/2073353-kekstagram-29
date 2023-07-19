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

export {createArray, getRandomElementFromArray, getRandomElementFromPull, getRandomInteger};
