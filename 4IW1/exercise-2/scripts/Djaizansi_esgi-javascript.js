function type_check_v1(attr, type){
    if(attr === null){
        return true;
    }else{
        return (typeof attr === type);
    }
}

module.exports.type_check_v1 = type_check_v1;
