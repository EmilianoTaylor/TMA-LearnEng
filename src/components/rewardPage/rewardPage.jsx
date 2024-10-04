import './rewardPage.scss'
import gift from "../images/rewardPage/gift.png"
import takeGift from "../images/rewardPage/takeGift.png"
import { useState } from 'react'


export default function RewardPage() {
	const [counter, setCounter] = useState(25)

	return (
		<div className="rewardPage">
			<img src={gift} alt="" className='gift'/>
				<p className='title'>Ежедневная<br/>награда</p>
				<p className='reward-text'>Забирай монеты за ежедневный вход в игру без пропусков! 
					Кнопку «Забрать» нужно нажимать ежедневно, 
					иначе счетчик дней начнется заново! 
					С каждым днем награда будет расти!
				</p>
				<p className='counerPar'>Подряд уже <span className='eclipseSpan'>{counter}</span> дней</p>
				<p className='counterDown'>так держать!</p>
			<img src={takeGift} alt="" className='takeGift'/>
		</div>
	)
}