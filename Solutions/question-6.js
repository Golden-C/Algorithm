//Functon to perform basic string compression
function stringCompression(str){
    let prevChar = "";
    let prevCharCount = 0;
    let compressedString = "";
    for(let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const nextChar = i + 1 !== str.length ? str[i+1] : "";
        if ( prevChar == currentChar ) {
            prevCharCount++;
        } else {
            prevCharCount = 1;
        }
        if( currentChar !== nextChar ) {
            compressedString += currentChar + prevCharCount;
        }
        //update previous char
        prevChar = currentChar;
    }
    return compressedString.length < str.length ? compressedString : str;    
}


