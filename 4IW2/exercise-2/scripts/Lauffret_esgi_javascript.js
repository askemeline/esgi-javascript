function type_check_v1(arg1 , arg2){
	if (typeof(agr1) === arg2){
		return true;
	}
	return false
}

function type_check_v2(arg1 , arg2= null , arg3=null){
	if (arg3 === ""){
		if (typeof(agr1) === arg2){
			return true;
		}
	}
	if (arg2 === ""){
		if (arg3.indexOf(arg1) != ""){
			return true;
		}
	}
	if (arg2 != ""  || arg3 != ""){
		if (typeof(agr1) === arg2 || rg3.indexOf(arg1) != ""){
			return true;
		}
	}
	return false;
}

module.exports.type_check_v1 = type_check_v1;
module.exports.type_check_v2 = type_check_v2;
