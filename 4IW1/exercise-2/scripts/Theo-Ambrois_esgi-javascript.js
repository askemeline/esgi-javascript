function type_check_v1(val, type) {
  switch (typeof val) {
    case "object":
      if (type === "array") return Array.isArray(val);
      if (type === "null") return val === null;
      return val != null && !Array.isArray(val);
    default:
      return typeof val === type;
  }
}


module.exports.type_check_v1 = type_check_v1;
