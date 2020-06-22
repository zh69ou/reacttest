import React from "react"
import {getData,setData,delData} from "../config/common"
import {userKey} from "../config/pub"

/**
 * 获取用户缓存数据
 * @Author zhou69.1@qq.com 2020-06-22
 */
const getUser = ()=>{
	let user = getData(userKey)
	if(user){
		return user
	}else{
		return null
	}
}

/**
 * 本地缓存用户数据
 * @Author zhou69.1@qq.com 2020-06-22
 * @param        uinfo      [description]
 */
const setUser = (uinfo)=>{
	return setData(userKey,uinfo)
}

/**
 * 删除用户缓存
 * @Author zhou69.1@qq.com 2020-06-22
 */
const delUser = ()=>{
	return delData(userKey)
}

export{
	getUser,
	setUser,
	delUser,
}