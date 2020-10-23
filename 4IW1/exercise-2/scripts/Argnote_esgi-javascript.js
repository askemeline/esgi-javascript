function type_check_v1(value,type)
{
    return (typeof(value)==type)
}

// console.log(type_check_v1("ttt","number"));

module.exports.type_check_v1 = type_check_v1;
