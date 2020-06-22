import React,{useState,useContext,useEffect} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext} from "../state/sets"
import {IsLoad} from "../components/pub"

const DefIndex = (props) => {
	let [loading,setLoad] = useState(true)
	let psets = useContext(SetsContext)
	useEffect(()=>{
		setTimeout(()=>{
			setLoad(false)
		},1000)
	},[])
	return (
		<IsLoad loading={loading}>
			<div className="bg-info">
				<div>index:{psets.name}</div>
			</div>
		</IsLoad>
	)
}
export default DefIndex