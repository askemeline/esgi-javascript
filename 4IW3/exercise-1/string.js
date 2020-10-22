function ucfirst(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

console.log(ucfirst('Bonjour la France'))
console.log(ucfirst('bonjour la France'))