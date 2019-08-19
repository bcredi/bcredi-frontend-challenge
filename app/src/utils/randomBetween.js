/**
 *
 * @param {Int} max Max random value
 * @returns {Int}
 */
function randomBetween(max = 3) {
  if (!max) {
    return 0;
  }

  const { floor, random } = Math;

  return floor(random() * max);
}

export default randomBetween