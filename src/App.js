import logo from './logo.svg';
// import './App.css';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
// import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';

import './assets/css/main.css';

import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <main className="main">
            <Routes>
              <Route path='' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/team' element={<Team/>} />
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
