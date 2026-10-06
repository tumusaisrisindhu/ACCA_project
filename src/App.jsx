// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BecomeAcca from './components/BecomeAcca'
import WhyChooseUs from './components/WhyChooseUs'
import PlacementAssistance from './components/PlacementAssistance'
import KickOff from './components/KickOff'
import WhatWillYouLearnInAcca from './components/WhatWillYouLearnInAcca'

function App() {

  return (
    <>
      <Header />

      <main>
        <BecomeAcca />
        <WhyChooseUs />
        <WhatWillYouLearnInAcca />
        <PlacementAssistance />
        <KickOff />
      </main>
      <footer className="bg-[#32187f] px-6 py-6 text-center text-sm text-white">
        © 2026 IndigoLearn. All rights reserved.
      </footer>
    </>
  )
}

export default App
