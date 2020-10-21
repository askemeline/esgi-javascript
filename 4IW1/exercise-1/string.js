function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(ucfirst("Bonjour"));
console.log(ucfirst("bonjour"));
console.log(ucfirst("bonJOur"));

function capitalize(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine
    .split(" ")
    .map((word) => ucfirst(word.toLowerCase()))
    .join(" ");
}

function camelCase(chaine) {
  return capitalize(chaine).replace(/\W/g, "");
}

function snake_case