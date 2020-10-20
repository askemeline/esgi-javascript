function ucfirst(machaine) {
    if(typeof machaine !== "string" || machaine === "") {
        return "";
    }
        return machaine.charAt(0).toUpperCase() + machaine.slice(1);
}

function capitalize(machaine) {
    if(typeof machaine !== "string" || machaine === "") {
        return "";
    }
    let strParts = machaine.split(" ");
    for (let i = 0; i < strParts.length; i++) {
        strParts[i] = ucfirst(strParts[i]);
        
    }
    return strParts.join(" ");
    
}

function camelCase(machaine) {
    if(typeof machaine !== "string" || machaine === "") {
        return "";
    }
    return capitalize(machaine).replace(" ", "");
}

function leet(machaine) {
    correspondance = {
        a: '4',
        e: '3',
        i: '1',
        o: '0',
        u: '_',
        y: '7'
    };

    for (const key in correspondance) {
        machaine = machaine.replace(key, correspondance[key]);
    }
    return machaine;
}


console.log(ucfirst("hello"));
console.log(capitalize("hello world"));
console.log(camelCase("hello world"));
console.log(leet("anaconda"));


module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.leet = leet;
