function isDivisible(n, x, y) {
    let result = n % x == 0 && n % y == 0 ? true : false;
    return result;
}
