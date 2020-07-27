import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {Page} from "../components/page"
import "../components/scss/page.scss"

const DefIndex = (props) => {
	useEffect(()=>{
		IsLoad(false)
	},[])
	const callback = (num)=>{
	}
	return (
		<div>
		<Page allpage="10" callback={(e)=>{callback(e)}}></Page>
		</div>
	)
}
export default DefIndex