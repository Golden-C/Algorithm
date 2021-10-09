function palindromePermutation(inputStr) {
    const strWithoutSpaces = inputStr.replace(/\s+/g, "").toLowerCase();
    let characterOccurenceCount = {};
    for (let i = 0; i < strWithoutSpaces.length; i++) {
      const currentChar = strWithoutSpaces[i];
      if (characterOccurenceCount[currentChar] == undefined) {
        characterOccurenceCount[currentChar] = 1;
      } else {
        characterOccurenceCount[currentChar] += 1;
      }
    }
    let oddOccurences = Object.values(characterOccurenceCount).filter(
      (occurenceCount) => occurenceCount % 2 !== 0
    );
    if (oddOccurences.length > 1) {
      return false;
    } else {
      return true;
    }
  }