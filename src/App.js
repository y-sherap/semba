import Nav from './components/Nav/Nav'
import HowItWorks from './pages/HowItWorks/HowItWorks'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import FindATherapist from './pages/FindATherapist/FindATherapist'
import {Routes, Route} from 'react-router-dom'
import './app.css'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/how-it-works' element ={<HowItWorks />} />
        <Route path='/about' element ={<About />} />
        <Route path='/find-a-therapist' element ={<FindATherapist />} />
      </Routes>
    </div>
  );
}

export default App;
