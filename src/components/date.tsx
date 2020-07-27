import React, { useState,useEffect } from "react"

export const DateBox = (props)=>{
	const date = props.date?new Date(props.date):new Date()
	const [year,setYear] = useState(date.getFullYear())
	const [month,setMonth] = useState(date.getMonth()+1)
	const [day,setDay] = useState(date.getDate())
	return (
		<div className="text-center">
			<div className="head row">
				<div className="col-2">&laquo;</div>
				<div className="col-2">&lt;</div>
				<div className="col-4">{year+'-'+month+'-'+day}</div>
				<div className="col-2">&gt;</div>
				<div className="col-2">&raquo;</div>
			</div>
			<div className="title row justify-content-md-center">
				<div className="col-1">日</div>
				<div className="col-1">一</div>
				<div className="col-1">二</div>
				<div className="col-1">三</div>
				<div className="col-1">四</div>
				<div className="col-1">五</div>
				<div className="col-1">六</div>
			</div>
			<div className="body row justify-content-md-center">
				<div className="col-1"></div>
				<div className="col-1"></div>
				<div className="col-1">1</div>
				<div className="col-1">2</div>
				<div className="col-1">3</div>
				<div className="col-1">4</div>
				<div className="col-1">5</div>
			</div>
		</div>
		)
}