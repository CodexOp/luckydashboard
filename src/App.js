import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Calculator from './components/calculator/Calculator';
import Landing from './components/landing/Landing';
import Dashboard from './components/dashboard/Dashboard';
import Stake from './components/stack/Stake';
import Earn from './components/earn/Earn';
import wrapper1 from './images/Vector1.svg';
import wrapper2 from './images/Vector2.svg';


function App() {
  return (
    
    <Router>
           <div className='wrapper1'>
        <img src={wrapper1} alt='wrapper' />
        </div>
        <div className='wrapper2'>
        <img src={wrapper2} alt='wrapper' />
        </div>
      <Routes>
        <Route exact path='/' element={<><Navbar/> <Landing /></>}/>
        <Route exact path='/dashboard' element={<><Navbar/> <Dashboard /></>}/>
        <Route exact path='/stake' element={<><Navbar/> <Stake /></>}/>
        <Route exact path='/earn' element={<><Navbar/> <Earn/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
