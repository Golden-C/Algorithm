//Functon to check if a string has all unique characters
function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (str.includes(currentChar, i + 1)) {
            return false;
        }
    }
    return true;
}
