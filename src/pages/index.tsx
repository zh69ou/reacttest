import React,{useState,useContext,useEffect,useRef} from "react"
import {IsLoad} from "../config/pub"

import {HtmlToImg,ToImage} from "../components/htmltoimg"

const DefIndex = (props) => {
	const [simg,setSimg] = useState(null)
	const wimg = 'http://test.kodo.esports168.com/15f20d9b54957e96615.png'
	useEffect(()=>{
		IsLoad(false)
		ToImage(wimg).then((res)=>{
			setSimg(res)
		}).catch((err)=>{
			console.log('err',err)
		})
	},[])
	const convas = useRef(null)
	return (
		<div id="bac">
			<div ref={convas}>
				<div>测试</div>
				<div>测试</div>
				<div>测试</div>
				<div>测试</div>
				<img src={wimg} />
				<img src={simg} />
				<div>测试</div>
				<div>测试</div>
				<div>测试</div>
			</div>
			<button onClick={()=>{HtmlToImg(document.getElementById('bac')).then((res:string)=>{
				setSimg(res)
			}).catch((err)=>{console.log(err)})}}>打开</button>
		</div>
	)
}
export default DefIndex