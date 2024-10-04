import background from '../images/selectMode/background.png'
import './titleComponent.scss'

export default function TitleComponent({childOne, childTwo}) {

	return (
		<div className="titleComponent">
			<span className='componentTitle'>{childOne}</span>
			<span className='componentText'>{childTwo}</span>
			<img src={background} className='background' />
		</div>
	)
}