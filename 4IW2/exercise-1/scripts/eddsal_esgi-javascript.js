function ucfirst(string) {
    if (typeof string !== 'string')
        return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(ucfirst('eddy'));


function capitalize(string) {
    if ((typeof string !== 'string') ||(typeof string == ''))
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
   return  string.replace(/[AEIOUY]/gi, function (e){
        switch (e) {
            case 'a':
                return 4;
            case 'i':
                return 1;
            case 'o':
                return 0;
            case 'u':
                return "(_)";
            case 'y':
                return 7;
            
        }
    })
}
console.log(leet('anaconda'));


function verlan(string) {
    if (typeof string !== 'string')
        return '';
    return string.split('').reverse().join('')
}
console.log(verlan('eddy salibi'));


function yoda(string) {
    if (typeof string !== 'string')
        return '';
  
    return string.split(" ").reverse.join(' ')
}
console.log(yoda('eddy salibi'));


function prop_access(prairie, string) {
    if (string !== null) {
        for (let string in prairie) {
            if ((prairie[string] !== null) || (prairie[string] !== undefined)) {
                console.log(prairie[string++])
            }
        console.log('string not found')
         
        }
            
        }
}
console.log(prop_access({
    animal: {
        Type: {
            Name:'chien'
        }
    }
}, 'animal.type'))


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
