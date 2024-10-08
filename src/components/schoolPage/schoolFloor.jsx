import './schoolFloor.scss'
import { useEffect, useRef, useState } from 'react';
import fullFloorSvg from '../images/schoolPage/fullFloor.svg'
import title from '../images/schoolPage/title.svg'
import fullFloor from '../images/schoolPage/fullFloor.png'
import slideRight from '../images/schoolPage/slideRight.svg'
import slideLeft from '../images/schoolPage/slideLeft.svg'
import passedBtn from '../images/schoolPage/passedBtn.svg'
import emptyBtn from '../images/schoolPage/emptyBtn.svg'
import testBtn from '../images/schoolPage/testBtn.png'
import UpperPanel from '../pannels/upperPanel';



export default function SchoolFloorPage() {
	const [one, setOne] = useState(false)
	const [two, setTwo] = useState(false)
	const [three, setThree] = useState(false)
	const [four, setFour] = useState(false)

	const bottomRef = useRef(null);
	const rightRef = useRef(null);

	// const firstBtnRef = useRef(null);
	// const secondBtnRef = useRef(null);
	// const thirdBtnRef = useRef(null);
	// const fourthBtnRef = useRef(null);

	
	useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

	const handleScrollToRight = () => {
    rightRef.current.scrollIntoView({ behavior: 'smooth' });
  };

	const handleScrollToLeft = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

	let startX = 0;

	const handleTouchStart = (e) => {
		startX = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		if (!startX) return;

		const currentX = e.touches[0].clientX;
		const diffX = startX - currentX;

		if (diffX > 20) {
			handleScrollToRight();
				startX = 0;
		} else if (diffX < -20) {
			handleScrollToLeft();
				startX = 0;
		}
	};

	

	return (
		<div className='schoolFloorPage'>
			<UpperPanel />
			<img src={title} className='title' />
			<img 
				src={fullFloor} 
				className='fullFloor' 
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
			/>
			<img src={slideRight} className='slideRight' onClick={handleScrollToRight}/>
			<img src={slideLeft} className='slideLeft' onClick={handleScrollToLeft}/>

			<img src={one ? passedBtn : emptyBtn} className='btn' id='btnOne' onClick={() => {setOne(true)}}/>
			<img src={two ? passedBtn : emptyBtn} className='btn' id='btnTwo' onClick={() => {setTwo(true)}}/>
			<img src={three ? passedBtn : emptyBtn} className='btn' id='btnThree' onClick={() => {setThree(true)}}/>
			<img src={four ? passedBtn : emptyBtn} className='btn' id='btnFour' onClick={() => {setFour(true)}}/>

			<div className='right' ref={rightRef}/>
			<div className='bottom' ref={bottomRef} />
		</div>
	)
}

