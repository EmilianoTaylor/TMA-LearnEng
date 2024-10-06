import { useState } from 'react'
import './App.css'
import LoadingPage from './components/loadingPage/loadingPage'
import RewardPage from './components/rewardPage/rewardPage'
import EveryDayReward from './components/rewardPage/everyDayReward/everyDayReward'
import SelectMode from './components/selectMode/selectModePage'
import WordsPage from './components/wordsPage/wordsPage'
import JourneyPage from './components/journeyPage/journeyPage'
import MoreCoinsPage from './components/moreCoinsPage/moreCoinsPage'
import RatingPage from './components/ratingPage/ratingPage'
import FriendString from './components/friendsPage/friendString'
import FriendsPage from './components/friendsPage/friendsPage'
import TelegramJoinPage from './components/telegramJoinPage/telegramJoinPage'
import SoonPage from './components/soonPage/soonPage'
import EndQuestionPage from './components/endQuestionPage/endQuestionPage'
import GetRewardPage from './components/getRewardPage/getRewardPage'

function App() {
 
  return (
      <>
				{/* <LoadingPage /> */}
				{/* <RewardPage /> */}
				{/* <EveryDayReward /> */}
				{/* <SelectMode /> */}
				{/* <WordsPage /> */}
				{/* <JourneyPage /> */}
				{/* <MoreCoinsPage /> */}
				{/* <RatingPage /> */}
				{/* <FriendsPage /> */}
				{/* <TelegramJoinPage /> */}
				{/* <SoonPage /> */}
				{/* <EndQuestionPage /> */}
				<GetRewardPage />
			</>
  )
}

export default App
