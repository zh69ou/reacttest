import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
const DefIndex = React.lazy(()=> import('../pages/index').then(({ DefIndex }) => ({ default: DefIndex })))

export const BsRouter = (props) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<Route exact path="/" component={DefIndex}></Route>
			</Router>
		</Suspense>
	)
}