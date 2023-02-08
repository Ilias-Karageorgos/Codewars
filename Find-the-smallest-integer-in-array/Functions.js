class SmallestIntegerFinder {
    findSmallestInt(args) {
        let minNum;
        for (var i = 0; i < args.length; i++) {
            minNum  = Math.min(...args);
        }
        return minNum;
    }
}
