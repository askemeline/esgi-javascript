function ucfirst(str) {
  if (typeof str !== "string" || str.length == 0) return "";
  return str[0].toUpperCase() + str.substring(1);
}

function capitalize (str) {
  if (typeof str !== "string" || str.length == 0) return "";
  return str.split(" ").map(chr => ucfirst(chr.toLowerCase())).join(" ");
}

function camelCase(str) { // Marche pas avec des caractères speciaux
  if (typeof str !== "string" || str.length == 0) return "";
  return capitalize(str).replace(/(\W)+(.)/g, "");
  //return capitalize(str).replace(/[^a-zA-Z0-9]+(.)/g, "");
}

function snake_case(str) {
  if (typeof str !== "string" || str.length == 0) return "";
  return str.split(' ').map(chr => chr.toLowerCase()).join('_');
}

function leet(str) {
  if (typeof str !== "string" || str.length == 0) return "";
  const voyelles = {a:4, e:3, i:1, o:0, u:'(_)', y:7};
  return str.replace(/[aeiouy]/gi, function (crypto) {
        return voyelles[crypto.toLocaleLowerCase()] !== undefined
        ? voyelles[crypto.toLocaleLowerCase()] : crypto;
    });
}

function prop_access(obj, str) {
  if (typeof str !== "string" || str.length == 0) return obj;
  if(typeof obj !== "object" || obj == null) {
      console.log(str + " not exist");
      return;
  }
  const search = str.split('.');
  let propriete = obj;
  search.forEach(function (prop) {
      if(!propriete.hasOwnProperty(prop)) {
          console.log(str + " not exist");
          return;
      }
      propriete = propriete[prop];
  });
  return propriete;
}

function verlan(str) {
  if (typeof str !== "string" || str.length == 0) return "";
  return str.split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");
}

function yoda(str) {
  if (typeof str !== "string" || str.length == 0) return "";
  return str.split(" ").reverse().join(" ");
}

function vig(string, code) {
  if (typeof string !== "string") return "";
  if (string.length === 0) return string;

  while (code.length < string.length) {
    code += code;
  }
  code = code.substr(0, string.length);
  let codeIndex = 0;

  return string
    .split("")
    .map((letter, index) => {
      letter = letter.toLowerCase();
      const aCode = "a".charCodeAt(0);
      const letterNumber = letter.charCodeAt(0) - aCode; // [0-25]

      if (letterNumber < 0 || letterNumber > 25) return letter;

      const codeNumber = code.charCodeAt(codeIndex) - aCode; // [0-25]
      codeIndex++;

      return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
    })
    .join("");
}


/****************************************
 *          TEST EXERCICE 1             *
 ****************************************/

console.log(ucfirst("ceci est un test"));
console.log(capitalize("on essAye enCore uN pEu"));
console.log(camelCase("le Petit tesT qui passe Bien"));
console.log(camelCase("hé ho On arriVe ou Pas !"));
console.log(snake_case("on est Un snake la"));
console.log(leet("anaconda"));

var prairie = {'animal':{'type':{'name':'chien'}}};
console.log(prop_access(prairie,'animal.type'));

console.log(verlan("si tu comprends le mot, t'es le boss !"));
console.log(yoda("je suis maitre yoda"));




module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
