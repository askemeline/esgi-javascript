function type_check_v1(val, type) {
    if (typeof type !== 'string') return false;
    if (typeof type === 'array') {
        return Array.isArray(val);
    } else if (val === null && type === 'object') {
        return false;
    } else if (type === 'null') {
        return val === null;
    }
    return typeof val === type;
}


module.exports.type_check_v1 = type_check_v1;
