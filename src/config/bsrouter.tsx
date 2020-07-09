import React, { Suspense,useState,useEffect } from "react"
import { BrowserRouter as Router, Route, Link,Switch,Redirect } from "react-router-dom"
import {SetsContext,Sets} from "../state/sets"
import {userKey,Url,backUrl} from "./pub"
import {getData,setData} from "./common"
// 页面
const DefIndex = React.lazy(()=> import('../pages/index'))
const NoPage = React.lazy(()=> import('../pages/nopage'))
const User = React.lazy(()=> import('../pages/user'))
const Login = React.lazy(()=> import('../pages/login'))

export const BsRouter = (props) => {
	const [pubsets,setPubsets] = useState(Sets)
	/**
	 * 是否登录
	 * @Author zhou69.1@qq.com 2020-07-02
	 */
	const isLogin = ()=>{
		let user = getData(userKey)
		return user?true:false
	}
	/**
	 * 路由守卫
	 * @Author zhou69.1@qq.com 2020-07-02
	 */
	const PrivateRoute = ({ children, ...rest })=>{
		return (
			<Route {...rest} render={
				({ location }) => {
					if(!isLogin()){
						setData(backUrl,location.pathname)
						return <Redirect to={Url.Login} />
					}else{
						return children
					}
				}
			} />
		);
	}
	return (
		<SetsContext.Provider value={pubsets}>
			<Suspense fallback={<div>Loading...</div>}>
				<Router>
					<Switch>
						<Route exact path={Url.Index}>
							<DefIndex />
						</Route>
						<PrivateRoute exact path={Url.User}>
							<User />
						</PrivateRoute>
						<Route exact path={Url.Login} component={Login}>
						</Route>
						<Route component={NoPage}/>
					</Switch>
				</Router>
			</Suspense>
		</SetsContext.Provider>
	)
}