import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {Modal} from "../components/modal"
import "../components/scss/modal.scss"

const DefIndex = (props) => {
	useEffect(()=>{
		IsLoad(false)
	},[])
	const opm = ()=>{
		let box
		let obj = {
			title:<a className="text-danger">提示</a>,
			mbody:<a>是否删除？</a>,
			but:<div><button>取消</button><button onClick={()=>{box.remove()}}>确定</button></div>
		}
		Modal(obj).then((res)=>{
			box = res
		}).catch((e)=>{})
	}
	return (
		<div>
			<button onClick={()=>{opm()}}>打开</button>
		</div>
	)
}
export default DefIndex