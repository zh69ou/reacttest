import axios from "axios"
import {Sets} from "./pubsets"

const username = 'ukey'

const getSets = ()=>{
	if(getData(username)){
		Sets.name = 'abc'
		Sets.time = new Date().getTime().toString()
	}else{
		axios.get('http://localhost:8080').then((res)=>{
			Sets.name = 'abc'
			Sets.time = new Date().getTime().toString()
			setData(username,Sets.name)
		})
	}
	return Sets
}

const getData = (name)=>{
	return localStorage.getItem(name);
}

const setData = (name,obj)=>{
	localStorage.setItem('myCat', 'Tom')
}

const delData = (name)=>{
	localStorage.removeItem(name)
}

export {
	getSets
}