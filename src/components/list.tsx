import React, { useState,useEffect } from "react"
import ReactDOM from 'react-dom'

export const ListBox = (props)=>{
	let idname = props.idname?props.idname:'id'
	let hlist = props.hlist.map((info)=>{
		return <th>{info}</th>
	})
	let field = props.field
	const usefield = (info)=>{
		let html = []
		props.field.map((type)=>{
			switch (type.type) {
				case "txt":
					html.push(<td>{info[type.code]}</td>)
					break;
				case "date":
					let t = new Date(info[type.code])
					html.push(<td>{t.getFullYear()+'-'+t.getMonth()+'-'+t.getDate()}</td>)
					break;
				case "but":
					let but = []
					if(type.code.indexOf('show')>=0)but.push(<button>查看</button>)
					if(type.code.indexOf('edit')>=0)but.push(<button>编辑</button>)
					if(type.code.indexOf('del')>=0)but.push(<button>删除</button>)
					if(type.code.indexOf('log')>=0)but.push(<button>日志</button>)
					html.push(<td>{but}</td>)
					break;
				default:
					break;
			}
		})
		return html
	}
	let data = props.data.map((info)=>{
		return (
			<tr>
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