/**
 * 
 * @param {Array} list All classes to join
 * @returns {String} Joined stringss
 */
function classNames(list = []) {
  if (!list) {
    return '';
  }

  return list.join(' ');
}

export default classNames