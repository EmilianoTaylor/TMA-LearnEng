import './friendsPage.scss'
import friendsTitle from '../images/friendsPage/friendsTitle.png'
import UpperPanel from '../pannels/upperPanel'
import FriendString from './friendString'
import coin from '../images/ratingPage/coin.png'
import icon1 from '../images/ratingPage/icon1.png'
import icon2 from '../images/friendsPage/icon2.png'
import icon3 from '../images/ratingPage/icon3.png'
import inviteBtn from '../images/friendsPage/inviteBtn.png'
import copyBtn from '../images/friendsPage/copyBtn.png'
import { useNavigate } from 'react-router-dom'


export default function FriendsPage() {

	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/telegramJoin');
  };

	return (
		<div className="ratingPage">
			<UpperPanel />


			<div className='divList'>
				<img src={friendsTitle} className='titleCup' />
				<span className="title">пригласите друзей</span>
				<span className='ratingString'>список приглашенных участников</span>
				<img src={coin} className='coin' />
			</div>

			<ul className='cupList'>
				<FriendString number={1} userIcon={icon1} userName={'tarzan'} userBalance={'2350'}/>
				<FriendString number={2} userIcon={icon2} userName={'nugget'} userBalance={'2250'}/>
				<FriendString number={3} userIcon={icon3} userName={'techie'} userBalance={'2190'}/>
			</ul>

			<div className='downPanel'>
				<img src={inviteBtn} className='inviteBtn' />
				<img src={copyBtn} className='copyBtn' />
			</div>

			
			<button onClick={handleClick} className='nextBtn'>следующая</button>
		</div>
			)
}