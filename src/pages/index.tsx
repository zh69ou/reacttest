import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {ListBox} from "../components/list"
import "../components/scss/list.scss"

const DefIndex = (props) => {
	useEffect(()=>{
		IsLoad(false)
	},[])
	const editact = (obj)=>{
		console.log(obj)
	}
	let editbut = (
			<button>编辑</button>
		)
	let delbut = (
			<button>删除</button>
		)
	let hlist = ['编号','名称','添加时间','操作']
	let data = [
		{id:1,name:'测试1',desc:'测试描述',content:'测试内容',addtime:1595217198},
		{id:2,name:'测试2',desc:'测试描述',content:'测试内容',addtime:1595217198},
		{id:3,name:'测试3',desc:'测试描述',content:'测试内容',addtime:1595217198},
	]
	let field = [
		{type:'txt',code:'id',},
		{type:'txt',code:'name',},
		{type:'date',code:'addtime',},
		{type:'but',code:[{html:editbut,k:'',v:'',callback:(info)=>{editact(info)}},{html:delbut,k:'id',v:'1'}]},
	]
	return (
		<ListBox hlist={hlist} data={data} field={field}></ListBox>
	)
}
export default DefIndex