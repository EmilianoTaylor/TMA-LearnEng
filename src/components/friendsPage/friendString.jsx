import friendIcon from '../images/friendsPage/friendIcon.png'
import simpleBack from '../images/ratingPage/simpleBack.png'


export default function FriendString({number, userIcon, userName, userBalance}) {


	return (
		<li className="cupString">
			<span className='number'>{number}</span>
			<img src={friendIcon} className='firendIcon'/>
			<img src={userIcon} className='topUserIcon'/>
			<span className = 'topUserName'>{userName}</span>
			<span className='topUserBalance'>{userBalance}</span>
			<img src={simpleBack} className='background'/>
		</li>
	)
}