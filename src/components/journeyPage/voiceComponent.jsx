import './voiceComponent.scss'
import background from '../images/journeyPage/background.png'
import correctAnswer from '../images/journeyPage/correctAnswer.png'
import wrongAnswer from '../images/journeyPage/wrongAnswer.png'
import micro from '../images/journeyPage/micro.png'
import { useState } from 'react'




export default function VoiceComponent({child, variant}) {
	let correct = 'transport'
	let finded = false;
	const [answer, setAnswer] = useState('');

	const checkAnswer = () => {
		if (finded === true) {return} else if (finded === false) {
		if (child === correct) {
			finded = true
			setAnswer(true);
		} else {setAnswer(false)}
	}		console.log(answer);
	};

	return (
		<div className='voiceComponent'>
			<p className='title'  onClick={checkAnswer}>{child}</p>
			<span className='variant'>{variant}</span>
			<img src={answer === '' ? background : answer === true ? correctAnswer : answer === false ? wrongAnswer : ''} className='voiceBackground' />
			<img src={answer === '' ? micro : ''} className='micro' />
		</div>
	)
}