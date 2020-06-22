import qs from "qs"

const getData = (name)=>{
	let data = localStorage.getItem(name)
	let sd
	try{
		var pattern = /^[a-z0-9]*=.*$/;
        if(pattern.test(data)){
        	sd = qs.parse(data)
        }else{
        	sd = data
        }
	}catch(e){
		sd = data
	}
	return sd
}

const setData = (name,obj)=>{
	let st = ''
	if(typeof(obj)!='string'){
		st = qs.stringify(obj)
	}else{
		st = obj
	}
	try{
		localStorage.setItem(name, st)
		return true
	}catch(e){
		return false
	}
}

const delData = (name)=>{
	try{
		localStorage.removeItem(name)
		return true
	}catch(e){
		return false
	}
}

export {
	getData,
	setData,
	delData
}