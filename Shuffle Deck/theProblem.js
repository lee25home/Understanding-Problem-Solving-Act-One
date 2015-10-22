
/**Fisher Yates Shuffle */
function shuffle(array){
  var i = 0;
  var j = 0;
  var temp = null;

  for( var i = arra.length -1; i > 0; i -= 1){
    j = Math.floor( Math.random() * (i+1))
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Ronald Fisher and Frank Yates
  //Time Complexity 0(n)
