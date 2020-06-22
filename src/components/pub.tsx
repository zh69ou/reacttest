import React, { useEffect } from "react"
/**
 * 加载中
 * @Author zhou69.1@qq.com 2020-06-22
 */
export const IsLoad = (props) => {
	useEffect(()=>{
		let loading = props.loading?props.loading:false
		if(loading){
    		document.getElementById("app").style.display = "none"
    		document.getElementById("loading").style.display = "flex"
		}else{
			setTimeout(()=>{
	    		document.getElementById("app").style.display = "block"
	    		document.getElementById("loading").style.display = "none"
	    	},500)
		}
	},[props.loading])
	return (
		props.children
	)
}