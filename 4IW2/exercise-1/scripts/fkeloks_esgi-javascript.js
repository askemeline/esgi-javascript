function ucfirst(text) {
    if (typeof text !== 'string' || text === '') {
        return '';
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
}


console.info("\n========== ucfirst ==========");
console.log(ucfirst('mon texte'));
console.log(ucfirst('Mon texte'));
console.log(ucfirst('mOn Super Texte'));

function capitalize(text) {
    if (typeof text !== 'string' || text === '') {
        return '';
    }

    return text.toLowerCase().split(' ').map(word => ucfirst(word)).join(' ');
}

console.info("\n========== capitalize ==========");
console.log(capitalize('mon texte'));
console.log(capitalize('Mon texte'));
console.log(capitalize('mOn Super Texte'));

function camelCase(text) {
    if (typeof text !== 'string' || text === '') {
        return '';
    }

    return capitalize(text.replace(/[_-]/g, ' ')).replace(/[\s+]/g, '');
}

console.info("\n========== camelCase ==========");
console.log(camelCase('mon texte'));
console.log(camelCase('Mon texte'));
console.log(camelCase('mOn Super Texte'));
console.log(camelCase('ToggleCase is_the coolest'));

function snake_case(text) {
    if (typeof text !== 'string' || text === '') {
        return '';
    }

    return text.toLowerCase().replace(/\s+/g, '_');
}

console.info("\n========== snake_case ==========");
console.log(snake_case('mon texte'));
console.log(snake_case('Mon texte'));
console.log(snake_case('mOn Super Texte'));

function leet(text) {
    if (typeof text !== 'string' || text === '') {
        return '';
    }

    const replacements = {'a': '4', 'e': '3', 'i': '1', 'o': '0', 'u': '(_)', 'y': '7'};

    for (const [search, replacement] of Object.entries(replacements)) {
        text = text.replace(new RegExp(search, 'g'), replacement);
    }

    return text;
}

console.info("\n========== leet ==========");
console.log(leet('mon texte'));
console.log(leet('Mon texte'));
console.log(leet('mOn Super Texte'));
console.log(leet('anaconda'));

function prop_access(obj, str) {
    if (typeof str != "string") {
        return obj;
    }

    if (typeof obj != 'object' || obj == null) {
        console.log(str + ' not exist');
        return;
    }

    if (str === '') {
        return obj;
    }

    const props = str.split('.');
    let property = obj;

    props.forEach(function (prop) {
        if (!property.hasOwnProperty(prop)) {
            console.log(str + ' not exist');
            return;
        }

        property = property[prop];
    });

    return property;
}

console.info("\n========== prop_access ==========");
const a = {b: {c: {d: {e: 3}}}};
console.log(prop_access(a, 'b.y.d.e')); // b.y not exist
console.log(prop_access(a, 'b.c.d.e')); // 3 (valeur de a.b.c.d.e)

function verlan(text) {
    if (typeof text !== 'string' || text === '') {
        return '';
    }

    return text.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.info("\n========== verlan ==========");
console.log(verlan('Hello world'));

function yoda(text) {
    if (typeof text !== 'string' || text === '') {
        return '';
    }

    return text.split(' ').reverse().join(' ');
}

console.info("\n========== yoda ==========");
console.log(yoda('Hello world'));

function vig(message, key) {
    if (typeof message !== 'string' || typeof key !== 'string') {
        return '';
    }

    let result = [];
    let letterCounter = 0;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.split('');
    let rowIndex;
    let colIndex;

    while (letterCounter < message.length) {
        for (let i = 0; i < key.length; i++) {
            rowIndex = alphabet.indexOf(key[i]);
            colIndex = alphabet.indexOf(message[letterCounter]);

            result.push(alphabet[(rowIndex + colIndex) % alphabet.length]);
            letterCounter++;

            if (letterCounter >= message.length) break;
        }
    }

    return result.join('');
}

console.info("\n========== vig ==========");
console.log(vig('wikipedia', 'crypto'));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
