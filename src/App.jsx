import { useState } from 'react'
import './App.css'
import LoadingPage from './components/loadingPage/loadingPage'
import RewardPage from './components/rewardPage/rewardPage'
import EveryDayReward from './components/rewardPage/everyDayReward/everyDayReward'
import SelectMode from './components/selectMode/selectModePage'

function App() {
 
  return (
      <>
				{/* <LoadingPage /> */}
				{/* <RewardPage /> */}
				{/* <EveryDayReward /> */}
				<SelectMode />
			</>
  )
}

export default App
