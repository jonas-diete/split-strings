const splitString = (originalString) => {
  if (originalString.length === 1) {
    return originalString + '_';
  } else {
    return originalString;
  }
}

module.exports = splitString;