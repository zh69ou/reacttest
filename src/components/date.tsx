import React, { useState,useEffect } from "react"

export const DateBox = (props)=>{
	const date = props.date?new Date(props.date):new Date()
	const [year,setYear] = useState(date.getFullYear())
	const [month,setMonth] = useState(date.getMonth()+1)
	const [day,setDay] = useState(date.getDate())
	const [seldate,setSeldate] = useState([])
	const weeklist = (line,k)=>{
		return (<div key={k} className="body row justify-content-center">{line}</div>)
	}
	const toDate = (date,k=0)=>{
		setYear(date.getFullYear())
		setMonth(date.getMonth()+1)
		setDay(date.getDate())
		if(k){
			let sd = seldate
			if(props.choice){
				if(seldate.length==0){
					callBack([k,k])
				}else{
					if(sd[1]<k){
						sd[1] = k
					}else if(sd[1]>k&&sd[0]<k){
						sd[1] = k
						sd[0] = k
					}else{
						sd[0] = k
					}
					callBack(sd)
				}
			}else{
				callBack([k,k])
			}
		}
	}
	const callBack = (d)=>{
		setSeldate(d)
		if(props.callback){
			props.callback(d)
		}
	}
	const upDate = (m,y=0)=>{
		let ye = year
		if(y>0) ye += 1
		if(y<0) ye -= 1
		let mo = month
		if(m>0){
			if(month==12){
				mo = 1
				ye += 1
			}else{
				mo += 1
			}
		}
		if(m<0){
			if(month==1){
				mo = 12
				ye -= 1
			}else{
				mo -= 1
			}
		}
		toDate(new Date(ye+'-'+mo+'-'+day))
	}
	const daylist = (da,k)=>{
		let d = new Date(k)
		let m = d.getMonth()+1
		let nd = d.getDate()
		return (<div key={k} onClick={()=>{toDate(d,k)}} className={"col-1 p-0 m-1 border border-light rounded"+(m!=month?' text-black-50':'')+(k>=seldate[0]&&k<=seldate[1]?' bg-primary text-white':'')}>{da}</div>)
	}
	const list = ()=>{
		let ht = []
		let newdate = new Date(year+'-'+month+'-1')
		let nextdate = month<12?new Date(year+'-'+(month+1)+'-1'):new Date((year+1)+'-1-1')
		newdate.setDate(-newdate.getDay()+1)
		let begin = newdate.getTime()
		nextdate.setDate(1+(6-nextdate.getDay()))
		let end = nextdate.getTime()
		let dlist = Array.from(Array(Math.ceil((end-begin)/86400000)+1),(v,k)=>begin+k*86400000)
		let arr = []
		dlist.map((v,k)=>{
			let nd = new Date(v)
			arr.push(daylist(nd.getDate(),v))
			if(nd.getDay()==6){
				ht.push(weeklist(arr,k))
				arr = []
			}
		})
		return (ht)
	}
	return (
		<div className="text-center">
			<div className="head row">
				<div className="col-2" onClick={()=>{upDate(0,-1)}}>&laquo;</div>
				<div className="col-2" onClick={()=>{upDate(-1,0)}}>&lt;</div>
				<div className="col-4 p-0">{year+'-'+month+'-'+day}</div>
				<div className="col-2" onClick={()=>{upDate(1,0)}}>&gt;</div>
				<div className="col-2" onClick={()=>{upDate(0,1)}}>&raquo;</div>
			</div>
			<div className="title row justify-content-center">
				<div className="col-1 p-0 m-1 border border-light">日</div>
				<div className="col-1 p-0 m-1 border border-light">一</div>
				<div className="col-1 p-0 m-1 border border-light">二</div>
				<div className="col-1 p-0 m-1 border border-light">三</div>
				<div className="col-1 p-0 m-1 border border-light">四</div>
				<div className="col-1 p-0 m-1 border border-light">五</div>
				<div className="col-1 p-0 m-1 border border-light">六</div>
			</div>
			{list()}
		</div>
		)
}