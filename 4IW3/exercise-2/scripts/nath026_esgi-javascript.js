function type_check_v1(value, typeToCheck) {
  if (typeToCheck === typeof value) 
  {
    return true;
  }  
  else
  {
    if(typeToCheck === "array")
      {
       	return Array.isArray(value);
      }
    if (typeToCheck === "null")
      {
       	return value === null;
      }
  }
    return false;
}
/*
console.log(type_check_v1("rabbit", "null"));
console.log(type_check_v1("rabbit", "array"));
console.log(type_check_v1("null", "null"));
console.log(type_check_v1(null, "null"));
console.log(type_check_v1([], "array"));
console.log(type_check_v1([], "object"));
*/

function type_check_v2(){

}




module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
