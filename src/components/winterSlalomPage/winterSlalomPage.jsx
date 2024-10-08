import UpperPanel from '../pannels/upperPanel'
import './winterSlalomPage.scss'
import blueBackground from '../images/winterSlalomPage/blueBackground.png'
import snowflakeOne from '../images/winterSlalomPage/snowflakeOne.svg'
import snowflakeTwo from '../images/winterSlalomPage/snowflakeTwo.png'
import snowflakeThree from '../images/winterSlalomPage/snowflakeThree.svg'
import skies from '../images/winterSlalomPage/skies.png'
import prises from '../images/winterSlalomPage/prises.svg'
import icon1 from '../images/ratingPage/icon1.png'
import noIcon from '../images/ratingPage/icon2.png'
import icon3 from '../images/ratingPage/icon3.png'
import WinnerString from './winnersString'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function WinterSlalomPage() {
	const [firstPrise, setFirstPrise] = useState('iphone 15 pro')
	const [secondPrise, setSecondPrise] = useState('airpods 3')
	const [thirdPrise, setThirdPrise] = useState('яндекс.станция')
	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
	


	return (
		<div className='winterSlalomPage'> 
			<UpperPanel />
			<div className='mainDiv'>
				<img src={blueBackground} className='blueBackground' />
				<span className='raffleTitle'>розыгрыш</span>
				<span className='slalomTitle'><em className='quote'>&laquo;</em>зимний слалом<em className='quote'>&raquo;</em></span>
				<img src={snowflakeTwo} className='snowflakeTwo' />
				<img src={snowflakeOne} className='snowflakeOne' />
				<img src={snowflakeThree} className='snowflakeThree' />
				<img src={skies} className='skies' />
				<span className='prisesTitle'>призы</span>
				<span className='firstPlace'>{firstPrise}</span>
				<span className='secondPlace'>{secondPrise}</span>
				<span className='thirdPlace'>{thirdPrise}</span>
				<img src={prises} className='prises' />


				<span className='winnersTitle'>победители</span>
				<ul className='cupList'>
					<WinnerString number={1} userIcon={icon1} userName={'tarzan'} userBalance={firstPrise}/>
					<WinnerString number={2} userIcon={noIcon} userName={'nugget'} userBalance={secondPrise}/>
					<WinnerString number={3} userIcon={icon3} userName={'techie'} userBalance={thirdPrise}/>
					<WinnerString number={4} userIcon={icon3} userName={'teacup'} userBalance={'я.станция мини'}/>
				</ul>
			</div>

      <button onClick={handleClick} className='nextBtn'>следующая</button>
		</div>
	)
}