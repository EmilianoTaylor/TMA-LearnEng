import { useRef, useState } from 'react';
import UpperPanel from '../pannels/upperPanel'
import './getRewardPage.scss'
import getRewardBtn from '../images/getRewardPage/getRewardBtn.png'
import eclipse from '../images/getRewardPage/eclipse.png'
import tryAgainBtn from '../images/getRewardPage/tryAgainBtn.png'
import fullStar from '../images/getRewardPage/fullCoin.svg'
import halfStar from '../images/getRewardPage/halfCoin.svg'
import emptyStar from '../images/getRewardPage/emptyCoin.svg'
import reward from './reward.svg';



export default function GetRewardPage() {
	const valueRef = useRef(null);
	const [starState, setStarState] = useState(70);

	return (
		<div className='getRewardPage'>
			<UpperPanel />
			<p className='pageTitle'>награда</p>
			<img src={reward} className='reward' />
			<img src={getRewardBtn} className='getRewardBtn' />
			<span className='resultSpan'>ваш результат</span>

			<div className="progressDiv">
				<ul className='starList'>
							<li className='star'>
								{starState < 15 ? <img src={emptyStar} className='starImg' id='firstStar'/> : 
									starState < 50 ? <img src={halfStar} className='starImg' id='firstStar'/> : 
									<img src={fullStar} className='starImg' id='firstStar'/>
								}
							</li>
							<li className='star'>
								{starState < 33 ? <img src={emptyStar} className='starImg' id='firstStar'/> : 
										starState < 65 ? <img src={halfStar} className='starImg' id='firstStar'/> : 
										<img src={fullStar} className='starImg' id='firstStar'/>
									}
							</li>
							<li className='star'><img src={emptyStar} className='starImg' id='firstStar'/></li>
						</ul>

				<span ref={valueRef} className="energyValue">{starState}<em className='energyValue-grey'> / 100</em></span>
				<img src={eclipse} className='eclipse' />
			</div>
			<img src={tryAgainBtn} className='tryAgainBtn' />
		</div>
	)
}