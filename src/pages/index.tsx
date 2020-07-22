import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {Tabs} from "../components/tabs"
import "../components/scss/tabs.scss"

const DefIndex = (props) => {
	useEffect(()=>{
		IsLoad(false)
	},[])
	let tab1 = ()=>{
		return (
			<a>tab1</a>
		)
	}
	let tab2 = ()=>{
		return (
			<a>tab2</a>
		)
	}
	let con1 = ()=>{
		return (
			<a>con1</a>
		)
	}
	let con2 = ()=>{
		return (
			<a>con2</a>
		)
	}
	let menu = [
		tab1(),
		tab2(),
	]
	let content = [
		con1(),
		con2(),
	]
	return (
		<Tabs act={0} type={0} menu={menu} content={content}><a>添加</a></Tabs>
	)
}
export default DefIndex