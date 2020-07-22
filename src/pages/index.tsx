import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {Crumb} from "../components/crumb"
import "../components/scss/crumb.scss"

const DefIndex = (props) => {
	useEffect(()=>{
		IsLoad(false)
	},[])
	let menu = [
		{id:1,name:'测试1',url:'/'},
		{id:2,name:'测试2',url:'/'},
		{id:3,name:'测试3',url:'/'},
	]
	return (
		<Crumb menu={menu}><a>添加</a></Crumb>
	)
}
export default DefIndex