function ucfirst(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function capitalize(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.replace(/\w\S*/g, function(word){
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}


function camelCase(string) {
    if (typeof string !== "string" && string !== "") return "";
    return capitalize(string).replace(/\W/g, "");
}

function snake_case(string) {
    if (typeof string !== "string" && string !== "") return "";
    return string.toLowerCase().replace(/(\W)+/g, "_");
}

function prop_access(object, propAccess) {
    if ((typeof propAccess !== "string" || !propAccess) && (object === "undefined" || !object)) return object;

    let prop = "";

    for (const key of propAccess.split(".")) {
        prop += prop.length > 0 ? `.${key}` : key

        if (!object[key]) {
            return `${prop} not exist`
        }
        object = object[key]
    }

    return object;
}

function leet(string) {
    if (typeof string !== "string" || string === "") return "";
    const alphabets = {
        a: "4",
        e: "3",
        i: "1",
        o: "0",
        u: "(_)",
        y: "7",
    }

    for (let i = 0; i < string.length; i++) {
        if (alphabets[string[i]]) {
            string = string.replace(string[i], alphabets[string[i]]);
        }
    }
    return string;
}


function verlan(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.split("").reverse().join("").split(" ").reverse().join(" ")
}


function yoda(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.split(" ").reverse().join('');
}


function vig(string, code)
{
    if (typeof string !== "string") return "";
    if (string.length === 0) return string;

    while (code.length < string.length) {
        code += code;
    }

    code = code.substr(string.length);

    let codeIndex = 0;

    return string.split("").map((letter, index) => {
        letter = letter.toLowerCase();
        const aCode = "a".charCodeAt(0);
        const letterNumber = letter.charCodeAt(0) - aCode;

        if (letterNumber < 0 || letterNumber > 25) return letter;
        const codeNumber = code.charCodeAt(codeIndex) - aCode;
        codeIndex++;

        return String.fromCharCode(((letterNumber + codeNumber) % 26) + aCode);
    }).join("");

}


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
