function type_check_v1(myNumber, typecheck ='number'){
        if (!myNumber) return null;
        return (typeof(myNumber) == typecheck);
}



module.exports.type_check_v1 = type_check_v1;
