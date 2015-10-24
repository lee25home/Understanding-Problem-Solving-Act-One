function arrayinarray(array) {
  var count = 0;
  var currentDepth = 0;
  var holdArray = JSON.stringify(array);
  for (var i = 0; i < array.length; i++) {
    holdArray[i];
    if (holdArray.charAt(i) === '[') {
      count++;
    } else if (holdArray.charAt(i) === ']') {
      count--;
    } else if (holdArray.charAt(i) === ',') {
      continue;
    } else {
      if (count > currentDepth) {
        currentDepth = count;
      }
    }
  }
  return currentDepth;
};


/**
 * Challenge: return the depth in a nested array
 * The hard part was understanding the depth counter and having it properly
 * reflect how many nested arrays there are.

[ [ 10 ], [ [ ] ] ]	 => 2 

[ 10 ] =>	1
 */
