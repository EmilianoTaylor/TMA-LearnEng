import UpperPanel from '../pannels/upperPanel'
import './getRewardPage.scss'
import getRewardBtn from '../images/getRewardPage/getRewardBtn.png'
import eclipse from '../images/getRewardPage/eclipse.png'
import tryAgainBtn from '../images/getRewardPage/tryAgainBtn.png'
import reward from './reward.svg';
import { useRef } from 'react';


export default function GetRewardPage() {
	const valueRef = useRef(null);

	return (
		<div className='getRewardPage'>
			<UpperPanel />
			<p className='pageTitle'>награда</p>
			<img src={reward} className='reward' />
			<img src={getRewardBtn} className='getRewardBtn' />
			<span className='resultSpan'>ваш результат</span>

			<div className="progressDiv">
				<div className="star"></div>
				<div className="star"></div>
				<div className="star"></div>
				<span ref={valueRef} className="energyValue">15<em className='energyValue-grey'> / 100</em></span>
				<img src={eclipse} className='eclipse' />
			</div>
			<img src={tryAgainBtn} className='tryAgainBtn' />
		</div>
	)
}