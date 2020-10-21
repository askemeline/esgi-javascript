function type_check_V1(arg1 , arg2){
	if (typeof(agr1) == arg2){
		return true;
	}
	return false
}

function type_check_V2(arg1 , arg2= null , arg3=null){
	if (arg3 === ""){
		if (typeof(agr1) == arg2){
			return true;
		}
	}
	if (arg2 === ""){
		if (agr1 == arg2){
			return true;
		}
	}
	if (arg2 != ""  || arg3 != ""){
		if (typeof(agr1) == arg2){
			return true;
		}
	}
	return false;
}

