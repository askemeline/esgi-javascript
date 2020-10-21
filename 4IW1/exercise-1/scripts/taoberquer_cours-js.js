function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (value of chaine.split(' ')) {
      toRetrun += ' ' + ucfirst(value.toLowerCase());
  }

  return toRetrun.substring(1);
}

function camelCase(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (value of chaine.split(/[\s\_]+/)) {
      toRetrun += capitalize(value);
  }

  return toRetrun;
}

function snake_case(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (value of chaine.split(' ')) {
      toRetrun += '_' + value.toLowerCase();
  }
  
  return toRetrun.substring(1);
}

function leet(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  vowelObj = {
    'a' : '4', 
    'e' : '3', 
    'i' : '1', 
    'o' : '0', 
    'u' : '(_)', 
    'y' : '7'
  }

  toRetrun = "";
  for (value of chaine.split('')) {
    index = value.toLowerCase();
      toRetrun += index in vowelObj ? vowelObj[index] : value; 
  }
   
  return toRetrun;
}

function verlan (chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (value of chaine.split(' ')) {
    reverse = '';
    for (char of value.split('')) {
      reverse = char + reverse;
    }
    toRetrun += ' ' + reverse;
  }

  return toRetrun.substring(1);
}

function yoda(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (value of chaine.split(' ')) {
    toRetrun = value + ' ' + toRetrun;
  }

  return toRetrun.slice(0, -1);
}

function prop_access (obj, path) {

}

function vig() {

}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
