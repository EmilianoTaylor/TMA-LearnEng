import UpperPanel from '../pannels/upperPanel'
import './schoolPageMain.scss'
import school from '../images/schoolPage/school.svg'
import title from '../images/schoolPage/title.svg'
import mainArrowBtn from '../images/schoolPage/mainArrow.svg'
import getLicenseBtn from '../images/schoolPage/getLicenseBtn.svg'

export default function SchoolPageMain() {
	return (
		<div className="school-page-main">
			<UpperPanel />
			<div className='mainDiv'>
				<img src={school} className='school' />
				<img src={mainArrowBtn} className='mainArrowBtn' />

				<img src={title} className='title' />
				<img src={getLicenseBtn} className='getLicenseBtn' />
			</div>

		</div>
	)
}