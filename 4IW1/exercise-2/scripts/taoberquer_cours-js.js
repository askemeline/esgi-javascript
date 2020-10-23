function type_check_v1(value, type) {
  if (type == 'array' && ! Array.isArray(value)) return false;
  if (type == 'null' && value !== null) return false;
  if (type == 'function' && {}.toString.call(value) !== '[object Function]') return false;
  if (type == 'arrayNotObject' && (! Array.isArray(value) || typeof value === 'object')) return false;
  if (type == 'nullNotObject' && (value !== null || typeof value === 'object')) return false;

  return typeof value === type;
}

function type_check_v2(value, checkers) {
  if ('type' in checkers && ! type_check_v1(value, checkers.type)) return false;
  if ('value' in checkers && value != checkers.value) return false;
  if ('enum' in checkers && ! checkers.enum.includes(value)) return false;

  return true;
}

function type_check(value, checkers) {
  if (! type_check_v2(value, checkers)) return false;
}


module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
module.exports.type_check = type_check;
