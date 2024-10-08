import './downPanel.scss'
import iconOne from '../images/panels/iconOne.svg'
import iconTwo from '../images/panels/iconTwo.svg'
import iconThree from '../images/panels/iconThree.svg'
import iconFour from '../images/panels/iconFour.svg'
import iconFive from '../images/panels/iconFive.svg'
import iconSix from '../images/panels/iconSix.svg'
import { useState } from 'react'

export default function DownPanel() {

	const [activeIndex, setActiveIndex] = useState(0);

  const items = [
		{ id: 1, text: <img src={iconOne} className='iconOne' /> },
		{ id: 2, text: <img src={iconTwo} className='iconOne' /> },
		{ id: 3, text: <img src={iconThree} className='iconThree' /> },
		{ id: 4, text: <img src={iconFour} className='iconOne' /> },
		{ id: 5, text: <img src={iconFive} className='iconOne' /> },
	];


	return (
		<div className='downPanel'>
			<ul className='downPanelList'>
			{items.map((item) => (
				<li
					key={item.id}
					className={activeIndex === item.id ? 'active' : ''}
					onClick={() => setActiveIndex(item.id)}
				>
					{item.text}
				</li>
			))}
				{/* <li className='downPanelItem'><img src={iconOne} className='iconOne' /></li>
				<li className='downPanelItem'><img src={iconTwo} className='iconOne' /></li>
				<li className='downPanelItem'><img src={iconThree} className='iconThree' /></li>
				<li className='downPanelItem'><img src={iconFour} className='iconOne' /></li>
				<li className='downPanelItem'><img src={iconFive} className='iconOne' /></li> */}
			</ul>
		</div>
	)
}