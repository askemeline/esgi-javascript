/**
 * 
 * @param {*} word 
 */
function ucfirst(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1)
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

/**
 * @param {*} characterString 
 */
function camelCase(characterString)
{
    let words = characterString.split(' ')

    for (index in words) {
        words[index] = ucfirst(words[index])
    }

    words[0] = lcfirst(words[0])

    return words.join('')
}


module.exports.ucfirst = ucfirst;
module.exports.camelCase = camelCase;
module.exports.prop_access = prop_access;
