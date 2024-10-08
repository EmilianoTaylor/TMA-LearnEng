import './journeyPage.scss'
import goldBack from '../images/journeyPage/goldBack.png'
import coin from '../images/journeyPage/coin.png'
import blueArrow from '../images/journeyPage/blueArrow.png'
import pinkGradient from '../images/journeyPage/pinkGradient.png'
import UpperPanel from '../pannels/upperPanel'
import { useState } from 'react'
import VoiceComponent from './voiceComponent'
import { useNavigate } from 'react-router-dom'




export default function JourneyPage() {
	const [rusWord, setRusWord] = useState('транспорт');
	const [engWord, setEngWord] = useState('transport');
	const [balance, setBalance] = useState(15);
	const [correctAnswers, setCorrectAnswers] = useState('125');
	const [uncorrectAnswers, setUnCorrectAnswers] = useState('23');

	
	const navigate = useNavigate();

  const handleClick = () => {
    navigate('/moreCoins');
  };

	return (
		<div className="journeyPage">
			<UpperPanel />
			<p className="title">режим</p>

			<div className='asker'>
				<img src={goldBack} className='goldBack' />
				<p className='question'>Как сказать по-английски <br/><em className='topWord'> «{rusWord}»? </em></p>
				<div className='balanceDiv'>
					<span className='balance'><img src={coin} className='coin' />{balance}</span>
				</div>
			</div>

			<VoiceComponent child={engWord} variant={'вариант 1'}/>
			<VoiceComponent child={'vehicle'} variant={'вариант 2'}/>
			<VoiceComponent child={'transit'} variant={'вариант 3'}/>
			<VoiceComponent child={'conveyance'} variant={'вариант 4'}/>
			<img src={blueArrow} className='blueArrow' />

			<div className='statsDiv'>
				<p className='stats'>cтатистика за всё время</p>

				<p className='correctly'>
					<span className='correct'>правильно</span>
					<span className='uncorrect'>неправильно</span>
				</p>

				<p className='correctlyValue'>
					<span className='correctValue'>{correctAnswers}</span>
					<span className='uncorrectValue'>{uncorrectAnswers}</span>
				</p>

				<img src={pinkGradient} className='pinkGradient' />
			</div>

			<button onClick={handleClick} className='nextBtn'>следующая</button>
		</div>
	)
}