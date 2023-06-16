function getMiddle(s) {
    let arrMid = s.split("");
    return s.length % 2 == 0 ?
        arrMid.slice((s.length - 1) / 2, ((s.length - 1) / 2) + 2).join`` :
        arrMid.slice((s.length - 1) / 2, ((s.length - 1) / 2) + 1).join``
}
