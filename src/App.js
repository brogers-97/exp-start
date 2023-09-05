import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Landingpage from './components/Landingpage';
import Battlefield from './components/Battlefield';
import Homepage from './components/Homepage';
import Decks from './components/Decks';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Landingpage />}
          />
          <Route
            path='/battle'
            element={<Battlefield />}
          />
          <Route
            path='/home'
            element={<Homepage />}
          />
          <Route
            path='/decks'
            element={<Decks />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
