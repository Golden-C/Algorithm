//Functon to check if a string is a permutation of the other
function checkPermutation(str1, str2) {
    let firstWord = Array.from(str1).sort().join("");
    let secondWord = Array.from(str2).sort().join("");
    return firstWord === secondWord;
}
