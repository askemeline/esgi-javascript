function type_check_v1(val, type) {
    let valType = ";"
    if(val === null) valType = "null";
    else if(typeof val === "object" && val.length !== undefined) valType = "array";
    else valType = typeof val;
    return valType === type;
  }
  
  console.log(type_check_v1([], "array"));

module.exports.type_check_v1 = type_check_v1;
