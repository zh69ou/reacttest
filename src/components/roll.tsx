import React, { useState,useEffect } from "react"

export const RollIs = (props)=>{
	return new Promise((resolve,reject)=>{
		try{
			let getScrollTop = ()=>{
				let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
				if(document.body){
					bodyScrollTop = document.body.scrollTop
				}
				if(document.documentElement){
					documentScrollTop = document.documentElement.scrollTop
				}
				scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
				return scrollTop;
			}

			let getScrollHeight = ()=>{
				let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
				if(document.body){
					bodyScrollHeight = document.body.scrollHeight
				}
				if(document.documentElement){
					documentScrollHeight = document.documentElement.scrollHeight
				}
				scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
				return scrollHeight
			}
			let getWindowHeight = ()=>{
				let windowHeight = 0;
				if(document.compatMode == "CSS1Compat"){
					windowHeight = document.documentElement.clientHeight
				}else{
					windowHeight = document.body.clientHeight
				}
				return windowHeight
			}
			window.onscroll = function(){
				let tob = props.tob?Number(props.tob):0
				if(getScrollTop() + getWindowHeight()+tob == getScrollHeight()){
					resolve(getScrollHeight()-(getScrollTop() + getWindowHeight()))
				}
			}
		}catch(err){
			reject(err)
		}
	})
}