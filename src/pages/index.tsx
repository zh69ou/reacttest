import React,{useState,useContext,useEffect} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext} from "../state/sets"
import {IsLoad} from "../config/pub"
import AlertMsg from "../components/alert"

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
				upTime(Math.round(Math.random()*10000))
				console.log('time',time)
				upSalert(true)
			}}>显示</span>
			<AlertMsg show={salert} time={time}>index:{psets.name}</AlertMsg>
		</div>
	)
}
export default DefIndex