import qs from "qs"

/**
 * 对象转字符串
 * @Author zhou69.1@qq.com 2020-06-28
 */
export const toStr = (obj)=>{
	let st
	try{
		if(typeof(obj)!='string'){
			st = qs.stringify(obj)
		}else{
			st = obj
		}
	}catch(e){
		st = null
	}
	return st
}

/**
 * 字符串转对象
 * @Author zhou69.1@qq.com 2020-06-28
 */
export const toObj = (str)=>{
	let sd
	try{
		var pattern = /^[a-z0-9]*=.*$/;
        if(pattern.test(str)){
        	sd = qs.parse(str)
        }else{
        	sd = str
        }
	}catch(e){
		sd = null
	}
	return sd
}

/**
 * 获取缓存
 * @Author zhou69.1@qq.com 2020-06-24
 * @param   name       缓存名称
 */
export const getData = (name)=>{
	let data = localStorage.getItem(name)
	return toObj(data)
}

/**
 * 设置缓存
 * @Author zhou69.1@qq.com 2020-06-24
 * @param       name       缓存名称
 * @param       obj        缓存内容
 */
export const setData = (name,obj)=>{
	let st = toStr(obj)
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