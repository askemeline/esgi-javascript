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

function type_check_v2(value,conf){
    for(key in conf){
        switch(key){
            case 'type':
                if(!type_check_v1(value,conf.type)) return false;
                break;
            case "value":
                if(JSON.stringify(value) !== JSON.stringify(conf.value)) return false;
                break;
            case "enum":
                let found = false;
                for (subvalue of conf.enum){
                    found = type_check_v2(value, {value: subvalue});
                    if(found) break;
                }
                if (!found) return false;
                break;
        }
    }
    return true;
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
