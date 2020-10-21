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
  if (typeof chaine !== "string" || chaine === "") return "";
  return capitalize(chaine).replace(/\W/g, "");
}

function snake_case(chaine) {
  if (typeof chaine !== "string" || chaine === "") return "";
  return chaine.toLowerCase().replace(/\W/g, "_");
}

function leet(chaine) {
  return chaine.replace(/[aeiouy]/gi, function (e) {
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

console.log(leet("anaconda"));

function verlan(chaine) {
  return chaine
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

function yoda(chaine) {
  return chaine.split(" ").reverse().join(" ");
}

