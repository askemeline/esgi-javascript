function type_check_v1(value,type){
    if(typeof(value) !== "object"){
        return type === typeof(value); 
    }else{
        switch(type){
            case "array":
                return Array.isArray(value);
            case "null":
                return value === null;
            case "object":
                return !Array.isArray(value) && value !== null;
            default:
                return false;
        }
    }    
}

module.exports.type_check_v1 = type_check_v1;
