const splitString = (originalString) => {
  if (originalString.length === 1) {
    return [originalString + '_'];
  } else if (originalString.length === 2) {
    return [originalString];
  } else {
    let splitArray = [];
    for (let i = 0; i < originalString.length; i += 2)
    splitArray.push(originalString.slice(i, i + 2));
    return splitArray;
  }
}

module.exports = splitString;