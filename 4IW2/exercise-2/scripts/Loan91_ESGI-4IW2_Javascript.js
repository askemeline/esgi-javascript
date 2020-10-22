function type_check_v1(arg1, arg2)
{
    switch (typeof arg1){
        case "symbol":
        case "number":
        case "string":
        case "boolean":
        case "undefined":
        case "function":
            return arg2 === typeof arg1;
        case "object":
            switch (arg2){
                case "null":
                    return arg1 === null;
                case "array":
                    return Array.isArray(arg1);
                default:
                    return arg1 !== null && !Array.isArray(arg1);
            }
    }
}

function type_check_v2(arg1, arg2)
{
    for (toCheck in arg2){
        switch (toCheck){
            case 'type':
                if (type_check_v1(arg1, arg2.type) === false) return false;
                break;
            case 'value':
                if (JSON.stringify(arg1) !== JSON.stringify(arg2.value))
                    return false;
                break;
            case 'enum':
                let found = false;
                for (subValue of arg2.enum){
                    if (!found) found = type_check_v2(arg1, {value: subValue});
                    if (found) break;
                }
                if (!found) return false;
        }
        return true;
    }
}

function type_check(arg1, arg2)
{
    let rep = true;

    if (type_check_v2(arg1, arg2) !== true) rep = false;
    if (arg2['properties'] !== undefined)
        arg2['properties'].forEach(function (e){
            if (e['type'] !== undefined)
                if (typeof arg1 !== e['type']) rep = false;

            if (e['value'] !== undefined)
                if (arg1 != e['value']) rep = false;

            if (e['enum'] !== undefined)
                if (arg1 !== e['enum'].length) rep = false;
        });

    return rep;
}

// console.log(type_check_v1(1, 'number'));
// console.log(type_check_v2(1, {type: 'number'}));
// console.log(type_check_v2("foo", {type: 'string', value: 'foo'}));
// console.log(type_check_v2("foo", {type: 'string', value: 'bar'}));
// console.log(type_check_v2(3, {enum: ['3',2,3]}));
// console.log(type_check(["String",5,true], {type: 'Object', properties: {prop1: {type: 'string'}, prop2: {type: 'number', value: 5}, prop3: {type: 'boolean'}}}));

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
