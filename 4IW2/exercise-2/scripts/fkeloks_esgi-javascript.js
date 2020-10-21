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

console.info("\n========== type_check_v1 ==========");
console.log(type_check_v1(1, 'number'));
console.log(type_check_v1(undefined, 'undefined'));

function type_check_v2(value, object) {
    if (!object.type && !object.value && !object.enum) {
        return false;
    }

    if (object.enum) {
        return object.enum.indexOf(value) !== -1;
    }

    if (object.type && !object.value) {
        return object.type === typeof value;
    }

    if (!object.type && object.value) {
        return object.value === value;
    }

    if (object.type && object.value) {
        return object.type === typeof value && object.value === value;
    }
}

console.info("\n========== type_check_v2 ==========");
console.log(type_check_v2({prop1: 1}, {type: 'object'}));
console.log(type_check_v2('foo', {type: 'string', value: 'foo'}));
console.log(type_check_v2('bar', {type: 'object', value: 'foo'}));
console.log(type_check_v2(3, {enum: ['foo', 'bar', 3]}));


function type_check(obj, conf) {

}

let object = {
    prop1: 5,
    prop2: 'val1',
    prop3: {prop31: 5},
    prop4: [true]
};

let conf = {
    type: 'object',
    properties: {
        prop1: {type: 'number'},
        prop2: {type: 'string', enum: ['val1', 'val2']},
        prop3: {type: 'object', properties: {prop31: 'number'}},
        prop4: {type: 'array', properties: ['boolean']}
    }
};

console.info("\n========== type_check ==========");
console.log(type_check(object, conf))


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
