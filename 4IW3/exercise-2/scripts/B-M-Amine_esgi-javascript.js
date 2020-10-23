function type_check_v1(arg1, arg2){
    if(arg1 === null) return null;
    return (typeof arg1 === arg2);
}

module.exports.type_check_v1 = type_check_v1;
