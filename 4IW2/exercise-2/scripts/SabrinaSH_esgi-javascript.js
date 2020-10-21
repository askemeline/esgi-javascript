function type_check_v1(value, type) {
  if (
    (value === undefined && type === "undefined") ||
    (value === null && type === "object") ||
    typeof value === type
  ) {
    return true;
  }
  return false;
}

function type_check_v2(arg1, arg2) {
  if (arg2 === null) {
    return true;
  }
  if (arg2.type !== undefined) {
    return type_check_v1(arg1, arg2.type);
  }
  if (arg2.value !== undefined) {
    if (arg2.value === arg1) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(type_check_v1(1, "number"));


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
