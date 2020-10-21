function type_check_v1(input, type) {
    return typeof input === type;
}

console.log(type_check_v1(4, 'object'));

module.exports.type_check_v1 = type_check_v1;
