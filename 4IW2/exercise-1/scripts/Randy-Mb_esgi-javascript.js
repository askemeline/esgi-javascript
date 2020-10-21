function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

function capitalize(string) {
  if (typeof string !== "string" && string !== "") return "";

  return string
      .split(" ")
      .map((string) => {
          return ucfirst(string)
      }).join(" ")
}

function camelCase(string) {
  if (typeof string !== "string" && string !== "") return "";

  return capitalize(string).split(" ").join("")
}

function snake_case(string) {
  if (typeof string !== "string" && string !== "") return "";

  return string.toLowerCase().replace(" ", "_")
}

function leet(string) {
  if (typeof string !== "string" && string !== "") return "";

  const cryptage = {
      "a": 4,
      "e": 3,
      "i": 1,
      "o": 0,
      "u": "(_)",
      "y": 7
  }

  string = string.toLowerCase()

  for (const cryptageKey in cryptage) {
      if (string.indexOf(cryptageKey) !== -1) {
          string = string.replace(new RegExp(cryptageKey, 'g'), cryptage[cryptageKey])
      }
  }

  return string;
}

function verlan(string) {
  if (typeof string !== "string" && string !== "") return ""

  return string.split(" ").map((word) => {
      return word.split("").reverse().join("")
  }).join(" ")
}

function yoda(string) {
  if (typeof string !== "string" && string !== "") return ""

  return string.split(" ").reverse().join(" ")
}

function vig(key, string) {
  if (typeof key !== "string" && key !== "") return ""
  if (typeof string !== "string" && string !== "") return ""

  const msgLength = string.length
  const keyLength = key.length

  let cryptage = "";

  for (let i = 1; i < msgLength; i++) {
      let charCode = string.charCodeAt(i-1)-65
      let decalage = key.charCodeAt((i-1)%keyLength)-65
      let char = String.fromCharCode(65+(charCode+decalage)%26)

      cryptage += char
  }

  return cryptage
}

const animal = {
  'jaguar': {
      'color': "jaune"
  }
}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
