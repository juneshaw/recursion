var romanNumerals = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
}

function recur(incoming) {
  var current = romanNumerals[incoming[0]];
  var next = romanNumerals[incoming[1]];
  if (incoming.length === 1) {
    return current;
  } else {
    var multiplier = (next>current) ? -1:1;
    return recur(incoming.slice(1)) + (current*multiplier);
  }
}
console.log(recur("CMXCIX"));
