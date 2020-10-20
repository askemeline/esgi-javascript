let ucfirst = (str) =>
  str === "" || typeof str !== "string"
    ? ""
    : str.charAt(0).toUpperCase() + str.slice(1);

function capitalize(str, join = " ") {
  if (str === "" || typeof str !== "string") {
    return "";
  }

  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = ucfirst(words[i]);
  }
  words = words.join(join);
  return words;
}

let camelCase = (str) => capitalize(str, "");
let snake_case = (str) => str.toLowerCase().replace(" ", "_");

function leet(str) {
  for (i in str) {
    switch (str[i]) {
      case ("A", "a"):
        str = str.replace(str[i], "4");
        break;
      case ("E", "e"):
        str = str.replace(str[i], "3");
        break;
      case ("I", "i"):
        str = str.replace(str[i], "1");
        break;
      case ("O", "o"):
        str = str.replace(str[i], "0");
        break;
      case ("U", "u"):
        str = str.replace(str[i], "_");
        break;
      case ("Y", "y"):
        str = str.replace(str[i], "7");
        break;
      default:
        break;
    }
  }
  return str;
}
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function verlan(str) {
  let words = str.split(" ");

  for (i in words) {
    words[i] = reverse(words[i]);
  }
  words = words.join(" ");
  return words;
}

function yoda(str) {
  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += " " + words[words.length - i - 1];
  }
  return result;
}


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
