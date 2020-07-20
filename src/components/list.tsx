import React, { useState,useEffect } from "react"
import ReactDOM from 'react-dom'

export const ListBox = (props)=>{
	let idname = props.idname?props.idname:'id'
	let hlist = props.hlist.map((info,i)=>{
		return <th key={i}>{info}</th>
	})
	let field = props.field
	let butlist = (list,info)=>{
		return (list.map((but,i) =>(
			!but.k||but.v!=info[but.k]?<span onClick={()=>{typeof(but.callback)=='function'&&but.callback(info)}} key={i}>{but.html}</span>:null
		)))
	}
	let usefield = (info)=>{
		let html = []
		props.field.map((type,i)=>{
			switch (type.type) {
				case "txt":
					html.push(<td key={i}>{info[type.code]}</td>)
					break;
				case "date":
					var pt = /^[0-9]*$/;
					let t = new Date(pt.test(info[type.code])?Number(info[type.code])*1000:info[type.code])
					html.push(<td key={i}>{t.getFullYear()+'-'+(t.getMonth()+1)+'-'+t.getDate()}</td>)
					break;
				case "but":
					html.push(<td key={i}>{butlist(type.code,info)}</td>)
					break;
				default:
					break;
			}
		})
		return html
	}
	let data = props.data.map((info,i)=>{
		return (
			<tr key={i}>
				{usefield(info)}
			</tr>
		)
	})
	return (
		<table className="table table-hover">
			<thead>
				<tr>
					{hlist}
				</tr>
			</thead>
			<tbody>
				{data}
			</tbody>
		</table>
	)
}