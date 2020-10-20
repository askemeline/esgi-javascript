function ucfirst(string) {
    if (typeof string !== 'string')
        return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(ucfirst('eddy'));


function capitalize(string) {
    if (typeof string !== 'string')
        return '';
    var str = string.split(' ')
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);     
    }
    return str.join(' '); 
}

console.log(capitalize('eddy salibi'));

function camelCase(string) {
    if (typeof string !== 'string')
        return '';
        var str = string.split(' ')
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);     
        }
        return str.join(''); 
}
console.log(camelCase('eddy salibi'));


function snakeCase(string) {
    if (typeof string !== 'string')
        return '';
        var str = string.split(' ')
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toLowerCase() + str[i].substring(1);     
        }
        return str.join('_'); 
}
console.log(snakeCase('eddy salibi'));

function leet(string) {
    if (typeof string !== 'string')
        return '';
    return string.replace('A', "4").replace('I', "1").replace('O', "o").replace('U', "_").replace('Y', "7")
}
console.log(leet('I WANT TO  WU0Y'));

function verlan(string) {
    if (typeof string !== 'string')
        return '';
    return string.split('').reverse().join('')
}
console.log(verlan('eddy salibi'));


function yoda(string) {
    if (typeof string !== 'string')
        return '';
    var str = string.split(' ')
;
    var firstChar = string.replace(str[1], '')
    var secondChar = string.replace(str[0], '')

    return secondChar +' '+ firstChar
}
console.log(yoda('eddy salibi'));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
