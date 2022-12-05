const splitString = (originalString) => {
  if (originalString.length === 1) {
    return [originalString + '_'];
  } else if (originalString.length === 2) {
    return [originalString];
  } else {
    
    return [originalString.slice(0, 2), originalString.slice(2, 4)];
  }
}

module.exports = splitString;