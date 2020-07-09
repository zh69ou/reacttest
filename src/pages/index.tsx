import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

const DefIndex = (props) => {

	useEffect(()=>{
		IsLoad(false)
	},[])
	return (
		<div className="bg-info">
		</div>
	)
}
export default DefIndex