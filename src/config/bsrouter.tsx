import React, { Suspense,useState,useEffect } from "react"
import { BrowserRouter as Router, Route, Link,Switch,Redirect } from "react-router-dom"
import {SetsContext,Sets} from "../state/sets"
import {userKey} from "./pub"
import {getData} from "./common"
// 页面
const DefIndex = React.lazy(()=> import('../pages/index'))
const NoPage = React.lazy(()=> import('../pages/nopage'))
const User = React.lazy(()=> import('../pages/user'))
const Login = React.lazy(()=> import('../pages/login'))

export const BsRouter = (props) => {
	const [pubsets,setPubsets] = useState(Sets)
	const isLogin = ()=>{
		let user = getData(userKey)
		return !user?true:false
	}
	return (
		<SetsContext.Provider value={pubsets}>
			<Suspense fallback={<div>Loading...</div>}>
				<Router>
					<Switch>
						<Route exact path="/">
							<DefIndex />
						</Route>
						<Route exact path="/user">
							{isLogin()?<Redirect to="/login" />:<User />}
						</Route>
						<Route exact path="/login" component={Login}>
						</Route>
						<Route component={NoPage}/>
					</Switch>
				</Router>
			</Suspense>
		</SetsContext.Provider>
	)
}