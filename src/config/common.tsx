import {Sets} from "../state/pubsets"
import {Get} from "./line"
import qs from "qs"

const getData = (name)=>{
	let data = localStorage.getItem(name)
	let sd
	try{
		sd = qs.parse(data)
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
	localStorage.setItem(name, st)
}

const delData = (name)=>{
	localStorage.removeItem(name)
}

export {
	getData,
	setData,
	delData
}