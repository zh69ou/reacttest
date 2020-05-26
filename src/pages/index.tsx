import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export const DefIndex = (props) => {
	return (
		<div>
			<h1>default index!</h1>
			<Link to="/user">用户中心</Link>
		</div>
	)
}