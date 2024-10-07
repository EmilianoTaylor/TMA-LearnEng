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
import AdvantagePageOne from './components/advantagesPage/advantagePageOne/advantagePageOne'
import AdvantagePageTwo from './components/advantagesPage/advantagePageTwo/advantagePageTwo'
import PremiumPage from './components/advantagesPage/premiumPage/premiumPage'
import PremiumLostPage from './components/advantagesPage/premiumLostPage/premiumLostPage'
import WinterSlalomPage from './components/winterSlalomPage/winterSlalomPage'
import WinterSlalomPageTwo from './components/winterSlalomPage/winterSlalomPageTwo/winterSlalomPageTwo'
import WinterSlalomPageThree from './components/winterSlalomPage/winterSlalomPageThree/winterSlalomPageThree'
import SchoolPageMain from './components/schoolPage/schoolPageMain'
import SchoolFloorPage from './components/schoolPage/schoolFloor'
import { Route, Router, Routes } from 'react-router-dom'


function App() {
 
  return (
      <>
					<Routes>
						<Route path="/*" element={<LoadingPage />} />
						<Route path="/reward" element={<RewardPage />} />
						<Route path="/everyDayReward" element={<EveryDayReward />} />
						<Route path="/selectMode" element={<SelectMode />} />
						<Route path="/words" element={<WordsPage />} />
						<Route path="/journey" element={<JourneyPage />} />
						<Route path="/moreCoins" element={<MoreCoinsPage />} />
						<Route path="/rating" element={<RatingPage />} />
						<Route path="/friends" element={<FriendsPage />} />
						<Route path="/telegramJoin" element={<TelegramJoinPage />} />
						<Route path="/soon" element={<SoonPage />} />
						<Route path="/endQuestion" element={<EndQuestionPage />} />
						<Route path="/getReward" element={<GetRewardPage />} />
						<Route path="/advantageOne" element={<AdvantagePageOne />} />
						<Route path="/advantageTwo" element={<AdvantagePageTwo />} />
						<Route path="/premium" element={<PremiumPage />} />
						<Route path="/premiumLost" element={<PremiumLostPage />} />
						<Route path="/winterSlalom" element={<WinterSlalomPage />} />
						<Route path="/winterSlalomTwo" element={<WinterSlalomPageTwo />} />
						<Route path="/winterSlalomThree" element={<WinterSlalomPageThree />} />
						<Route path="/schoolPageMain" element={<SchoolPageMain />} />
						<Route path="/schoolFloor" element={<SchoolFloorPage />} />
					</Routes>
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
				{/* <GetRewardPage /> */}
				{/* <AdvantagePageOne /> */}
				{/* <AdvantagePageTwo /> */}
				{/* <PremiumPage /> */}
				{/* <PremiumLostPage /> */}
				{/* <WinterSlalomPage /> */}
				{/* <WinterSlalomPageTwo /> */}
				{/* <WinterSlalomPageThree /> */}
				{/* <SchoolPageMain /> */}
				{/* <SchoolFloorPage /> */}
			</>
  )
}

export default App
