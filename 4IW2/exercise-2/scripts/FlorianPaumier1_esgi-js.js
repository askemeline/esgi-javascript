function type_check_v1(arg, type) {
    if(typeof arg === type) return true
    if(type === 'object'){
        switch (type){
            case 'null':
                return arg === null
            case 'array':
                return Array.isArray(arg)
            default:
                return arg !== null && !Array.isArray(arg)
        }
    }

    return false;
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



module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
