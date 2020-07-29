import React,{useState,useContext,useEffect} from "react"
import {IsLoad} from "../config/pub"

import {DropDown} from "../components/dropdown"
import "../components/scss/dropdown.scss"

const DefIndex = (props) => {
	useEffect(()=>{
		IsLoad(false)
	},[])
	return (
		<div className="d-flex justify-content-around">
			<DropDown>
				<div className="dropdown-item active">Cras justo odio</div>
				<div className="dropdown-item">Dapibus ac facilisis in</div>
				<div className="dropdown-item">Morbi leo risus</div>
				<div className="dropdown-item">Porta ac consectetur ac</div>
				<div className="dropdown-item">Vestibulum at eros</div>
			</DropDown>
			<DropDown>
				<div className="dropdown-item active">Cras justo odio</div>
				<div className="dropdown-item">Dapibus ac facilisis in</div>
				<div className="dropdown-item">Morbi leo risus</div>
				<div className="dropdown-item">Porta ac consectetur ac</div>
				<div className="dropdown-item">Vestibulum at eros</div>
			</DropDown>
			<DropDown>
				<div className="dropdown-item active">Cras justo odio</div>
				<div className="dropdown-item">Dapibus ac facilisis in</div>
				<div className="dropdown-item">Morbi leo risus</div>
				<div className="dropdown-item">Porta ac consectetur ac</div>
				<div className="dropdown-item">Vestibulum at eros</div>
			</DropDown>
		</div>
	)
}
export default DefIndex