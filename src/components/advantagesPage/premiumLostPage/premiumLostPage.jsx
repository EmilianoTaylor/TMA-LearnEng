import UpperPanel from '../../pannels/upperPanel'
import './premiumLostPage.scss'
import projectLogoGold from '../../images/advantagesPage/projectLogoGold.svg'
import energyIcon from '../../images/advantagesPage/energyIcon.png'
import vipIcon from '../../images/advantagesPage/vipIcon.png'
import giftIcon from '../../images/advantagesPage/giftIcon.png'
import arrowIcon from '../../images/advantagesPage/arrowIcon.png'
import lostVipBtn from '../../images/advantagesPage/lostVip.svg'
import closeBtn from '../../images/advantagesPage/closeBtn.png'
import { useState } from 'react'


export default function PremiumLostPage() {
	const [date, setDate] = useState('28.08.2024')



	return (
		<div className='premiumLostPage'>
			<UpperPanel />
			<div className='mainDiv'>
				<img src={projectLogoGold} className='projectLogo' />
				<p className='title'>премиум</p>
				<span className='lostText'>приостановлен</span>

				<div className='advantages'>
					<div className='advantageOne'>
						<img src={energyIcon} className='advantageIcon'/>
						<span className='advantageText'>больше енергии</span>
					</div>
					<div className='advantageTwo'>
						<img src={vipIcon} className='advantageIcon-с'/>
						<span className='advantageText'>vip рейтинг</span>
					</div>
					<div className='advantageThree'>
						<img src={giftIcon} className='advantageIcon-c1'/>
						<span className='advantageText'>участие<br />в розыгрышах</span>
					</div>
					<div className='advantageFour'>
						<img src={arrowIcon} className='advantageIcon-c2'/>
						<span className='advantageText'>доступ к особым<br />викторинам</span>
					</div>
				</div>

				<img src={lostVipBtn} className='getVipBtn'/>

				<span className='demo'>неуспешная оплата</span>
				<img src={closeBtn} className='closeBtn'/>

			</div>
		</div>
	)
}