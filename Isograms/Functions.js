function isIsogram(str) {
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (str.split(str[i]).length - 1 > 1) {
            return false;
        }

   }
    return true;
}
