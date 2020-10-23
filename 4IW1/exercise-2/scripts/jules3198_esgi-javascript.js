
function type_check_v1(arg1,arg2){
    
 console.log("typeof "+typeof(arg1));
 if(typeof(arg1)== "object"){

    if(Array.isArray(arg1)){
        if(arg2=="array") return true;
        return false;
    }
    else if(arg1==null){
        if(arg2=="null") return true;
        return false;
    }

    else if(arg2=="object") return true;
    return false;



 }else if(typeof(arg1)===arg2) {
    return true;
 }else{
    return false;
 }
   
   
}


module.exports.type_check_v1 = type_check_v1;
