import UpperPanel from '../pannels/upperPanel'
import './selectModePage.scss'
import TitleComponent from './titleComponent'
import background from '../images/selectMode/background.png'
import firstCompImg from '../images/selectMode/first.png'
import secondCompImg from '../images/selectMode/seccond.png'
import thirdCompImg from '../images/selectMode/third.png'
import fourthCompImg from '../images/selectMode/fourth.png'
import fivthCompImg from '../images/selectMode/fivth.png'
import arrow from '../images/selectMode/arrow.png'
import { useRef } from 'react'


export default function SelectMode() {
	const imgRef = useRef(null)

	function divClick () {
		const image = imgRef.current
			image.style.filter = 'brightness(150%)';
			setTimeout(() => {
				image.style.filter = 'brightness(100%)';
			}, 1000)
	}

	return (
		<div className="selectMode">
			<UpperPanel />
			<p className="title">режим</p>
			<p className='underTitle'>Выберите категорию теста</p>

			<TitleComponent childOne="призовой режим" childTwo="рус./англ." imageName={firstCompImg} id="firstImg" arrowId="firstArrow"/>
			<TitleComponent childOne="слова" childTwo="рус./англ." imageName={secondCompImg} arrowId="secondArrow"/>
			<TitleComponent childOne="слова" childTwo="англ./рус." imageName={thirdCompImg} arrowId="thirdArrow"/>

			<div className="additionalTitleComponent" onMouseEnter={divClick}>
				<img src={arrow} className='arrow' id='fourthArrow'/>
				<span className='componentTitle'>Грамматика</span>
				<img ref={imgRef} src={background} className='background' />
				<img src={fourthCompImg} className='imageComp' />
			</div>

			<TitleComponent childOne="фразы" childTwo="рус./англ." imageName={fivthCompImg} arrowId='fivthArrow'/>
			<TitleComponent childOne="фразы" childTwo="англ./рус." imageName={fivthCompImg} arrowId='fivthArrow'/>
		</div>
	)
}