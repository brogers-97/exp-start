import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landingpage from './components/Landingpage';
import Battlefield from './components/Battlefield';
import Homepage from './components/Homepage';
import Decks from './components/Decks';
import Admin from './components/Admin';
import jwt_decode from 'jwt-decode'
import './App.css';

function App() {

  const [gameChar, setGameChar] = useState('')
  const [gameDeck, setGameDeck] = useState('')
  const [gameBoss, setGameBoss] = useState('')
  const [saveName, setSaveName] = useState('')
  const [gameCharHealth, setGameCharHealth] = useState()
  const [gameBossHealth, setGameBossHealth] = useState()

  const [currentUser, setCurrentUser] = useState(null)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, [])

  const handleLogout = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setCurrentUser(null)
    }
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Landingpage 
              handleLogout = {handleLogout}
            />}
          />
          <Route
            path='/battle'
            element={<Battlefield 
              gameChar = {gameChar}
              gameDeck = {gameDeck}
              gameBoss = {gameBoss}
              saveName = {saveName}
              gameCharHealth = {gameCharHealth}
              setGameCharHealth = {setGameCharHealth}
              gameBossHealth = {gameBossHealth}
              setGameBossHealth = {setGameBossHealth}
            />}
          />
          <Route
            path='/home'
            element={<Homepage 
              gameChar = {gameChar}
              setGameChar = {setGameChar}
              gameDeck = {gameDeck}
              setGameDeck = {setGameDeck}
              gameBoss = {gameBoss}
              setGameBoss = {setGameBoss}
              gameCharHealth = {gameCharHealth}
              setGameCharHealth = {setGameCharHealth}
              gameBossHealth = {gameBossHealth}
              setGameBossHealth = {setGameBossHealth}
              saveName = {saveName}
              setSaveName = {setSaveName}
            />}
          />
          <Route
            path='/decks'
            element={<Decks />}
          />
          <Route
            path='/admin'
            element={<Admin />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
