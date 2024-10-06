import ratingCup from '../images/ratingPage/ratingCup.png'
import goldIcon from '../images/ratingPage/goldIcon.png'
import winnerBack from '../images/ratingPage/winnerBack.png'
import secBack from '../images/ratingPage/secBack.png'
import simpleBack from '../images/ratingPage/simpleBack.png'


export default function CupString({number, userIcon, userName, userBalance}) {


	return (
		<li className="cupString">
			<span className='number'>{number}</span>
			{number == 1 ? <img src={ratingCup} className='ratingCup'/> : number == 2 | number == 3 ? <img src={goldIcon} className='goldIcon'/> : null} 
			<img src={userIcon} className={number <= 3 ? 'topUserIcon' : 'userIcon'}/>
			<span className = {number <= 3 ? 'topUserName' : 'userName'}>{userName}</span>
			<span className={number <= 3 ? 'topUserBalance' : 'userBalance'}>{userBalance}</span>
			{
				number == 1 ? <img src={winnerBack} className='background'/> : 
				number == 2 | number == 3 ? <img src={secBack} className='background'/> : 
				<img src={simpleBack} className='background'/>
				} 
		</li>
	)
}