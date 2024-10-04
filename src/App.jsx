import { useState } from 'react'
import './App.css'
import LoadingPage from './components/loadingPage/loadingPage'
import RewardPage from './components/rewardPage/rewardPage'
import EveryDayReward from './components/rewardPage/everyDayReward/everyDayReward'

function App() {
 
  return (
      <>
				{/* <LoadingPage /> */}
				{/* <RewardPage /> */}
				<EveryDayReward />
			</>
  )
}

export default App
