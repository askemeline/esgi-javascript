function type_check_v1(arg, type){
    if (typeof(arg) !== type) {
        return false;
    }
    return true; 
}

function type_check_v2(){
    
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
