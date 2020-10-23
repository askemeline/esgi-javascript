/*
    Exercices Khalil 
*/

/*

function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return "";
    return chaine.split('').map(word => ucfirst(word.toLowerCase())).join('');
}

function camelCase(chaine) {
    return capitalize(chaine).replace(/\W/g, "");
}

function snake_case(chaine) {
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

function verlan(chaine){
    return chaine.spilt(" ").map((word) => word.split("").reverse().join("")).join(" ");
}

function yoda(chaine){
    return chaine.spilt(" ").reverse().join("");
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


console.log(camelCase("Bonjour hEllo"));
console.log(camelCase("bonjour hello"));
console.log(camelCase("BonJOur Hello"));
console.log(leet("anaconda"));

*/


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
  const chaine = "anaconda";
  console.log(`${chaine} => ${leet(chaine)}`);
  
  function verlan(chaine) {
    return chaine
      .split(" ")
      .map((word) => word.split("").reverse().join(""))
      .join(" ");
  }
  
  function yoda(chaine) {
    return chaine.split(" ").reverse().join(" ");
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

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
