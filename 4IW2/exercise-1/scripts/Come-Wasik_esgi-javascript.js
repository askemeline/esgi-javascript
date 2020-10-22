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
    let strParts = machaine.toLowerCase().split(" ");
    for (let i = 0; i < strParts.length; i++) {
        strParts[i] = ucfirst(strParts[i]);
        
    }
    return strParts.join(" ");
    
}

function camelCase(machaine) {
    if(typeof machaine !== "string" || machaine === "") {
        return "";
    }
    return capitalize(machaine).split(" ").join("");
}

function snake_case(machaine) {
    if(typeof machaine !== "string" || machaine === "") {
        return "";
    }
    return machaine.toLowerCase().replace(/(\W)/g, "_")
}

function leet(machaine) {
    correspondance = {
        a: '4',
        A: '4',
        e: '3',
        E: '3',
        i: '1',
        I: '1',
        o: '0',
        O: '0',
        u: '_',
        U: '_',
        y: '7',
        Y: '7',
    };

    for (const key in correspondance) {
        machaine = machaine.split(key).join(correspondance[key]);
    }
    return machaine;
}


function prop_access(object, prop_path) {
    if(typeof object !== "object") {
        return "";
    }
    if(typeof prop_path !== "string" || prop_path === "" || prop_path === null) {
        return object;
    }

    let pathParts = prop_path.split(".");
    let content = object;

    for (const element of pathParts) {
        if((element in content) === false) {
            return prop_path+" not exist";
        }
        content = content[element];
    }
    return content;
}

function verlan(machaine) {
    if(typeof machaine !== "string" || machaine === "") {
        return "";
    }

    let output = "";

    for (const element of machaine.split(" ")) {
        output += element.split("").reverse().join("")+ " ";
    }
    return output.trim();
}

function yoda(machaine) {
    if(typeof machaine !== "string" || machaine === "") {
        return "";
    }

    return machaine.split(" ").reverse().join(" ");
}

function vig(toEncrypt, key) {
    if(typeof toEncrypt !== "string" || toEncrypt === "" || typeof key !== "string" || key === "") {
        return "";
    }

    toEncrypt = toEncrypt.toLowerCase();
    key = key.toLowerCase();

    let output = "";
    let j = 0;

    for (let i = 0; i < toEncrypt.length; i++) {
        if(j >= key.length) {
            j = 0;
        }

        const curLetterId = toEncrypt.charCodeAt(i) - 97;
        const curKeyId = key.charCodeAt(j++) - 97;

        const newLetterId = (curLetterId + curKeyId) % 26;
        output += String.fromCharCode((newLetterId + 97));
    }
    return output;
}

const prairie = {
    animal : {
        type : {
            name: "chien"
        }
    }
};

console.log(ucfirst("hello world"));
console.log(capitalize("hello WORLD"));
console.log(camelCase("toggle class is the colest"));
console.log(snake_case("hello world"));
console.log(leet("anAconda"));
console.log(prop_access(prairie, "animal.type.name"));
console.log(prop_access(prairie, "animal.gender"));
console.log(verlan("Hello world"));
console.log(yoda("Hello world"));
console.log(vig("aBc", "XYZ"));

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
module.exports.leet = leet;
module.exports.verlan = verlan;
module.exports.yoda = yoda;
module.exports.vig = vig;
module.exports.prop_access = prop_access;
