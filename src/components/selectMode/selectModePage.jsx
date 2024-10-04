import UpperPanel from '../pannels/upperPanel'
import './selectModePage.scss'
import TitleComponent from './titleComponent'
import background from '../images/selectMode/background.png'


export default function SelectMode() {

	return (
		<div className="selectMode">
			<UpperPanel />
			<p className="title">режим</p>
			<p className='underTitle'>Выберите категорию теста</p>

			<TitleComponent childOne="призовой режим" childTwo="рус./англ." />
			<TitleComponent childOne="слова" childTwo="рус./англ." />
			<TitleComponent childOne="слова" childTwo="англ./рус." />

			<div className="additionalTitleComponent">
				<span className='componentTitle'>Грамматика</span>
				<span className='componentText'>рус./англ.</span>
				<img src={background} className='background' />
			</div>

			<TitleComponent childOne="фразы" childTwo="рус./англ." />
			<TitleComponent childOne="фразы" childTwo="англ./рус." />
		</div>
	)
}