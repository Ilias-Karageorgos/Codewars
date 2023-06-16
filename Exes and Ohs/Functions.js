function XO(str) {
    str = str.toLowerCase();
    return str.split("o").length - 1 == str.split("x").length - 1
}
