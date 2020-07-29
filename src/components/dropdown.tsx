import React, { useState,useEffect,useRef } from "react"
import { CSSTransition } from 'react-transition-group'
import {findDOMNode} from 'react-dom'

export const DropDown = (props)=>{
	const [tor,setTor] = useState(false)
	const [state,setState] = useState(false)
	const [slist,setSlist] = useState([])
	const [sname,setSname] = useState([])
	const dbox = useRef(null)
	useEffect(()=>{
		let l = dbox.current.offsetLeft
		let w = 0
		if(document.body){
			w = document.body.offsetWidth
		}
		if(w>0&&w/2<l){
			setTor(true)
		}
		try{
			document.addEventListener('click', (e:any) => {
				let mbox = findDOMNode(dbox.current)
				if(!mbox.contains(e.target)){
					setState(false)
				}
			}, false)
		}catch(e){}
	})
	return (
		<div className="dropdown" ref={dbox}>
			<div className="dropdown-toggle" onClick={()=>{setState(!state)}}>{props.title||'请选择'}</div>
			<CSSTransition in={state} timeout={200} classNames="drops" unmountOnExit>
			<div className={"dropdown-menu"+(tor?" dropdown-menu-right":"")}>{props.children}</div>
			</CSSTransition>
		</div>
	)
}