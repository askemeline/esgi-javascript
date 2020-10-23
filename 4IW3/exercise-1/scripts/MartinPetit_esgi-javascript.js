/* 1) Ucfirst*/

function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.charAt(0).toUpperCase() + chaine.slice(1);
    }
}

/* 2) capitalize */

function capitalize(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        let splitString = chaine.split(' ');
        for (let i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
        }

        return splitString.join(' ');
    }
}


/* 3) camelCase */

function camelcase(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        let splitString = chaine.split(' ');
        for (let i = 0; i < splitString.length; i++) {
            splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
        }

        return splitString.join(' ').replace(/\s/g, "");
    }
}


/* 4) snake_case */

function snake_case(chaine) {
    if (typeof chaine !== "string" || chaine === "") {
        return "";
    } else {
        return chaine.replace(/\s/g, "_");
    }
}


/* 5) leet */

function leet(chaine) {

    if (typeof chaine !== "string") return "";
    const obj = {a:4,e:3,i:1,o:0,u:('_'), y:7}
    return chaine.replace(/[AEIOUY]/gi, function () {
        return obj[e.toLowerCase()] !== undefined ? obj[e.toLowerCase()] : e;
    });
}


/* prop_access */

let prairie = {
    animal : {
        type: {
            name: 'chien'
        }
    }
};


function prop_access(object, path) {

    if (object !== undefined && path !== undefined) {

        let splitString = path.split('.');

        var pathFinal = '';
        for (let i = 0; i < splitString.length; i++) {
            splitString[i] = "['" + splitString[i] + "']";

            pathFinal += splitString[i];

        }
        console.log(object['animal']['type']['name']);
        console.log(pathFinal);

        /* Je n'ai pas réussi à découper le path comme il fallait, je suis parti sur un découpage et une concaténation
        * en string mais forcément ça ne fonctionne pas*/
        console.log(Object.keys(object)); // peut être utilisé ça ?

        return object+pathFinal;

    } else if (path == "") {

        JSON.stringify(object);
    }

}

console.log(prop_access(prairie, 'animal.type.name'));



function verlan(chaine) {
    if (typeof chaine !== "string") return "";

    return chaine.split(" ").map(function (word) {
        return word.split("").reverse().join("");
    }).join(" ");
}


function yoda(chaine) {
    if (typeof chaine !== "string") return "";

    return chain.split(" ").reverse().join(" ");
}

function vig(string, chaine) {

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
