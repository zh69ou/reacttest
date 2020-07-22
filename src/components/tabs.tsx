import React, { useState,useEffect } from "react"

export const Tabs = (props)=>{
	let [state,setState] = useState(props.act)
	let clname = props.type==1?' flex-column col-12 col-md-3':''
	let crname = props.type==1?' col-12 col-md-9':''
	let tname = props.type==1?'merg row':''
	let menu = props.menu.map((info,k)=>{
		return (k==state)?<li key={k} className="nav-item nav-link active">{info}</li>:<li onClick={()=>{setState(k);if(props.UpAct)props.UpAct(k)}} key={k} className="nav-item nav-link">{info}</li>
	})
	let content = props.content.map((info,k)=>{
		return (k==state)?<div key={k} className="tab-pane show active">{info}</div>:<div key={k} className="tab-pane">{info}</div>
	})
	return (
		<div className={tname}>
			<ul className={"nav nav-tabs"+clname}>
				{menu}
			</ul>
			<div className={"tab-content"+crname}>
				{content}
			</div>
		</div>
	)
}