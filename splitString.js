const splitString = (originalString) => {
    let splitArray = [];
    for (let i = 0; i < originalString.length; i += 2) {
      splitArray.push(originalString.slice(i, i + 2));
    }
    if (splitArray[splitArray.length - 1].length === 1) {
      splitArray[splitArray.length - 1] = splitArray[splitArray.length - 1] + '_';
    }

    return splitArray;
}

module.exports = splitString;