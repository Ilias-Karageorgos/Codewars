function squareDigits(num) {
    

    return parseFloat(num.toString()
                      .split('')
                      .map(x => parseFloat(x) ** 2)
                      .join(''))
}
