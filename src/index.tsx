import React from "react"
import ReactDOM from "react-dom"

import { BsRouter } from "./config/bsrouter"
// require('../assets/img/favicon.png')
require('../assets/scss/bootstrap.scss')

ReactDOM.render(
    <BsRouter />,
    document.getElementById("app")
)