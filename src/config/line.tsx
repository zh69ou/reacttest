import axios from 'axios'
// import qs from 'qs'

const Line = (opts:any)=> {
	return new Promise((resolve,reject)=>{
		let deconfig = {
			method:opts.method ? opts.method.toLocaleUpperCase() : 'POST',
			url:opts.url,
			async: opts.async?opts.async:false,
			// responseType:'json',
			headers:opts.method.toLowerCase()=='get' ? {
				"X-Requested-With":"XMLHttpRequest",
				"Accept":"application/json",
				"Content-Type":"application/json;charset=UTF-8"
			}:{
				"X-Requested-With":"XMLHttpRequest",
				"Accept":"application/json",
				"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
			},
			params:opts.data,
			data:opts.data,
			transformRequest:[(data)=>{
				// 发送数据前处理数据
				return data
			}],
			transformResponse:[(data)=>{
				// 接受返回数据处理
				return data
			}],
			timeout:30000
		}

		// 拼接发送
		if(deconfig.method.toLowerCase()=='get'){
			delete deconfig.data
	    }else{
	    	delete deconfig.params
	    }

	    const instance = axios(deconfig).then(response =>{
    		resolve(response.data)
	    }).catch(error => {
	    	// 打印错误
	    	reject(error)
	    })
	})
}

export default Line

const UpData = (obj)=>{
	// let formData = new window.FormData()
	let data = obj
	return data
}

export const Get = (url:string,params:any)=>{
	let data = UpData(params)
	let config = {
		"method":"get",
		"url":url,
		"data":data
	}
	return Line(config)
}

export const Post = (url:string,params:any)=>{
	let data = UpData(params)
	let config = {
		"method":"post",
		"url":url,
		"data":data
	}
	return Line(config)
}

export const Put = (url:string,params:any)=>{
	let data = UpData(params)
	let config = {
		"method":"put",
		"url":url,
		"data":data
	}
	return Line(config)
}

export const Patch = (url:string,params:any)=>{
	let data = UpData(params)
	let config = {
		"method":"patch",
		"url":url,
		"data":data
	}
	return Line(config)
}

export const Delete = (url:string,params:any)=>{
	let data = UpData(params)
	let config = {
		"method":"delete",
		"url":url,
		"data":data
	}
	return Line(config)
}