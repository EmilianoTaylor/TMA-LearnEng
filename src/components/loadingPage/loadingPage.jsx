import house from "../images/loadingPage/house.png"
import './loadingPage.css'

export default function LoadingPage() {

	return (
		<div className="loadingPage">
			<img src={house} alt="" className='house'/>
			<p className="studiesEng">studies eng</p>
			<p className="learnEng">обучение<br />английскому</p>
		</div>
	)
}