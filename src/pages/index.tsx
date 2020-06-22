import React,{useContext} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext} from "../state/sets"

const DefIndex = (props) => {
	let psets = useContext(SetsContext)
	return (
		<div className="bg-info">
			<div>index:{psets.name}</div>
		</div>
	)
}
export default DefIndex