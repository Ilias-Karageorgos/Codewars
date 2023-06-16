function highAndLow(numbers) {
    let max = Math.max(...numbers.split(" ").map(x => parseFloat(x)))
    let min = Math.min(...numbers.split(" ").map(x => parseFloat(x)))
    return `${max} ${min}`
}
