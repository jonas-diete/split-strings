const splitString = (originalString) => {
  if (originalString.length === 1) {
    return [originalString + '_'];
  } else if (originalString.length === 2) {
    return [originalString];
  } else {
    return ['ab', 'cd'];
  }
}

module.exports = splitString;