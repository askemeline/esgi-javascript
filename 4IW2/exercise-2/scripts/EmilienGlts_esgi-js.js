function type_check_v1(input, type) {
    if(Array.isArray(input)) {
        return true;
    }
    if (input === null && type === 'object') {
        return false;
    } else if (type === 'null') {
        return input === null;
    }
    return typeof input === type;

}


module.exports.type_check_v1 = type_check_v1;
