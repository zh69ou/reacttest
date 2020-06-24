import React,{useState,useContext,useEffect} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext} from "../state/sets"
import {IsLoad} from "../config/pub"

const Login = (props) => {
	let psets = useContext(SetsContext)
	useEffect(()=>{
		IsLoad(false)
	},[])
	return (
		<div className="bg-info">
			<div>Login</div>
		</div>
	)
}
export default Login