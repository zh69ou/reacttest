import {Sets} from "./pubsets"
import {Get} from "./line"
import qs from "qs"

const sname = 'ukey'

const getSets = ()=>{
	let sets = getData(sname)
	if(sets.name){
		Sets.name = sets.name
		Sets.time = new Date().getTime().toString()
	}else{
		Get('http://localhost:8080',[]).then((res)=>{
			Sets.name = 'bbc'
			Sets.time = new Date().getTime().toString()
			setData(sname,Sets)
			window.location.reload()
		})
	}
	return Sets
}

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
	getSets
}