import React, { Suspense,useState,useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
const DefIndex = React.lazy(()=> import('../pages/index'))
import {SetsContext,Sets} from "../state/pubsets"

export const BsRouter = (props) => {
	const [pubsets,setPubsets] = useState(Sets)
	return (
		<SetsContext.Provider value={pubsets}>
			<Suspense fallback={<div>Loading...</div>}>
				<Router>
					<Route exact path="/" component={DefIndex}></Route>
				</Router>
			</Suspense>
		</SetsContext.Provider>
	)
}