let type_check_v1 = (value, type) =>
  value === null || value === undefined
    ? true
    : typeof value === type
    ? true
    : false;
console.log(type_check_v1(null, "object"));

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


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
