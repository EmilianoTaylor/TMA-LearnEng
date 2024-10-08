import './ratingPage.scss'
import titleCup from '../images/ratingPage/titleCup.png'
import UpperPanel from '../pannels/upperPanel'
import CupString from './cupString'
import coin from '../images/ratingPage/coin.png'
import icon1 from '../images/ratingPage/icon1.png'
import noIcon from '../images/ratingPage/icon2.png'
import icon3 from '../images/ratingPage/icon3.png'


export default function RatingPage() {

	
	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/friends');
  };

	return (
		<div className="ratingPage">
			<UpperPanel />


			<div className='divList'>
				<img src={titleCup} className='titleCup' />
				<span className="title">займите первое место</span>
				<span className='ratingString'>рейтинг участников</span>
				<img src={coin} className='coin' />
			</div>

			<ul className='cupList'>
				<CupString number={1} userIcon={icon1} userName={'tarzan'} userBalance={'2350'}/>
				<CupString number={2} userIcon={noIcon} userName={'nugget'} userBalance={'2250'}/>
				<CupString number={3} userIcon={icon3} userName={'techie'} userBalance={'2190'}/>
				<CupString number={4} userIcon={icon3} userName={'teacup'} userBalance={'2100'}/>
				<CupString number={5} userIcon={icon3} userName={'baloo'} userBalance={'2050'}/>
				<CupString number={6} userIcon={icon3} userName={'sneezy'} userBalance={'1999'}/>
				<CupString number={7} userIcon={icon3} userName={'breez'} userBalance={'1850'}/>
				<CupString number={8} userIcon={icon3} userName={'stokez'} userBalance={'1850'}/>
				<CupString number={9} userIcon={icon3} userName={'jason'} userBalance={'1850'}/>
				<CupString number={10} userIcon={icon3} userName={'john'} userBalance={'1850'}/>
				<CupString number={11} userIcon={icon3} userName={'eazy'} userBalance={'1850'}/>
			</ul>



			<button onClick={handleClick} className='nextBtn'>следующая</button>
		</div>
			)
}