function type_check_v1(val, type) {
    let valType = "";
    if(val === null) valType = "null";
    else if(typeof val === "object" && val.length !== undefined) valType = "array";
    else valType = typeof val;
    return valType === type;
}
  
function type_check_v2(val, args) {
    let bool = true;

    if(args.type !== undefined) {
        bool = type_check_v1(val, args.type);
    }
    if(args.value !== undefined) {
        if(type_check_v1(val, "object")) {
        bool = JSON.stringify(val) === JSON.stringify(args.value);
        } else {
        bool = bool && val === args.value;
        }
    }
    if(args.enum !== undefined) {
        let found = false;
        for(let subValue of args.enum) {
        if(!found) found = type_check_v2(val, {value: subValue});
        if(found) break;
        }
        if(!found) bool = false;
    }

    return bool;
}
  
  //console.log(type_check_v1(function(){}, "function"));
  //console.log(type_check_v2(3, {enum: ["hey", 6]}));

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
