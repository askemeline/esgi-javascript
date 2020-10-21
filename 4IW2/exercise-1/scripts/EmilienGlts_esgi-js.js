function ucfirst(chaine){
    if (typeof chaine !== 'string' || chaine === '')
        return '';
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {
    if (typeof chaine !== 'string' || chaine === '') {
        return '';
    }

    return chaine.split(' ').map(word => ucfirst(word.toLowerCase())).join(' ');
}

function pascalCase(chaine) {
    if (typeof chaine !== 'string' || chaine === '') {
        return '';
    }

    return chaine.split(' ').map(word => ucfirst(word.toLowerCase())).join('');
}

function snakeCase(chaine) {
    if (typeof chaine !== 'string' || chaine === '') {
        return '';
    }

    return chaine.split(' ').map(word => word.toLowerCase()).join('_');
}

function leet(chaine) {
    for (i in chaine) {
        switch (chaine[i]) {
            case ('A', 'a'):
                chaine = chaine.replace(chaine[i], '4');
                break;
            case ('E', 'e'):
                chaine = chaine.replace(chaine[i], '3');
                break;
            case ('I', 'i'):
                chaine = chaine.replace(chaine[i], '1');
                break;
            case ('O', 'o'):
                chaine = chaine.replace(chaine[i], '0');
                break;
            case ('U', 'u'):
                chaine = chaine.replace(chaine[i], '(_)');
                break;
            case ('Y', 'y'):
                chaine = chaine.replace(chaine[i], '7');
                break;
            default:
                break;
        }
    }
    return chaine;
}
function reverse(chaine) {
    let result = '';
    for (let i = chaine.length - 1; i >= 0; i--) {
        result += chaine[i];
    }
    return result;
}

function verlan(chaine) {
    let words = chaine.split(' ');

    for (i in words) {
        words[i] = reverse(words[i]);
    }
    words = words.join(' ');
    return words;
}

function yoda(chaine) {
    let words = chaine.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
        result += ' ' + words[words.length - i - 1];
    }
    return result;
}

function prop_access(objet, chaine) {
    if (typeof chaine != "string"){
        return objet;
    }
    if(typeof objet != 'object' || objet == null) {
        console.log(chaine + ' not exist');
        return;
    }
    if (chaine === '') {
        return objet;
    }
    const props = chaine.split('.');
    let propriete = objet;
    props.forEach(function (prop) {
        if(!propriete.hasOwnProperty(prop)) {
            console.log(chaine + ' not exist');
            return;
        }
        propriete = propriete[prop];
    });
    return propriete;
}

var prairie = {'animal':{'type':{'name':'chien'}}};

console.log(ucfirst('jul'));
console.log(capitalize('hé meRCé lA zoné'));
console.log(pascalCase('hé mercé la zoné'));
console.log(snakeCase('hé meRcé la zoné'));
console.log(leet('merci bien la zone et surtout merci julito'));
console.log(reverse('merci bien la zone et surtout merci julito'));
console.log(verlan('merci bien la zone et surtout merci julito'));
console.log(yoda('merci bien la zone et surtout merci julito'));
console.log(prop_access(prairie,'animal.type'));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.prop_access = prop_access;
