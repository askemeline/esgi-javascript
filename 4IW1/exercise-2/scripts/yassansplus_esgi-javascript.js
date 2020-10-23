function type_check_v1(myNumber, typecheck ='number'){
    if(typeof(myNumber) == "object"){
        if(Array.isArray(myNumber) && typecheck == "array"){
            return true;
        }
    }
    else {
        return false;
    }

        return (typeof(myNumber) == typecheck);
}



module.exports.type_check_v1 = type_check_v1;
