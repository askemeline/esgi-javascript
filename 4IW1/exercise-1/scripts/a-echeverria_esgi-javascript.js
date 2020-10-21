function ucfirst(string) {
    return typeof string === "string" && string !== '' ? string[0].toUpperCase()+string.slice(1) : '';
}

function capitalize(string) {
    let res = '';
    if (typeof string !== "string" || string === '') {
        return '';
    }
    const split = string.split(' ');
    for (let i=0; i<split.length; i++) {
        res += ucfirst(split[i])+' ';
    }
    return res.trim();
}

function camelCase(string) {
    return capitalize(string).replace(/\W/g, '');
}

function snake_case(string) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    return string.toLowerCase().replace(/ /g, '_');
}

function leet(string) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    const letter = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"];
    const crypt  = ["4", "3", "1", "0", "_", "7", "4", "3", "1", "0", "(_)", "7"];

    let res = '';
    for (let i = 0; i<string.length; i++) {
        if (letter.includes(string[i])) {
            res += crypt[letter.indexOf(string[i])];
        } else res += string[i];
    }
    return res;
}

function verlan(string) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    let res = [];
    const split = string.split(' ');
    for (let word of split) {
        for (let i = word.length; i > 0; i--) {
            res[i] += word[i-1]
        }
    }
    return res.join(' ');
}

function yoda(string) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    let res = '';
    const split = string.split(' ');
    for (let i = split.length; i > 0; i--) {
        res += split[i-1] + ' ';
    }
    return res.trim();
}

function prop_access(object, path) {

}

function vig(string, key) {
    if (typeof string !== "string" || string === '') {
        return '';
    }
    const UpperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const LowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let res = "";
    for (let i = 0; i<string.length; i++) {
        let keyNb;
        if (UpperLetters.includes(key)) {
            keyNb = UpperLetters.indexOf(key);
        }else keyNb = LowerLetters.indexOf(key);
        if (UpperLetters.includes(string[i])) {
            res += UpperLetters[((UpperLetters.indexOf(string[i]))+keyNb)%26];
        }else if (LowerLetters.includes(string[i])) {
            res += LowerLetters[((LowerLetters.indexOf(string[i]))+keyNb)%26];
        }
    }
    return res;
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
