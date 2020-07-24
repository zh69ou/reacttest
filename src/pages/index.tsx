import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {RollIs} from "../components/roll"

const DefIndex = (props) => {
	useEffect(()=>{
		IsLoad(false)
	},[])
	RollIs(props).then((res)=>{
		console.log(res)
	})
	return (
		<div>
		<div><a>添加</a></div>
		</div>
	)
}
export default DefIndex