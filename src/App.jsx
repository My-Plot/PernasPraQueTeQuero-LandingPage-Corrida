import { Hero } from "./components/Hero"
import { AboutUs } from './components/AboutUs'
import { HelpUs } from "./components/HelpUs"
import { NextRunning } from "./components/NextRunning"
import { CallToAction } from "./components/CallToAction"
import { LastRunning } from "./components/LastRunning"
import { NewsLetter } from "./components/NewsLetter"
import { Copy } from "./components/Copy"
import  './Style/global.css'  


function App() {

  return (
    <div >
      <Hero/>
      <AboutUs/>
      <HelpUs/>
      <NextRunning/>
      <CallToAction/>
      <LastRunning/>
      <NewsLetter/>
      <Copy/>
    </div>
  )
}

export default App
