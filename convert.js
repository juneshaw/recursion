// function deromanize( roman ) {
//   var roman = roman.toUpperCase(),
//       lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
//       arabic = 0,
//       i = roman.length;
//   while (i--) {
//     if ( lookup[roman[i]] < lookup[roman[i+1]] )
//       arabic -= lookup[roman[i]];
//     else
//       arabic += lookup[roman[i]];
//   }
//   return arabic;
// }
// console.log(deromanize('cmxcix'));

// module.exports = {
  // convert: function( roman) {
  function convert(roman) {

  var roman = roman.toUpperCase();
  lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
  arabic = 0;

  if (roman.length === 1) {
    return lookup[roman[0]]
  }
  else {
      if (lookup[roman[roman.length-2]] < lookup[roman[roman.length-1]] )
        // arabic += lookup[roman[roman.length-1]] - this.convert(roman.substring(0, roman.length-1));
        arabic += convert(roman.substring(0, roman.length-1));
      else
        arabic -= convert(roman.substring(0, roman.length-1));
        // arabic = (-1*lookup[roman[roman.length-1]]) + this.convert(roman.substring(0, roman.length-1));
    return arabic
  }
}

// }
console.log('Roman Numeral of XXIV is: ', convert('VI'));
