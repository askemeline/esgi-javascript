//variable test
const rabbit = "thE Baby raBBit is jumping even tough it's so small héhéhéhé";
const momo = "function :";
const emptyString = ""


//ucfirst
function ucfirst(str){
    if(typeof str !== "string" || str === "") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//ucfirst test
    // console.log(ucfirst(momo) + "ucfirst");
    // console.log(ucfirst(emptyString));
    // console.log(ucfirst(rabbit));

//capitalize
function capitalize(str){
     if(typeof str !== "string") return "";
     return str.toLowerCase().split(" ").map(word => ucfirst(word)).join(" ");
    // const regexCapitalize = /(^\w|(\s)\w)/gi; //check first char in string + char following space
    // return str.replace(regexCapitalize, x => x.toUpperCase());
}
//
//capitalize test
    // console.log(capitalize(emptyString));
    // console.log(capitalize(momo) + "capitalize");
    // console.log(capitalize(rabbit));

// camelCase
function camelCase(str) {
    if(typeof str !== "string") return "";
    return str.toLowerCase().split(" ").map(word => ucfirst(word)).join("");
    // const regexCamelCase = /(^\w|(\s)\w)/gi; // check first character in line + character following space
    // return str.replace(regexCamelCase, x => x.toUpperCase().trim());
  }
//camelCase test
    // console.log(camelCase(emptyString));
    // console.log(camelCase(momo) + "camelcase");
    // console.log(camelCase(rabbit));

//snake_case
function snake_case(str){
    if(typeof str !== "string" || str === "") return "";
    const regexSnakeCase = /\s/gi; //check all space in the string
    return str.toLowerCase().replace(regexSnakeCase, '_');
}
//snake_case test
    // console.log(snake_case(emptyString));
    // console.log(snake_case(momo) + "snake_case");
    // console.log(snake_case(rabbit));

//leet
function leet(str){
    if(typeof str !== "string" || str === "") return "";
    //const obj = {a:4, e:3, i:1, o:0, u:(_), y:7};
    // return str.replace(/[AEIOUY]/gi, function(e){
    //     obj[]
    // }
    //     )
    return str.replace(/a/gi, "4")
     .replace(/e/gi, "3")
     .replace(/i/gi, "1")
     .replace(/o/gi, "0")
     .replace(/u/gi, "(_)")
     .replace(/y/gi, "7");
}
//leet test
    // console.log(leet(emptyString));
    // console.log(leet(momo) + "leet");
    // console.log(leet(rabbit));

//verlan
function verlan(str){
    if(typeof str !== "string" || str === "") return "";
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
//verlan test
    // console.log(verlan(emptyString));
    // console.log(verlan(rabbit));

//yoda
function yoda(str){
    if(typeof str !== "string" || str === "") return "";
    return str.split(" ").reverse().join(" ");
}
//yoda test
    // console.log(yoda(emptyString));
    //console.log(yoda(rabbit));

// function vig(str, vigKey){
//     if((typeof str !== "string" || str === "") &&
//        (typeof vigKey !== "string"|| vigKey===" "))
//        return "";
//     return str;
// }

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
