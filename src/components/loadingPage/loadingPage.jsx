import { useEffect } from "react"
import house from "../images/loadingPage/house.png"
import './loadingPage.scss'

export default function LoadingPage() {
	useEffect(() => {
		const loadingBar = document.querySelector('.loading-bar-inner');

		function updateLoadingBar(percentage) {
			loadingBar.style.width = `${percentage}%`;
		}
	
		let percentage = 0;
		setInterval(() => {
			percentage += 10;
			updateLoadingBar(percentage);
			if (percentage >= 100) {
				percentage = 0;
			}
		}, 500);
	}, [])

	return (
		<div className="loadingPage">
			<img src={house} alt="" className='house'/>
			<p className="studiesEng">studies eng</p>
			<p className="learnEng">обучение<br />английскому</p>
			<p className="wait">подождите ...</p>
			<div className="loading-bar">
				<div className="loading-bar-inner"></div>
			</div>
		</div>
	)
}