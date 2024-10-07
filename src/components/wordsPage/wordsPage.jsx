import UpperPanel from "../pannels/upperPanel";
import './wordsPage.scss'
import background from '../images/selectMode/background.png'
import info from '../images/wordsPage/i.png'
import premium from '../images/wordsPage/vip.png'
import tableBack from '../images/wordsPage/tableBack.png'
import signQuestion from '../images/wordsPage/question.png'
import arrow from '../images/selectMode/arrow.png'
import fCoin from '../images/wordsPage/coin.png'
import task from '../images/wordsPage/task.png'
import eclipse from '../images/wordsPage/eclipse.png'
import forFreeImage from '../images/wordsPage/forFree.png'
import unknownImage from '../images/wordsPage/unknown.png'
import blueArrow from '../images/wordsPage/blueArrow.png'
import fullStar from '../images/wordsPage/fullCoin.svg'
import halfStar from '../images/wordsPage/halfCoin.svg'
import emptyStar from '../images/wordsPage/emptyCoin.svg'

import { useEffect, useRef, useState } from "react";



export default function WordsPage() {
	const [starState, setStarState] = useState(80);

	const valueRef = useRef(null);
	const fillRef = useRef(null);



	return (
		<div className="wordsPage">
			<UpperPanel />
			<p className="title">режим</p>
			<p className='underTitle'>Выберите категорию теста</p>


			<div className="wordComponent">
				<img src={info} className='info' />
				<img src={premium} className='premium' />
				<img src={arrow} className='arrow' />
				<span className='componentTitle'>путешествия<br/><em>изучите новые слова по теме "путешествия"</em></span>
				<div className="progressDiv">

					<ul className='starList'>
						<li className='star'>
							{starState < 15 ? <img src={emptyStar} className='starImg' id='firstStar'/> : 
								starState < 50 ? <img src={halfStar} className='starImg' id='firstStar'/> : 
								<img src={fullStar} className='starImg' id='firstStar'/>
							}
						</li>
						<li className='star'>
							{starState < 33 ? <img src={emptyStar} className='starImg' id='firstStar'/> : 
									starState < 65 ? <img src={halfStar} className='starImg' id='firstStar'/> : 
									<img src={fullStar} className='starImg' id='firstStar'/>
								}
						</li>
						<li className='star'><img src={emptyStar} className='starImg' id='firstStar'/></li>
						
					</ul>

					<span ref={valueRef} className="energyValue">
						<img src={signQuestion} className='signQuestion'/>
						{starState}<em className="energyValue-grey"> / 100</em>
					</span>
					<img src={tableBack} className='tableBack' />
				</div>
				<img src={background} className='background' />
			</div>


			<div className="wordComponent" id="wordComponent2">
				<img src={arrow} className='arrow' />
				<span className="f_coins">
					<img src={fCoin} className='fCoin' />
					15
					<img src={eclipse} className='eclipse' />
				</span>
				<span className="fruitQuestion">
					<img src={signQuestion} className='fruitQuestionImage'/>
					15
				</span>
				<img src={task} className='task' />
				<span className='componentTitle'>фрукты<br/><em>изучите новые слова по теме "фрукты"</em></span>
				<img src={background} className='background' />
			</div>


			<div className="wordComponent" id="wordComponent2">
				<img src={arrow} className='arrow' />
				<span className="fruitQuestion">
					<img src={signQuestion} className='fruitQuestionImage'/>
					12
				</span>
				<img src={forFreeImage} className='forFreeImage' />
				<img src={task} className='task' />
				<span className='componentTitle'>инструменты<br/><em>изучите новые слова по теме "инструменты"</em></span>
				<img src={background} className='background' />
			</div>


			<div className="wordComponent" id="opacityDiv">
				<img src={arrow} className='arrow' />
				<img src={unknownImage} className='unknownImage' />
				<span className="fruitQuestion">
					<img src={signQuestion} className='fruitQuestionImage'/>
					32
				</span>
				<span className='componentTitle'>гороскоп<br/><em>изучите новые слова по теме "гороскоп"</em></span>
				<img src={background} className='background' />
			</div>


			<div className="wordComponent" id="wordComponent2">
				<img src={arrow} className='arrow' />
				<span className="fruitQuestion">
					<img src={signQuestion} className='fruitQuestionImage'/>
					44
				</span>
				<img src={forFreeImage} className='forFreeImage' />
				<img src={task} className='task' />
				<span className='componentTitle'>спорт<br/><em>изучите новые слова по теме "спорт"</em></span>
				<img src={background} className='background' />
			</div>
			<img src={blueArrow} className='blueArrow' />
		</div>
	)
}