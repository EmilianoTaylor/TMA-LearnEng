import './everyDayReward.scss'
import table from '../../images/rewardPage/table.png'
import arrow from '../../images/rewardPage/arrow.png'
import { useNavigate } from 'react-router-dom';


export default function EveryDayReward() {


	
	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/selectMode');
  };

	return (
		<div className="everyDayReward">
			<p className="title">ежедневная награда</p>
			<p className='mainText'>
				Забирай монеты за ежедневный вход в игру без пропусков! 
				Кнопку «Забрать» нужно нажимать ежедневно, иначе счетчик дней начнется заново! 
				С каждым днем награда будет расти!
			</p>
			<div id="timer">
				23:59
				<img src={table} className="tableImage" alt="" />
			</div>
			<img src={arrow} className="arrow" alt="" />

			<button onClick={handleClick} className='nextBtn'>следующая</button>
		</div>
	)
}