function litres(time) {

    let water = 0;
    for (var i = 0; i <= time; i++) {
        water = Math.floor(time* 0.5) ;
    }

    return water;
}
