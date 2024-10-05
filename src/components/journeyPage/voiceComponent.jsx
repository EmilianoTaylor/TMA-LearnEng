import './voiceComponent.scss'
import background from '../images/journeyPage/background.png'
import micro from '../images/journeyPage/micro.png'




export default function VoiceComponent({child, variant}) {
	


	return (
		<div className='voiceComponent'>
			<p className='title'>{child}</p>
			<span className='variant'>{variant}</span>
			<img src={background} className='voiceBackground' />
			<img src={micro} className='micro' />
		</div>
	)
}