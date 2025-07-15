import random from "random";

function pickRandom(array) {
  if (!array || array.length === 0) {
    return null;
  }
  return array[random.int(0, array.length - 1)];
}

function randomUserActivity(names, activities) {
  return {
    name: pickRandom(names),
    activity: pickRandom(activities),
  };
}

export { pickRandom, randomUserActivity };
export default random;
