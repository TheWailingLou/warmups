// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.  Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, len) {
  var dots = ['.','.','.']
  console.log(str.length, len)
  if (str.length < len) {
    return str
  } else if (len < 3) {
    return str.split('').slice(0, len).concat(dots).join('');
  }  else {
    return str.split('').slice(0, len-3).concat(dots).join('');
  }
}

module.exports = {
  truncateString: truncateString
};
