import React, { useState,useEffect } from "react"

export const Page = (props)=>{
	const [page,setPage] = useState(Math.floor(props.page||1))
	const allpage = Math.floor(props.allpage||1)
	const size = 5
	const pageList = ()=>{
		let ht = []
		let begin = Math.max(1,page-Math.floor(size/2))
		if(allpage-size>0&&allpage-page<size){
			begin = allpage-size
		}
		let end = Math.min(begin+size,allpage)
		if(begin>1)ht.push(<li className="page-item" key={0}><div className="page-link">...</div></li>)
		for (let i = begin; i <= end; ++i) {
			ht.push(<li className={"page-item"+(page==i&&' active')} key={i} onClick={()=>toPage(i)}><div className="page-link">{i}</div></li>)
		}
		if(end<allpage)ht.push(<li className="page-item" key={allpage+1}><div className="page-link">...</div></li>)
		return ht
	}
	const toPage = (page)=>{
		page = Math.floor(page)
		if(page<1){
			page = 1
		}else if(page>allpage){
			page = allpage
		}
		setPage(page)
		if(props.callback){
			props.callback(page)
		}
	}
	return (
		<ul className="pagination">
			<li className="page-item" onClick={()=>toPage(1)}>
				<div className="page-link">
					<span>&laquo;</span>
				</div>
			</li>
			{pageList()}
			<li className="page-item">
				<input type="number" value={page} onChange={(e)=>{toPage(e.target.value)}} className="into" />
			</li>
			<li className="page-item" onClick={()=>toPage(allpage)}>
				<div className="page-link">
					<span>&raquo;</span>
				</div>
			</li>
		</ul>
	)
}