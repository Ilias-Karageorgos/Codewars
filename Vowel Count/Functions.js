function getCount(str) {
    let counter = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            counter++
        }
    }
    return counter;

}
