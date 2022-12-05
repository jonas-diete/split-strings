const splitString = (originalString) => {
  let splitArray = [];
  if (originalString != '') {
    for (let i = 0; i < originalString.length; i += 2) {
      splitArray.push(originalString.slice(i, i + 2));
    }
    let lastElement = splitArray[splitArray.length - 1];
    if (lastElement.length === 1) {
      splitArray[splitArray.length - 1] = lastElement + '_';
    }
  }
  return splitArray;
}

module.exports = splitString;