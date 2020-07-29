import React, { useState,useEffect } from "react"
import ReactDOM from 'react-dom'

export const ModalBox = (props)=>{
	let but = ()=>{
		return props.but?(
			<div className="modal-footer">
				{props.but}
			</div>
			):null
	}
	return (
		<div className="modal fade">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{props.title}</h5>
						<button type="button" className="close" onClick={()=>props.useClose()}>
						<span>&times;</span>
						</button>
					</div>
					<div className="modal-body">
						{props.mbody}
					</div>
					{but()}
				</div>
			</div>
		</div>
	)
}

export const Modal = (props)=>{
	return new Promise((resolve,reject)=>{
		try{
			let mbox = document.getElementById('mbox')
			if(!mbox){
				mbox = document.createElement('div')
				mbox.id = 'mbox'
				mbox.className = 'fixed-top'
				document.body.appendChild(mbox)
			}
			const box = document.createElement('div')
			mbox.appendChild(box)
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
				mbox.removeChild(box)
			}
			ReactDOM.render(
				<ModalBox {...props} useClose={()=>{
					close()
				}} />,
				box
			)
			resolve(box)
		}catch(err){
			reject(err)
		}
	})
}