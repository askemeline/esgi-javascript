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
    if (typeof string !== "string" || string === "") return "";
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}


function snake_case(string) {
    if (typeof string !== "string" || string === "") return "";
    return string.replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_');
}

function prop_access(object, path)
{
    if (typeof object != "object" || object == null) return path + "not exist";
    if (typeof path != "string" || path == "") return object;

    let splitPath = path.split('.');

    for (let element of splitPath) {
        if (typeof object[element] == "undefined" ) return path + "not exist";
        object = object[element];
    }
}

function leet(string) {
    if (typeof string !== "string" || string === "") return "";
    const alphabets = {
        a: "4",
        e: "3",
        i: "1",
        o: "0",
        u: "(_)",
        y: "5",
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
