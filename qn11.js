function swapCases(str){
  result = '';
  for (var i = 0; i < str.length; ++i) {
      c = str[i];
    if (c == c.toUpperCase()) {
      result += c.toLowerCase();
    } else if (c == c.toLowerCase()) {
      result += c.toUpperCase();
    } else {
      result += c;
    }
  }
  console.log(result)
}

swapCases('Hi, Stack Overflow.')