module.exports = function check(str, bracketsConfig) {
  let str2 = str.split('');
  let brackets = bracketsConfig;
  let arr = [];

  for (let i = 0; i < str2.length; i++) {
    for (let j = 0; j < brackets.length; j++) {
      if (!(str2[i] === brackets[j][1] && arr[arr.length - 1] === brackets[j][0])) {
        if (str2[i] === brackets[j][0])
          arr.push(str[i]);
      } else arr.pop();
    }
  }

  if (str2.length % 2 !== 0) {
    return false;
  }
  if (arr.length === 0) {
    return true;
  }
  else {
    return false;
  }
}
