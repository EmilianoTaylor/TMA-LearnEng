import UpperPanel from '../../pannels/upperPanel'
import './advantagePageOne.scss'
import projectLogo from '../../images/advantagesPage/projectLogo.png'
import energyIcon from '../../images/advantagesPage/energyIcon.png'
import vipIcon from '../../images/advantagesPage/vipIcon.png'
import giftIcon from '../../images/advantagesPage/giftIcon.png'
import arrowIcon from '../../images/advantagesPage/arrowIcon.png'
import getPremium from '../../images/advantagesPage/getPremium.svg'
import agreeIcon from '../../images/advantagesPage/agreeIcon.png'


export default function AdvantagePageOne() {



	return (
		<div className='advantagePageOne'>
			<UpperPanel />
			<div className='mainDiv'>
				<img src={projectLogo} className='projectLogo' />
				<p className='title'>преимущества <br />премиум аккаунта</p>

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

				<img src={getPremium} className='getVipBtn'/>
				<span className='demo'>пробный период составляет 3 дня.<br/>
				затем оплата будет составлять 599₽/месяц</span>
				<span className='agreement'>Я даю согласие на регулярные списания, на <a href="">обработку<br />
				персональных данных</a> и принимаю условия <a href="">публичной оферты</a></span>

				<div className='agreeIconDiv'>
					<img src={agreeIcon} className='agreeIcon'/>
				</div>


			</div>
		</div>
	)
}