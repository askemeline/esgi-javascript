//ucfirst
function ucfirst(str){
    if(typeof str !== "string" || str === "") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//capitalize
function capitalize(str){
     if(typeof str !== "string") return "";
    //return str.toLowerCase().split(" ").map(word => ucfirst(word)).join(" ");
    const regexCapitalize = /(^\w|(_)\w|(\s)\w)/gi; //check first char in string + first char following space or _
    return str.toLowerCase().replace(regexCapitalize, x => x.toUpperCase());
}
// camelCase
function camelCase(str) {
    if(typeof str !== "string") return "";
    return str.toLowerCase().split(" ").map(word => ucfirst(word)).join("");
    // const regexCamelCase = /(^\w|(\s)\w)/gi; // check first character in line + character following space
    // return str.replace(regexCamelCase, x => x.toUpperCase().trim());
}
//snake_case
function snake_case(str){
    if(typeof str !== "string" || str === "") return "";
    const regexSnakeCase = /\s/gi; //check all space in the string
    return str.toLowerCase().replace(regexSnakeCase, '_');
}

//leet
function leet(str){
    if(typeof str !== "string" || str === "") return "";
    return str.replace(/a/gi, "4")
     .replace(/e/gi, "3")
     .replace(/i/gi, "1")
     .replace(/o/gi, "0")
     .replace(/u/gi, "(_)")
     .replace(/y/gi, "7");
}

//verlan
function verlan(str){
    if(typeof str !== "string" || str === "") return "";
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

//yoda
function yoda(str){
    if(typeof str !== "string" || str === "") return "";
    return str.split(" ").reverse().join(" ");
}


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
