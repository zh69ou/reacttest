import React, { Suspense,useState,useEffect } from "react"
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom"
import {SetsContext,Sets} from "../state/sets"
// 页面
const DefIndex = React.lazy(()=> import('../pages/index'))
const NoPage = React.lazy(()=> import('../pages/nopage'))

export const BsRouter = (props) => {
	const [pubsets,setPubsets] = useState(Sets)
	return (
		<SetsContext.Provider value={pubsets}>
			<Suspense fallback={<div>Loading...</div>}>
				<Router>
					<Switch>
						<Route exact path="/" component={DefIndex}></Route>
						<Route component={NoPage}/>
					</Switch>
				</Router>
			</Suspense>
		</SetsContext.Provider>
	)
}