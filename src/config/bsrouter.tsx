import React, { Suspense,useState,useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {SetsContext,Sets} from "../state/sets"
// 页面
const DefIndex = React.lazy(()=> import('../pages/index'))

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