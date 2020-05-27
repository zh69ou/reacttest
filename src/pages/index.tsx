import React,{useContext} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext} from "../config/pubsets"

const DefIndex = (props) => {
	let psets = useContext(SetsContext)
	return (
		<div>
			<div>index:{psets.name}</div>
		</div>
	)
}
export default DefIndex