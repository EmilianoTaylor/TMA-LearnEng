import UpperPanel from '../../pannels/upperPanel'
import './winterSlalomPageThree.scss'
import blueBackground from '../../images/winterSlalomPage/blueBackground.png'
import snowflakeOne from '../../images/winterSlalomPage/snowflakeOne.svg'
import snowflakeTwo from '../../images/winterSlalomPage/snowflakeTwo.png'
import snowflakeThree from '../../images/winterSlalomPage/snowflakeThree.svg'
import timerIcon from '../../images/winterSlalomPage/timerIcon.svg'
import prises from '../../images/winterSlalomPage/prises.svg'
import blueArrow from '../../images/winterSlalomPage/blueArrow.svg'




export default function WinterSlalomPageThree() {




	return (
		<div className='winterSlalomPageThree'> 
			<UpperPanel />
			<div className='mainDiv'>
				<img src={blueBackground} className='blueBackground' />
				<span className='raffleTitle'>розыгрыш</span>
				<span className='slalomTitle'><em className='quote'>&laquo;</em>зимний слалом<em className='quote'>&raquo;</em></span>
				<img src={snowflakeTwo} className='snowflakeTwo' />
				<img src={snowflakeOne} className='snowflakeOne' />
				<img src={snowflakeThree} className='snowflakeThree' />
				<img src={timerIcon} className='timerIcon' />
				<span className='soonTitle'>скоро ...</span>
				<img src={prises} className='prises' />
				<span className='winnersTitle'>условия</span>
				<img src={blueArrow} className='blueArrow' />
			</div>
		</div>
	)
}