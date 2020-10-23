

function type_check_v1(value, type) {

    if (type === 'null' ) {
        return value === null;
    } else if (type === 'object' && typeof value === 'object') {
        return true;
    } else if (type === 'number' && typeof value === 'number') {
        return true;
    } else if (type === 'string' && typeof value === 'string') {
        return true;
    } else if (type === 'array' && Array.isArray(value)) {
        return true;
    } else if (type === 'symbol' && typeof value === 'symbol') {
        return true;
    } else {
        return false;
    }

}


function type_check_v2(value, conf) {
    for (let key in conf) {
        if (key === 'type') {
            if (!type_check_v1(value, conf[key])) {
                return false;
            }
        } else if (key === 'value') {
            if (conf[key] !== value) {
                return false;
            }
        } else if (key === 'enum') {
            if (!conf[key].includes(value)) {
                return false;
            }
        }

    }

    return true;
}

function type_check() {
    
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
