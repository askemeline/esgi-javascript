function ucfirst(string) {
   if(typeof string !== "string") return "";
   if(string.length === 0) return string;
   return string.charAt(0).toUpperCase() + string.substr(1);
}


function capitalize(string) {
   if (typeof string !== "string") return "";
   if (string.length === 0) return string;

   array = string.split(" ");
   return array
   .map((item) => item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
   .join(" ");
}


function camelCase(string) {
    return capitalize(string).replace(/[^a-a-A-Z0-9]+/g, "");
}


function snake_case(string) {
   if(typeof string !== "string") return "";
   if(string.length === 0) return string;

   return string.toLowerCase().replace(/[^a-z-A-Z0-9]+/g, "_");
}


function leet(string) {
   if(typeof string !== "string") return "";
   if(string.length === 0) return string;

   return string.replace(/[aeiou]/ig, function(letter) {
   switch(letter) {
      case 'a':
      case 'A':
      return 4;
      case 'e':
      case 'E':
      return 3;
      case 'o':
      case 'O':
      return 0;
      case 'u':
      case 'U':
      return '(_)';
   }
   });
}


function verlan(string) {
    if(typeof string !== "string") return "";
    if(string.length === 0) return string;

   return string.split(" ").map(
      word => word.split("").reverse().join("")
     ).join("");
}


function yoda(string) {
    if(typeof string !== "string") return "";
    if(string.length === 0) return string;
    return string.split("").reverse().join(" ");
}


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
