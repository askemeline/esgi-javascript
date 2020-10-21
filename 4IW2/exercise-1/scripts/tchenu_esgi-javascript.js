/**
 * 
 * @param {*} word 
 */
function ucfirst(word)
{
    if (typeof word === "string") {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    return null;    
}

/**
 * 
 * @param {*} word 
 */
function lcfirst(word)
{
    return word.charAt(0).toLowerCase() + word.slice(1)
}

function prop_access(object, path) {
    let result = object
    path.split('.').forEach(element => {
        if(result[element]) {
            return `${path} not exist`
        }

        if(result[element] === null || result[element] === "") {
            return object
        }

        result = result[element]
    })

    return result
}

function camelCase(string) {
    const separators = ['-', '_'];

    separators.forEach(function (separator) {
        string = string.replace(separator, ' ')
    })

    let words = string.split(' ').map((word) => ucfirst(word.toLowerCase()))

    return words.join('')
}


module.exports.ucfirst = ucfirst;
module.exports.camelCase = camelCase;
module.exports.prop_access = prop_access;
