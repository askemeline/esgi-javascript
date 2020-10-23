function type_check_v1(value, type) {
  return typeof value === type;
}

function type_check_v2(value, checkers) {
  if ('type' in checkers && ! type_check_V1(value, checkers.type)) return false;
  if ('value' in checkers && value != checkers.value) return false;
  if ('enum' in checkers && ! checkers.enum.includes(value)) return false;

  return true;
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
