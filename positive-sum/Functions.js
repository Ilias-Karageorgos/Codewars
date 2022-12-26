function positiveSum(arr) {
    
    
    let sumP = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] >= 0) {
            sumP = sumP + arr[i];

        }
        

    }
    return sumP;
}
