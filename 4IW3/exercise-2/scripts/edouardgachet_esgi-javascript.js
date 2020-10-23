
const type_check_v1 = (arg1, arg2) => {
    let verifType = typeof(arg1) == arg2 ? true : false;
    return verifType;
}


const type_check_v2 = (arg1, arg2) => {

    const funcString = (arg1, arg2) => 
    {
        let valueArg2 = Object.keys(arg2)
        return typeof(arg1) == arg2[valueArg2[0]] && arg1 == arg2[valueArg2[1]] ? true : false
    };
    const funcNumber = (arg1, arg2) => 
    {

    };
    const funcObject = (arg1, arg2) => 
    {
        let valueArg1 = Object.keys(arg1)
        let valueOneArg2 = Object.keys(arg2)

        return typeof(arg1[valueArg1[0]]) == arg2[valueOneArg2[0]] ? true : false
    };

    switch(typeof(arg1)) {
        case "string":
            return funcString(arg1, arg2)
        case "number":
            return funcNumber(arg1, arg2)
        case "object":
            return funcObject(arg1, arg2)                                                                         
    }
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
