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
  return capitalize(chaine).replace(/\W/g, "");
}

console.log(camelCase("bonjour LA 'FraNce"));

function snake_case(chaine) {
  return chaine.toLowerCase().replace(/(\W)+/g, "-");
}

console.log(snake_case("bonjour LA 'FraNce"));

function leet(chaine) {
  return chaine.replace(/[AEIOUY]/gi, function (e) {
    switch (e.toLowerCase()) {
      case "a":
        return 4;
      case "e":
        return 3;
      case "i":
        return 1;
      case "o":
        return 0;
      case "u":
        return "(_)";
      case "y":
        return 7;
    }
  });
}

console.log(leet("AnaCOnDA"));

function verlan(chaine) {
    return chaine.split(" ").map()
}