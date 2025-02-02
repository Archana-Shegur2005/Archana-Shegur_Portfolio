
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, useNavigate
} from "react-router-dom";
import { Element, scroller } from 'react-scroll';
import Header from './components/Header';
import Home from './pages/Home'
import Skil from './pages/Skil'
import Projects from './pages/projects'
import Internship from './pages/Internships'
import Education from './pages/education'
import Contact from './pages/contact'
import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
      Aos.init();
  }, [])
  return (
    <>
        {/* <Header/>
        <Home/>
        <Education/> */}
      
      {/* <Router>  
      <Header/>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/skills" element={<Skil />} />
                <Route path="/internships" element={<Internship />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}

            <Router>
            <div className='bg-black'>
                <Header />
                <div> {/* Adjust for fixed navbar */}
                    <Home />
                    <Projects />
                    <Internship />
                    <Skil />
                    <Education/>
                    <Contact />
                    <Footer/>
                </div>
            </div>
        </Router>
        {/* <Footer/>
      </Router> */}
    </>
  );
}

export default App;
