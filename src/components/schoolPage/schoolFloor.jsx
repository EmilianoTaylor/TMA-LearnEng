import './schoolFloor.scss'
import { useEffect, useRef } from 'react';
import fullFloorSvg from '../images/schoolPage/fullFloor.svg'
import title from '../images/schoolPage/title.svg'
import fullFloor from '../images/schoolPage/fullFloor.png'
import slideRight from '../images/schoolPage/slideRight.svg'
import slideLeft from '../images/schoolPage/slideLeft.svg'
import passedBtn from '../images/schoolPage/passedBtn.svg'
import emptyBtn from '../images/schoolPage/emptyBtn.svg'
import UpperPanel from '../pannels/upperPanel';



export default function SchoolFloorPage() {
	const bottomRef = useRef(null);
	const rightRef = useRef(null);
	
	useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

	const handleScrollToRight = () => {
    rightRef.current.scrollIntoView({ behavior: 'smooth' });
  };

	const handleScrollToLeft = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

	return (
		<div className='schoolFloorPage'>
			<UpperPanel />
			<img src={title} className='title' />
			<img src={fullFloor} className='fullFloor' />
			<img src={slideRight} className='slideRight' onClick={handleScrollToRight}/>
			<img src={slideLeft} className='slideLeft' onClick={handleScrollToLeft}/>

			<div className='right' ref={rightRef}/>
			<div className='bottom' ref={bottomRef} />
		</div>
	)
}

