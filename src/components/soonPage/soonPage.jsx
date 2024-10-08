import UpperPanel from '../pannels/upperPanel'
import './soonPage.scss'
import mob from '../images/soonPage/mob.png'
import sorryText from '../images/soonPage/sorryText.png'
import backBtn from '../images/soonPage/backBtn.png'



export default function SoonPage() {
	
	
	return (
		<div className='soonPage'>
			<UpperPanel />
			<div className='mainDiv'>
				<img src={mob} className='mob' />
				<span className='sorryText'>{`сорян :(`}</span>
				<p className='title'>режим скоро<br />откроется!</p>
				<img src={backBtn} className='backBtn' />
			</div>
		</div>
	)
}