import React,{useState,useContext,useEffect} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext} from "../state/sets"
import {IsLoad} from "../config/pub"
import AlertMsg from "../components/alert"

import "../components/scss/alert.scss"

const DefIndex = (props) => {
	let psets = useContext(SetsContext)
	let [salert,upSalert] = useState(false)
	let [time,upTime] = useState(0)
	useEffect(()=>{
		IsLoad(false)
	},[])
	return (
		<div className="bg-info">
			<span onClick={()=>{
				AlertMsg({children:'<a>abc</a>',auclose:true}).then((res)=>{
					console.log(res)
				})
			}}>显示</span>
		</div>
	)
}
export default DefIndex