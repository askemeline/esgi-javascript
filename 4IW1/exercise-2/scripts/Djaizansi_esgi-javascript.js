function type_check_v1(attr, type){
    if(typeof attr === 'object'){
        if(attr === null) return true;
        if(Array.isArray(attr)) return true;
        if(attr !== null || !(Array.isArray(attr))) return true;
    }
    return (typeof attr === type);
}

module.exports.type_check_v1 = type_check_v1;
