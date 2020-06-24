import React,{useState,useContext,useEffect} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext} from "../state/sets"
import {IsLoad} from "../config/pub"

const NoPage = (props) => {
	let psets = useContext(SetsContext)
	useEffect(()=>{
		IsLoad(false)
	},[])
	return (
		<div className="bg-info">
			404
		</div>
	)
}
export default NoPage