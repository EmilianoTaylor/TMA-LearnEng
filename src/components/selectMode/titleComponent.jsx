import background from '../images/selectMode/background.png'
import arrow from '../images/selectMode/arrow.png'
import './titleComponent.scss'
import { useRef } from 'react'

export default function TitleComponent({childOne, childTwo, imageName, id}) {
	const imgRef = useRef(null)

	function divClick () {
		const image = imgRef.current
			image.style.filter = 'brightness(150%)';
			setTimeout(() => {
				image.style.filter = 'brightness(100%)';
			}, 1000)
	}

	

	return (
		<div className="titleComponent" onMouseEnter={divClick} >
			<img src={arrow} className='arrow'/>
			<span className='componentTitle'>{childOne}<br/><em>{childTwo}</em></span>
			<img ref={imgRef} src={background} className='background' />
			<img src={imageName} className='imageComp' id={id}/>

		</div>
	)
}