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
    return capitalize(string).replace(/[^a-z-A-Z0-9]+/g, "");
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


function prop_access(value, string) {
   if (!value) return {};
   if(!string) return value;
   
   let stringArray = string.split(".");
   
   for (let i = 0; i < stringArray.length; i++) {
      value = value[stringArray[i]];
      if(value === undefined) {
        console.log(stringArray.slice(0, i+1).join('.') + " not exist ");
        return null; 
      }
   } 

   return value;
} 




console.log(prop_access({
    "animal":{
        "type":{
            "name": "dog"
        }
    }
}, 
"animal.type.name"));
console.log(prop_access({
    "animal":
    {
        "type":{
            "name": "dog"
        }
    }
}, "animal.type"
));
console.log(prop_access({
    "animals":[
    {
        "type":{
            "name": "dog"
        }
    },
    {
        "type":{
            "name": "cat"
        }
    }
   ]
}, "animals.1.type"
));
console.log(prop_access(
    {"animal":{"type":{"name": "dog"}}}, "animal.gender"
));
console.log(prop_access(
    {"animal":{"type":{"name": "dog"}}}, ""
));
console.log(prop_access(
    null, "test"
));
console.log(prop_access(
    {"animal":{"type":{"name": "dog"}}}, null
));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
