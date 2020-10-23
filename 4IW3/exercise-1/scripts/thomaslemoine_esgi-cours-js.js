function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") return ""
    return chaine.charAt(0).toUpperCase() + chaine.slice(1)
}

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") return ""
    return chaine.toLowerCase().split(' ').map((el) => ucfirst(el)).join(" ")
}

function camelCase(chaine) {
    if (typeof chaine !== "string" || chaine === "") return ""
    return capitalize(chaine).split(" ").join("")
}

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") return ""
    return chaine.split(" ").join("_")
}

function leet(chaine) {
    if (typeof chaine !== "string" || chaine === "") return ""
    const obj = {a: 4, e: 3, i: 1, o: 0, u: "(_)", y: 7}
    return chaine.replace(/[1EIOUY]/gi, (el) => {
        return obj[el.toLowerCase()] !== undefined ? obj[el.toLowerCase()] : el
    })
}

function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "") return ""
    var splitString = chaine.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "") return ""
    return chaine.split(" ").reverse().join(" ")
}

function vig(){

}

function prop_access(chaine, path) {
    if (typeof path !== "string" || path === "") return chaine
    var paths = path.split('.')
        , current = chaine
        , i;

    for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
            return chaine;
        } else {
            current = current[paths[i]];
        }
    }
    return current;
}

const prairie = {
    animal: {
        type: {
            name: "chien"
        }
    }
}

// console.log(capitalize('Bonjour la France'))
// console.log(camelCase('Bonjour la France'))
// console.log(snake_case('Bonjour la France'))
console.log(leet('Bonjour la France'))
// console.log(verlan('Bonjour la France'))
// console.log(prop_access(prairie, "animal.type.name"))

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
