import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom"
//pages
import HomePage from './pages/HomePage'
import EditProfile from './pages/EditProfile';
import GamePage from './pages/GamePage'
import ScorePage from './pages/ScorePage'
import AllProfiles from './pages/AllProfiles';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage';
import { useState, useEffect } from 'react'
// import API_NINJA_KEY from './.env'

function App() {

  const [user, setUser] = useState([])

  return (
    
    <div className="App">
    <HashRouter>
      <p id="play"><strong>Let's Play</strong></p>
      <ul>
  <li>
    <a href="#">
      <h1>T</h1>
    </a>
  </li>
  <li id="two">
    <a href="#">
      <h1>R</h1>
    </a>
  </li>
  <li id="three">
    <a href="#">
      <h1>I</h1>
    
    </a>
  </li>
  <li id="four">
    <a href="#">
      <h1>V</h1>
    </a>
  </li>
  <li id="five">
    <a href="#">
      <h1>I</h1>
    </a>
  </li>
  <li id="six">
    <a href="#">
      <h1>A</h1>
    </a>
  </li>
</ul>
<br/>
      <Routes>
        <Route path='/' element= { <HomePage username={ user.username } setUser={ setUser }/> } />
        <Route path='/game/:category/:int' element= { <GamePage user={ user.username }/> } />
        <Route path='/profiles' element= { <AllProfiles /> } />
        <Route path='/profiles/:id' element= { <ProfilePage username={ user.username }/> } />
        <Route path='/profiles/:id/edit' element= { <EditProfile id={ user.id } setUser={ setUser } /> } />
        <Route path='/scoreboard' element= { <ScorePage /> } />
        <Route path='/login' element= { <LoginPage setUser = { setUser }/> } />
        <Route path='/signup' element= { <SignupPage /> } />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
