function abbrevName(name) {
    let arrNames = name.split(" ").map(x => x.slice(0, 1)).join(".").toUpperCase();
    return arrNames;
  }
