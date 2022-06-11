function findMaxLenEven(str) {
  var n = str.length;
  var i = 0;
  var currlen = 0;
  var maxlen = 0;
  var startingIndex = -1;

  for (let i = 0; i < n; i++) {
    if (str[i] == " ") {
      if (currlen % 2 == 0) {
        if (maxlen < currlen) {
          maxlen = currlen;
          startingIndex = i - currlen;
        }
      }
      currlen = 0;
    } else {
      currlen++;
    }
  }

  // If last word is even length then
  if (currlen % 2 == 0) {
    if (maxlen < currlen) {
      maxlen = currlen;
      startingIndex = i - currlen;
    }
  }

  if (startingIndex == -1) return "-1";

  return str.substr(startingIndex, maxlen);
}

var str = "this is a test string";
console.log(findMaxLenEven(str));
