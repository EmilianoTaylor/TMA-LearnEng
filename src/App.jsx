import { useState } from 'react'
import './App.css'
import LoadingPage from './components/loadingPage/loadingPage'
import RewardPage from './components/rewardPage/rewardPage'
import EveryDayReward from './components/rewardPage/everyDayReward/everyDayReward'
import SelectMode from './components/selectMode/selectModePage'
import WordsPage from './components/wordsPage/wordsPage'
import JourneyPage from './components/journeyPage/journeyPage'
import MoreCoinsPage from './components/moreCoinsPage/moreCoinsPage'
import CoinsDone from './components/moreCoinsPage/coinsDone/coinsDone'

function App() {
 
  return (
      <>
				{/* <LoadingPage /> */}
				{/* <RewardPage /> */}
				{/* <EveryDayReward /> */}
				{/* <SelectMode /> */}
				{/* <WordsPage /> */}
				{/* <JourneyPage /> */}
				<MoreCoinsPage />
				{/* <CoinsDone /> */}
			</>
  )
}

export default App
