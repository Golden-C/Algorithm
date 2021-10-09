function oneAway(inputStr1, inputStr2) {
    //convert input strings to lowercase
    const str1 = inputStr1.toLowerCase();
    const str2 = inputStr2.toLowerCase();
  if (str1.length != str2.length) {
      //difference in length implies the likelihood that a character was inserted or removed
    const biggerStr = str1.length > str2.length ? str1 : str2;
    const smallerStr = str1.length < str2.length ? str1 : str2;
    const differenceInLength = biggerStr.length - smallerStr.length;
    //the difference between the bigger and smaller shoud not exceed 1
    if (differenceInLength > 1) {
      return false;
    }
    //find faulty index, the index where the letter in smallerStr !== the letter in biggerStr
    let faultIndex;
    for (let i = 0; i < smallerStr.length; i++) {
      let currentCharInBigStr = biggerStr[i];
      let currentCharInSmallStr = smallerStr[i];
      if (currentCharInBigStr != currentCharInSmallStr) {
        faultIndex = i;
        break; // break the loop
      }
    }
    if (faultIndex == undefined ) {
      //no faultIndex was found
      if (biggerStr.includes(smallerStr)) {
          //character was removed or inserted
        return true;
      }
      //no character was removed or inserted
      return false;
    }
    let modifiedBiggerStr =
      biggerStr.slice(0, faultIndex) + biggerStr.slice(faultIndex + 1);
    return modifiedBiggerStr === smallerStr;
  } else {
    //str1's length is equal to str2's length
    //implying that the likelihood that a character was replaced
    let faultIndex;
    for (let i = 0; i < str1.length; i++) {
      const charAtIndexStr1 = str1[i];
      const charAtIndexStr2 = str2[i];
      if (charAtIndexStr1 !== charAtIndexStr2) {
        faultIndex = i;
        break; //break the forloop, faulty index found
      }
    }
    if (faultIndex == undefined) {
      return true;
    }
    const modifiedStr1 = str1.slice(0, faultIndex) + str1.slice(faultIndex + 1);
    const modifiedStr2 = str2.slice(0, faultIndex) + str2.slice(faultIndex + 1);
    return modifiedStr1 === modifiedStr2;
  }
}