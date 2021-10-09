//Functon to check if a string is a permutation of the other
function checkPermutation(str1, str2) {
    let firstWord = Array.from(str1.toLowerCase()).sort().join("");
    let secondWord = Array.from(str2.toLowerCase()).sort().join("");
    return firstWord === secondWord;
}
