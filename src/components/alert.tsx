import React, { useState,useEffect } from "react"
import ReactDOM from 'react-dom'

export const AlertBox = (props)=>{
	let colorlist = ['primary','secondary','success','danger','warning','info','light','dark']
	let color = props.color&&colorlist.some((info)=>info==props.color)?props.color:'primary'
	return (
		<div className={"alert alert-dismissible show alert-"+color}>
			{props.children}
			<button onClick={()=>props.useClose()} type="button" className="close">
				<span>&times;</span>
			</button>
		</div>
	)
}

export const AlertMsg = (props)=>{
	return new Promise((resolve,reject)=>{
		try{
			let abox = document.getElementById('abox')
			if(!abox){
				abox = document.createElement('div')
				abox.id = 'abox'
				abox.className = 'fixed-top'
				document.body.appendChild(abox)
			}
			const box = document.createElement('div')
			abox.appendChild(box)
			if(props.auclose){
				let t= 3
				let timefuc = setInterval(()=>{
					if(t>1){
						t -=1
					}else{
						close()
						clearInterval(timefuc)
					}
				},1000)
			}

			const close = ()=>{
				abox.removeChild(box)
				resolve()
			}
			ReactDOM.render(
				<AlertBox {...props} useClose={()=>{
					close()
				}} />,
				box
			)
		}catch(err){
			reject(err)
		}
	})
}