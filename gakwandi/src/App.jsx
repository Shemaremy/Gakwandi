import React from 'react'
import './App.css'
import Part1 from './Components/Part1'
import Part2 from './Components/Part2'
import Part3 from './Components/Part3'
import Part4 from './Components/Part4'
import Part5 from './Components/Part5'
import Part6 from './Components/Part6'
import Part7 from './Components/Part7'
import Part8 from './Components/Part8'
import Part9 from './Components/Part9'
import Preloader from './Components/Part10'

function App() {

  return (
    <div className="App">
        <header id="header" className="header d-flex align-items-center fixed-top">
          <Part1/>
        </header>
        <main className="main">
          <Part2/>
          <Part3/>
          <Part4/>
          <Part5/>
          <Part6/>
          <Part7/>
          <Part8/>
        </main>
        <footer id="footer" className="footer dark-background">
          <Part9/>
        </footer>
    </div>
  )
}

export default App
