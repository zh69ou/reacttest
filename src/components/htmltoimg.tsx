import React, { useState,useEffect } from "react"
import html2canvas from "html2canvas"

export const ToImage = (url, outputFormat = 'image/png') => {
	return new Promise((resolve,reject)=>{
		try{
			let canvas = document.createElement('canvas')
			let ctx = canvas.getContext('2d')
			let img = new Image
			img.crossOrigin = 'Anonymous'
			img.onload = () => {
				canvas.height = img.height
				canvas.width = img.width
				ctx.drawImage(img, 0, 0)
				let dataURL = canvas.toDataURL(outputFormat)
				canvas = null
				resolve(dataURL)
			}
			img.src = url+'?t='+new Date().valueOf()
		}catch(err){
			reject(err)
		}
	})
}

export const HtmlToImg = (dom)=>{
	return new Promise((resolve,reject)=>{
		try{
			html2canvas(dom,{
				allowTaint:true,
				// backgroundColor: null,
				useCORS: true,
				scale: 2,
				imageTimeout: 5000,
			}).then((res)=>{
				// let img = canvas2Image(res,res.width,res.height)
				resolve(res.toDataURL('image/jpeg'))
			})
		}catch(err){
			reject(err)
		}
	})
}