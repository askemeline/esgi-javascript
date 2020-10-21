function type_check_v1(arg, type) {
    return typeof arg == type
}

function type_check_v2(arg, type) {
    const correctType = type.type ? type_check_v1(arg, type.type) : true
    const correctValue = type.value ? arg === type.value : true
    const correctEnum = type.enum ? type.enum.includes(arg) : true

    return correctEnum && correctType && correctValue
}

function type_check_v3(arg, types) {
    return arg.map((ele) => {
        return type_check_v2(ele, types[ele])
    })
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
