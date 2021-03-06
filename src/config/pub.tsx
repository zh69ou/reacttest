// 用户缓存名称
export const userKey = 'user'
// 拦截地址名称
export const backUrl = 'burl'
// 接口地址
export const BaseUrl = '/api'
//接口地址
export const Api = {
	UserLogin:BaseUrl+'/login'
}
// 前段地址
export const Url = {
	Index:'/',
	User:'/user',
	Login:'/login',
}
// 语言包
export const Language = {
	zh:'中文',
	en:'english'
}
/**
 * 加载中公用方法
 * @Author zhou69.1@qq.com 2020-06-22
 * @param  loading    加载显示状态
 */
export const IsLoad = (loading) => {
	if(loading){
		document.getElementById("loading").style.display = "flex"
	}else{
		setTimeout(()=>{
    		document.getElementById("loading").style.display = "none"
    	},500)
	}
}