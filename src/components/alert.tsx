import React, { useState,useEffect } from "react"

const AlertMsg = (props)=>{
	let [show,upShow] = useState(false)
	let colorlist = ['primary','secondary','success','danger','warning','info','light','dark']
	let color = props.color&&colorlist.some((info)=>info==props.color)?props.color:'primary'
	useEffect(()=>{
		upShow(props.show)
		if(props.show){
			let t = 3
			let timefuc = setInterval(()=>{
				console.log('t',t)
				if(t>1){
					t -=1
				}else{
					upShow(false)
					clearInterval(timefuc)
				}
			},1000)
		}
	},[props.show,props.time])
	return show?(
		<div className={"alert alert-"+color}>
			<button onClick={()=>{upShow(false)}} type="button" className="close">
				<span>&times;</span>
			</button>
			{props.children}
		</div>
	):null
}

export default AlertMsg