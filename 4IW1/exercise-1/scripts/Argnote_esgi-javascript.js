function ucfirst(chaine)
{
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine)
{
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(s => ucfirst(s)).join(' ');
}

function camelCase(chaine)
{
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').map(s => ucfirst(s)).join('');
}

function snake_case(chaine)
{
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.split(' ').join('_');
}
// console.log(capitalize('je suis un test'));
// console.log(snakeCase_case('je suis un test'));

module.exports.ucfirst = ucfirst;
module.exports.capitalize = capitalize;
module.exports.camelCase = camelCase;
module.exports.snake_case = snake_case;
