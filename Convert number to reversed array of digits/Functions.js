function digitize(n) {
  
    return n.toString().split("").reverse().map(x => parseFloat(x));
    
}
