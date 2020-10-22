function ucfirst(string) {
    if (typeof string !== "string" && string !== "") return "";

    return string.charAt(0).toUpperCase() + string.slice(1)
}

function capitalize(string) {
    if (typeof string !== "string" && string !== "") return "";

    return string
        .toLowerCase()
        .split(" ")
        .map(word => ucfirst(word))
        .join(" ")
}

function camelCase(string) {
    if (typeof string !== "string" && string !== "") return "";

    console.log(string.replace(/\W/g, " "))
    return capitalize(string).replace(/\W/g, "");
}

function snake_case(string) {
    if (typeof string !== "string" && string !== "") return "";

    return string
        .toLowerCase()
        .replace(/(\W)+/g, "-");
}

function leet(string) {
    if (typeof string !== "string" && string !== "") return "";

    const cryptage = {
        "a": 4,
        "e": 3,
        "i": 1,
        "o": 0,
        "u": "(_)",
        "y": 7
    }

    for (const cryptageKey in cryptage) {
        if (string.indexOf(cryptageKey) !== -1) {
            string = string.replace(new RegExp(cryptageKey, 'g'), cryptage[cryptageKey])
        }
    }

    return string;
}

/*
    prop_access: obj, props
    Si Obj n'est pas défini et props n'est pas une string vide

    Récupération du chemin

    on test toute les clé et on récupère la valeur si exist
    return valeur
 */
function prop_access(obj, props) {
    if (obj === "undefined" || !obj) return obj
    if (typeof props !== "string" || !props) return obj

    let propPath = ""

    for (const accessKey of props.split(".")) {
        propPath += propPath.length > 0 ? `.${accessKey}` : accessKey

        if (!obj[accessKey]) {
            return `${propPath} don't exist`
        }
        obj = obj[accessKey]
    }

    return obj
}

function verlan(string) {
    if (typeof string !== "string" && string !== "") return ""

    return string.split(" ").map((word) => {
        return word.split("").reverse().join("")
    }).join(" ")
}

function yoda(string) {
    if (typeof string !== "string" && string !== "") return ""

    return string.split(" ").reverse().join(" ")
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

const prairie = {
    'animal': {
        'annaconda': {
            'color': "green"
        }
    }
}


// console.log("ucfirst", ucfirst("annaconda"))
// console.log("capitalize", capitalize("ToggleCase is_the coolest"))
// console.log("capitalize", camelCase("ToggleCase is_the coolest"))
// console.log("snake Case", snake_case("hello world"))
// console.log("leet", leet("annacoNDa"))
console.log("prop_access", prop_access(prairie, "animal.annaconda.color"))
// console.log("verlan", verlan("grand mère"))
// console.log("yoda", yoda("grand mère"))
// console.log("vig", vig("anticonstitutionnellement", "foo"))


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
