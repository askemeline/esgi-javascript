
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




function type_check_v2(arg1,arg2){

   console.log(arg2["type"]+ "=========>"+arg2["value"]);



   if(type_check_v1(arg1,arg2["type"])&& arg2["value"]===arg1 ) return true;
   return false;
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
