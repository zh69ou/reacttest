import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {DateBox} from "../components/date"
import "../components/scss/date.scss"

const DefIndex = (props) => {
	useEffect(()=>{
		IsLoad(false)
	},[])
	return (
		<div>
			<DateBox choice="1" callback={(res)=>{}}></DateBox>
		</div>
	)
}
export default DefIndex