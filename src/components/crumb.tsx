import React, { useState,useEffect } from "react"

export const Crumb = (props)=>{
	let menu = props.menu.map((info,k)=>{
		return (k==props.menu.length-1)?<li key={k} className="breadcrumb-item active">{info.name}</li>:<li key={k} className="breadcrumb-item"><a href={info.url}>{info.name}</a></li>
	})
	return (
		<div className="row justify-content-between align-items-center">
			<ol className="col-12 col-md-8 breadcrumb">
				{menu}
			</ol>
			<div className="col-12 col-md-4 d-flex justify-content-end">
				{props.children}
			</div>
		</div>
	)
}