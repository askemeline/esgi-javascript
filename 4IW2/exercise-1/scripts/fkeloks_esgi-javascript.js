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
    return capitalize(text).replace(/[\s+_-]/g, '');
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

function prop_access(object, path) {
    let result = object
    path.split('.').forEach(element => {
        if (result[element]) {
            return `${path} not exist`
        }

        if (result[element] === null || result[element] === '') {
            return object
        }

        result = result[element]
    })

    return result
}

console.info("\n========== prop_access ==========");
console.log('xxx');

function verlan(text) {
    if (typeof text !== 'string' || text === '') {
        return '';
    }

    return text.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.info("\n========== verlan ==========");
console.log(verlan('Hello world'));

function yoda(text) {
    return text.split(' ').reverse().join(' ');
}

console.info("\n========== yoda ==========");
console.log(yoda('Hello world'));

function vig(key, string) {
    if (typeof key !== 'string' && key !== '') return ''
    if (typeof string !== 'string' && string !== '') return ''

    const msgLength = string.length
    const keyLength = key.length

    let cryptage = '';

    for (let i = 1; i < msgLength; i++) {
        let charCode = string.charCodeAt(i - 1) - 65
        let decalage = key.charCodeAt((i - 1) % keyLength) - 65
        let char = String.fromCharCode(65 + (charCode + decalage) % 26)

        cryptage += char
    }

    return cryptage
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
