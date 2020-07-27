import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {RollIs} from "../components/roll"

const DefIndex = (props) => {
	const [num,setNum] = useState(30)
	const hlist = ()=>{
		let ht = []
		for (var i = 0; i < num; i++) {
			ht.push(<div key={i}><a>添加-{i}</a></div>)
		}
		return ht
	}
	useEffect(()=>{
		IsLoad(false)
	},[])
	RollIs(props).then((res)=>{
		if(num<100){
			setNum(num+10)
		}
		console.log(num)
	})
	return (
		<div>
			{hlist()}
		</div>
	)
}
export default DefIndex