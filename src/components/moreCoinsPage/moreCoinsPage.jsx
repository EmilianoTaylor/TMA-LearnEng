import { useRef, useState } from 'react'
import UpperPanel from '../pannels/upperPanel'
import './moreCoinsPage.scss'
import titleCoin from '../images/moreCoinsPage/titleCoin.png'
import background from '../images/selectMode/background.png'
import arrow from '../images/selectMode/arrow.png'
import rewardIcon from '../images/moreCoinsPage/rewardIcon.png'
import signIcon from '../images/moreCoinsPage/signIcon.png'
import tgIcon from '../images/moreCoinsPage/tgIcon.png'
import friendsIcon from '../images/moreCoinsPage/friendsIcon.png'
import doneBack from '../images/moreCoinsPage/doneBack.png'
import doneIcon from '../images/moreCoinsPage/doneIcon.png'
import { useNavigate } from 'react-router-dom'




export default function MoreCoinsPage() {
	const imgRef = useRef(null)
	const [done, setDone] = useState(false)

	function divClick () {
		const image = imgRef.current
			image.style.filter = 'brightness(150%)';
			setTimeout(() => {
				image.style.filter = 'brightness(100%)';
			}, 1000)
	}


	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/rating');
  };

	return (
		<div className='moreCoins'>
			<UpperPanel />
			<img src={titleCoin} className='titleCoin' />
			<p className="title">получите больше монет<br/><span className='underTitle'>выполните задания</span></p>


			<div className="titleComponent" onClick={() => {done ? setDone(false) : setDone(true)}}>
				{done ? <img src={doneIcon} className='doneIcon'/> : <img src={arrow} className='arrow'/>}
				<span id='span-one'>ежемесячный<br />розыгрыш</span>
				{done ? <img ref={imgRef} src={doneBack} className='background' /> : <img ref={imgRef} src={background} className='background' />}
				<img src={rewardIcon} className='imageComp' id='rewardImg' />
			</div>


			<div className="titleComponent"  onMouseEnter={divClick}>
				<img src={arrow} className='arrow' id='first'/>
				<span id='span-two'>ежедневный вход</span>
				<img ref={imgRef} src={background} className='background' />
				<img src={signIcon} className='imageComp' />
			</div>


			<div className="titleComponent">
				<img src={arrow} className='arrow' id='first'/>
				<span id='span-three'>присоединяйтесь к нашему<br />телеграм каналу</span>
				<img src={background} className='background' />
				<img src={tgIcon} className='imageComp' />
			</div>

			<div className="titleComponent">
				<img src={arrow} className='arrow' id='first'/>
				<span id='span-four'>пригласи 3х друзей</span>
				<img src={background} className='background' />
				<img src={friendsIcon} className='imageComp' />
			</div>

			<button onClick={handleClick} className='nextBtn'>следующая</button>
		</div>
	)
}