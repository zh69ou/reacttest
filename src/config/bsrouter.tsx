import React, { Suspense,useState,useEffect } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
const DefIndex = React.lazy(()=> import('../pages/index'))
import {SetsContext,Sets} from "./pubsets"
import {getSets} from "./common"


export const BsRouter = (props) => {
	const [pubsets,setPubsets] = useState(Sets)
	useEffect(()=>{
		let v = getSets()
		setPubsets(v)
	},[])
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