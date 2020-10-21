function type_check_v1(arg1, arg2) {
    if (arg1 === null || arg1 === undefined) {
        return false
    }

    if (typeof(arg1) === arg2) {
        return true
    }
}

console.log(type_check_v1("salut", "string"))

module.exports.type_check_v1 = type_check_v1;
