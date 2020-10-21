function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(ucfirst("hello word"));

function capitalize(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.split(" ").map(ucfirst).join(" ");
}

console.log(capitalize("hello word"));

function camelCase(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.split(" ").map(ucfirst).join("");
}

console.log(camelCase("hello word"));

function snakeCase(chaine) {
  return chaine.replace(" ", "_").toLowerCase();
}

console.log(snakeCase("Hello wOrld"));

function leet(chaine) {
  return chaine.replace(/[aeiouy]/, "4");
}

console.log(leet("Hello wOrld"));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.leet = leet;
