function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}
function capitalize(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";

  return chaine
    .split(" ")
    .map((word) => ucfirst(word.toLowerCase()))
    .join(" ");
}

console.log(capitalize("bonjour LA FraNce"));

function camelCase(chaine) {
  return capitalize(chaine).replace(/ /g, "");
}

console.log(camelCase("bonjour LA FraNce"));
