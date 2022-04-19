import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom"
//pages
import HomePage from './pages/HomePage'
// import ProfilePage from './pages/ProfilePage'
import GamePage from './pages/GamePage'
import ScorePage from './pages/ScorePage'
import AllProfiles from './pages/AllProfiles';
import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    
    <div className="App">
    <HashRouter>
      <Link to="/"><h1>Trivia App</h1></Link>
      <hr />
      <Routes>
        <Route path='/' element= { <HomePage /> } />
        <Route path='/game' element= { <GamePage /> } />
        <Route path='/profiles' element= { <AllProfiles /> } />
        <Route path='/profiles/:id' element= { <ProfilePage /> } />
        <Route path='/scoreboard' element= { <ScorePage /> } />
      </Routes>

    </HashRouter>
     
    
    </div>
  );
}

export default App;
