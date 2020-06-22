import React,{useState,useContext,useEffect} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext} from "../state/sets"
import {IsLoad} from "../config/pub"

const DefIndex = (props) => {
	let psets = useContext(SetsContext)
	useEffect(()=>{
		IsLoad(false)
	},[])
	return (
		<div className="bg-info">
			<div>index:{psets.name}</div>
		</div>
	)
}
export default DefIndex