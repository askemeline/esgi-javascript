function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (chaine.split(' ') of value) {
      toRetrun += ' ' + ucfirst(value);
  }

  return toRetrun.substring(1);
}

function camelCase(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (chaine.split(' ') of value) {
      toRetrun += ucfirst(value);
  }

  return toRetrun;
}

function snake_case(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (chaine.split(' ') of value) {
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
  for (chaine.split('') of value) {
      toRetrun += value.toLowerCase in vowelObj ? vowelObj.value.toLowerCase : value; 
  }
   
  return toRetrun;
}

function prop_access (obj, path) {

}

function verlan (chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (chaine.split(' ') of value) {
    reverse = '';
    for (value.split('') of char) {
      reverse = char + reverse;
    }
    toRetrun += ' ' + reverse;
  }

  return toRetrun;
}

function yoda(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  toRetrun = "";
  for (chaine.split(' ') of value) {
    toRetrun = value + ' ' + toRetrun;
  }

  return toRetrun;
}

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
