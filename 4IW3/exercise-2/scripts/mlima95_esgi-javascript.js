function type_check_v1(value,type){
    if(typeof(value) !== "object"){
        switch(typeof(value)){
            case "function":
            case "undefined":
            case "boolean":
            case "string":
            case "number":
            case "symbol":
                return type === typeof(value); 
        }
    }else{
        switch(type){
            case "array":
                console.log('is array');
                return Array.isArray(value);
            case "null":
                return value === null;
            default:
                return !Array.isArray(value) && value !== null;
        }
    }
        
}


module.exports.type_check_v1 = type_check_v1;
