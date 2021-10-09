function urlify(str) {
    //find where there are two or more spaces and replace them with %20
    return str.trim().replace(/\s+/g, "%20");
  }