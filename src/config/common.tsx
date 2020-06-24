import qs from "qs"

/**
 * 获取缓存
 * @Author zhou69.1@qq.com 2020-06-24
 * @param   name       缓存名称
 */
export const getData = (name)=>{
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

/**
 * 设置缓存
 * @Author zhou69.1@qq.com 2020-06-24
 * @param       name       缓存名称
 * @param       obj        缓存内容
 */
export const setData = (name,obj)=>{
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

/**
 * 删除缓存
 * @Author zhou69.1@qq.com 2020-06-24
 * @param        name       缓存名称
 */
export const delData = (name)=>{
	try{
		localStorage.removeItem(name)
		return true
	}catch(e){
		return false
	}
}