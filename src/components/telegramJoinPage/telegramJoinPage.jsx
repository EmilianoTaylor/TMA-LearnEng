import './telegramJoinPage.scss'
import UpperPanel from '../pannels/upperPanel'
import blueLight from '../images/telegramJoinPage/blueLight.png'
import tgIcon from '../images/telegramJoinPage/tgIcon.png'
import subscribeBtn from '../images/telegramJoinPage/subscribeBtn.png'
import eclipse from '../images/telegramJoinPage/eclipse.png'
import checkBtn from '../images/telegramJoinPage/checkBtn.png'




export default function TelegramJoinPage() {


	return (
		<div className='telegramJoinPage'>
			<UpperPanel />
			<div className='mainDiv'>
				<img src={blueLight} className='blueLight' />
				<img src={tgIcon} className='tgIcon' />
				<span className='title'>присоединяйтесь<br />к нашему телеграм<br />каналу</span>
				<img src={subscribeBtn} className='subscribeBtn' />
				<img src={eclipse} className='eclipse' />
				<img src={checkBtn} className='checkBtn' />
			</div>
		</div>
	)
}