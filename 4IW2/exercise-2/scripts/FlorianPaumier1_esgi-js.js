function type_check_v1(arg, type) {
    return typeof arg === type
}

function type_check_v2(arg, type) {
    return type_check_v1(arg, type.type) && arg === type.value && type.enum.includes(arg)
}

function type_check_v3(arg, types) {
    return arg.map((ele) => {
        return type_check_v2(ele, types[ele])
    })
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
