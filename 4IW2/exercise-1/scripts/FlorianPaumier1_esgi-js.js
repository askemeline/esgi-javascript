function ucfirst(string) {
    if (typeof string !== "string" && string !== "") return "";

    return string.charAt(0).toUpperCase() + string.slice(1)
}

function capitalize(string) {
    if (typeof string !== "string" && string !== "") return "";

    return string
        .toLowerCase()
        .split(" ")
        .map((string) => {
            return ucfirst(string)
        }).join(" ")
}

function camelCase(string) {
    if (typeof string !== "string" && string !== "") return "";

    return capitalize(string.replace(/-_,/, " ").trim()).split(" ").join("")
}

function snake_case(string) {
    if (typeof string !== "string" && string !== "") return "";

    return string.toLowerCase().replace(/ /g, "_")
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
    if (obj === "undefined") return obj
    if (typeof props !== "string" && props === "") return obj

    let access = props.split(".")
    let propPath = access[0]
    let value = obj

    for (let i = 0; i < access.length; i++) {
        propPath += `.${access[i]}`

        if (!value[access[i]]) {
            return `${propPath} don't exist`
        }
        value = value[access[i]]
    }

    return value
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

function vig(string,key) {
    if (typeof key !== "string" && key !== "") return ""
    if (typeof string !== "string" && string !== "") return ""

    string = string.toLowerCase()

    const msgLength = string.length
    const keyLength = key.length

    let cryptage = "";

    for (let i = 1; i <= msgLength; i++) {
        let charCode = string.toLowerCase().charCodeAt(i-1)-96
        let decalage = key.toLowerCase().charCodeAt((i-1)%keyLength)-96
        let char = String.fromCharCode((charCode+decalage)%26+96)

        cryptage += char
    }

    return cryptage
}

const animal = {
    'annaconda': {
        'color': "green"
    }
}


// console.log("ucfirst", ucfirst("annaconda"))
// console.log("capitalize", capitalize("hello world"))
// console.log("camel Case", camelCase("hello world"))
// console.log("snake Case", snake_case("hello world"))
// console.log("leet", leet("annacoNDa"))
// console.log("prop_access", prop_access(animal, "annaconda.color"))
// console.log("verlan", verlan("grand mère"))
// console.log("yoda", yoda("grand mère"))
console.log("vig", vig("anticonstitutionnellement", "foo"))


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
