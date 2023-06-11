function disemvowel(str) {
    let result = "";
    for (var i = 0; i < str.length; i++) {
        if (!("aeiuoAEIUO".includes(str[i]))) {
            result += str[i];
        }
       
    }
    return result ;
}
