/**
 * 
 * @param {*} word 
 */
function ucfirst(word)
{
    return typeof word === "string" ? word.charAt(0).toUpperCase() + word.slice(1) : null;
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


module.exports.ucfirst = ucfirst;
module.exports.prop_access = prop_access;
