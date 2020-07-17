import React, { useState,useEffect } from "react"
import ReactDOM from 'react-dom'

export const ListBox = (props)=>{
	let idname = props.idname?props.idname:'id'
	let hlist = props.hlist.map((info,i)=>{
		return <th key={i}>{info}</th>
	})
	let field = props.field
	const usefield = (info)=>{
		let html = []
		props.field.map((type,i)=>{
			switch (type.type) {
				case "txt":
					html.push(<td key={i}>{info[type.code]}</td>)
					break;
				case "date":
					let t = new Date(info[type.code])
					html.push(<td key={i}>{t.getFullYear()+'-'+t.getMonth()+'-'+t.getDate()}</td>)
					break;
				case "but":
					html.push(<td key={i}>{type.code}</td>)
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