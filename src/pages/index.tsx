import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {ListBox} from "../components/list"
import "../components/scss/list.scss"

const DefIndex = (props) => {
	let editbut = (
			<button>编辑</button>
		)
	let delbut = (
			<button>删除</button>
		)
	useEffect(()=>{
		IsLoad(false)
	},[])
	let hlist = ['编号','名称','添加时间','操作']
	let data = [
		{id:1,name:'测试1',desc:'测试描述',content:'测试内容',addtime:12312432},
		{id:2,name:'测试2',desc:'测试描述',content:'测试内容',addtime:12312432},
		{id:3,name:'测试3',desc:'测试描述',content:'测试内容',addtime:12312432},
	]
	let field = [
		{type:'txt',code:'id',},
		{type:'txt',code:'name',},
		{type:'date',code:'addtime',},
		{type:'but',code:['show','edit','del','log']},
	]
	return (
		<ListBox hlist={hlist} data={data} field={field}></ListBox>
	)
}
export default DefIndex