import React from "react"
import ReactDOM from "react-dom"

import { BsRouter } from "./config/bsrouter"
require('../assets/img/loading.png')

ReactDOM.render(
    <BsRouter />,
    document.getElementById("app"),
    ()=>{
    	// setTimeout(()=>{
    	// 	document.getElementById("app").style.display = "block"
    	// 	document.getElementById("loading").style.display = "none"
    	// },500)
    }
)