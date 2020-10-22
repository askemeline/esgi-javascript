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

function type_check(val, conf) {
  let bool = true;
  
  if(conf.type !== undefined) {
    bool = type_check_v1(val, conf.type);
  }
  if(bool && conf.properties !== undefined) {
    if(conf.type === "array") {
      for(let i in conf.properties) {
        
      }
    } else if (conf.type === "object") {
      for(let i in Object.keys(conf.properties)) {
        let type = conf.properties[Object.keys(conf.properties)[i]].type;
        if(type === "object" || type === "array") type_check(val[Object.keys(val)[i]], conf.properties[Object.keys(conf.properties)[i]]);
        else bool = type_check_v2(val[Object.keys(val)[i]], conf.properties[Object.keys(conf.properties)[i]]);
        if(!bool) break;
      }
    }
  }
  
  return bool;
}

const test = {
  p1: 7,
  p2: "val1"
}
  
//console.log(type_check_v1(function(){}, "function"));
//console.log(type_check_v2(3, {enum: ["hey", 6]}));
console.log(type_check(test, {
  type: "object",
  properties: {
    prop1: {type: "number", value: 7},
    prop2: {type: "string", enum: ["val1", "val2"]}
  }
}))

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
