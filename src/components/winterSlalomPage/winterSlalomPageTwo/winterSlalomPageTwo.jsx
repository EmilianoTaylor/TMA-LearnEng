import UpperPanel from '../../pannels/upperPanel'
import './winterSlalomPageTwo.scss'
import blueBackground from '../../images/winterSlalomPage/blueBackground.png'
import snowflakeOne from '../../images/winterSlalomPage/snowflakeOne.svg'
import snowflakeTwo from '../../images/winterSlalomPage/snowflakeTwo.png'
import snowflakeThree from '../../images/winterSlalomPage/snowflakeThree.svg'
import skies from '../../images/winterSlalomPage/skies.png'
import prises from '../../images/winterSlalomPage/prises.svg'
import { useRef, useState } from 'react'
import background from '../../images/selectMode/background.png'
import arrow from '../../images/selectMode/arrow.png'
import crownIcon from '../../images/winterSlalomPage/crown.png'
import rewardIcon from '../../images/moreCoinsPage/rewardIcon.png'
import tgIcon from '../../images/moreCoinsPage/tgIcon.png'
import friendsIcon from '../../images/moreCoinsPage/friendsIcon.png'
import doneBack from '../../images/moreCoinsPage/doneBack.png'
import doneIcon from '../../images/moreCoinsPage/doneIcon.png'
import checkBtn from '../../images/winterSlalomPage/checkBtn.svg'


export default function WinterSlalomPageTwo() {
	const imgRef = useRef(null)
	const [done, setDone] = useState(false)



	return (
		<div className='winterSlalomPageTwo'> 
			<UpperPanel />
			<div className='mainDiv'>
				<img src={blueBackground} className='blueBackground' />
				<span className='raffleTitle'>розыгрыш</span>
				<span className='slalomTitle'><em className='quote'>&laquo;</em>зимний слалом<em className='quote'>&raquo;</em></span>
				<img src={snowflakeTwo} className='snowflakeTwo' />
				<img src={snowflakeOne} className='snowflakeOne' />
				<img src={snowflakeThree} className='snowflakeThree' />
				<img src={skies} className='skies' />
				<img src={prises} className='prises' />
				<span className='winnersTitle'>условия</span>

				<div className='conditionsDiv'>
					<div className="titleComponent" onClick={() => {done ? setDone(false) : setDone(true)}}>
						{done ? <img src={doneIcon} className='doneIcon'/> : <img src={arrow} className='arrow'/>}
						<span id='span-one'>активный месячный<br />премиум</span>
						{done ? <img ref={imgRef} src={doneBack} className='background' /> : <img ref={imgRef} src={background} className='background' />}
						<img src={crownIcon} className='imageComp'/>
					</div>


					<div className="titleComponent">
						<img src={arrow} className='arrow' id='first'/>
						<span id='span-two'>пройти призовую<br />викторину</span>
						<img ref={imgRef} src={background} className='background' />
						<img src={rewardIcon} className='imageComp' id='rewardImg' />
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
				</div>

				
				<img src={checkBtn} className='checkBtn' />
				<div className='emptyDiv'></div>
			</div>
		</div>
	)
}