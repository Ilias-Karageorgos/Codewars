function removeChar(str) {
    let result = "";
    for (var i = 2; i < str.length; i++) {

        result = result + str[i-1];
    }
    return result;
}
