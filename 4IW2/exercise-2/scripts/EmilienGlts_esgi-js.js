function type_check_v1(val, type) {
    switch (typeof val) {
        case 'symbol':
        case 'number':
        case 'string':
        case 'boolean':
        case 'undefined':
        case 'function':
            return type === typeof val;
        case 'object':
            switch (type) {
                case 'null':
                    return val === null;
                case 'array':
                    return Array.isArray(val);
                default:
                    return val !== null && !Array.isArray(val);
            }
    }
}

function type_check_v2(val, conf) {
    for (let check in conf) {
        switch (check) {
            case 'type':
                if (type_check_v1(val, conf.type) === false) {
                    return false;
                }
                break;
            case 'value':
                if (JSON.stringify(val) !== JSON.stringify(conf.value)) {
                    return false;
                }
                break;
            case 'enum':
                let found = false;
                for (let subValue of conf.enum) {
                    if (!found) {
                        found = type_check_v2(val, {value: subValue});
                    } else {
                        break;
                    }
                }

                if (!found) {
                    return false;
                }
        }
    }

    return true;
}

function type_check(obj, conf) {
    let check = type_check_v2(obj, conf);

    if (!conf.properties) {
        return check;
    }

    for (const typeKey in conf.properties) {
        check = type_check(type_check_v1(obj, 'object') ? obj[typeKey] : obj, conf.properties[typeKey]);
        if (!check) {
            break
        }
    }

    return check;
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
