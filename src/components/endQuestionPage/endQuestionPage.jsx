import './endQuestionPage.scss'
import { useState } from 'react'
import UpperPanel from '../pannels/upperPanel'
import mob from '../images/endQuestionPage/mob.png'
import whereText from '../images/endQuestionPage/whereText.png'
import backBtn from '../images/endQuestionPage/backBtn.png'
import pinkGradient from '../images/journeyPage/pinkGradient.png'



export default function EndQuestionPage() {
	const [correctAnswers, setCorrectAnswers] = useState('125');
	const [uncorrectAnswers, setUnCorrectAnswers] = useState('23');
	
	return (
		<div className='endQuestionPage'>
			<UpperPanel />
			<div className='mainDiv'>
				<img src={mob} className='mob' />
				<img src={whereText} className='whereText' />
				<p className='title'>вопросов пока нет<br/><span className='underTitle'>но они скоро появятся!</span></p>
				<img src={backBtn} className='backBtn' />
			</div>


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
		</div>
	)
}