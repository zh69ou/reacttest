import {Api} from "../config/pub"
import {Post} from "../config/line"

/**
 * 用户登录接口
 * @Author zhou69.1@qq.com 2020-06-22
 * @param        obj        发送内容
 */
export const inLogin=(obj)=>{
	return Post(Api.UserLogin,obj)
}