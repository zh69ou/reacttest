// 用户缓存名称
export const userKey = 'user'
// 接口地址
export const BaseUrl = '/api'
//接口地址
export const Api = {
	UserLogin:BaseUrl+'/login'
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