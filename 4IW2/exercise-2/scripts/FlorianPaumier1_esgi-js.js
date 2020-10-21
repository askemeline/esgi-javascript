function type_check_v1(arg, type) {
    if(typeof arg === type) return true;
    if(Array.isArray(arg)) return true;
    if(type === "undefined") return arg === undefined

    return arg === null;
}

function type_check_v2(arg, type) {
    const correctType = type.type ? type_check_v1(arg, type.type) : true
    const correctValue = type.value ? JSON.stringify(arg) === JSON.stringify(type.value) : true
    const correctEnum = type.enum ? type.enum.includes(arg) : true

    return correctEnum && correctType && correctValue
}

function type_check(arg, types) {
    return type_check_v2(arg, types) && Object.keys(types.properties.map((key => {
        return type_check(arg[key], types.properties[key])
    })))
}

console.log(type_check_v1(1, 'number'))


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
