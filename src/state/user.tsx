import React from "react"
import {getData,setData,delData} from "../config/common"
import {userKey,Api} from "../config/pub"
import {Post} from "../config/line"

const getUser = ()=>{
	let user = getData(userKey)
	if(user){
		return user
	}else{
		return null
	}
}

const setUser = (uinfo)=>{
	Post(Api.UserLogin,{}).then((res)=>{

	}).catch((error)=>{})
}

export{
	getUser,
	setUser
}