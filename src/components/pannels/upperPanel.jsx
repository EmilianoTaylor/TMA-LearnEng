import "./upperPanel.scss"
import cashBackground from "../images/panels/cashBackground.png"
import balanceCoin from "../images/panels/balanceCoin.png"
import energySign from "../images/panels/energySign.png"
import back from "../images/panels/back.svg"

import { useEffect, useRef, useState } from "react"


export default function UpperPanel() {
	const [balance, setBalance] = useState(236)
	const [percent, setPercent] = useState(500);

	const fillRef = useRef(null);
  const valueRef = useRef(null);

		useEffect(() => {
			const fill = fillRef.current;
			const value = valueRef.current;
	
			if (fill && value) {
				fill.style.width = `${percent / 10}%`;
				value.textContent = `${percent}`;
			} else {
				console.error('Элементы .fill и .value не найдены в DOM');
			}
		}, [percent]);

	return (
		<div className="upperPanel">
			<div className="balanceDiv">
				<p className="balanceWord">
					баланс
					<strong className="balanceState">{balance}</strong>
				</p>
				<img src={balanceCoin} className="balanceCoin" />
				<img src={cashBackground} className="cashBackground" />
			</div>

			<div className="energyDiv">
				<img src={energySign} className="energySign" />
				<span ref={valueRef} className="energyValue">10%</span><span className="energyValue-grey"> / 1000</span>
				<div className="scale">
					<div ref={fillRef} className="fill" style={{width: '0%'}}></div>
				</div>
			</div>
			<img src={back} className="back" />
		</div>
	)
}