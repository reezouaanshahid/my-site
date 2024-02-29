import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Head1 from './pages/components/Head/Head';
// import Contact from './pages/components/Contact/contact';
import Main from './Main';
import About1 from './pages/components/about/About';
import Head1 from './pages/components/Head/Head';
import Aboutbanner from './pages/components/Aboutbanner/aboutbanner';
import Eduction from './pages/components/Eduction/eduction';
import Skills from './pages/components/Skills/skills';
import Contact from './pages/components/Contact/contact';
import Footer from './pages/components/Footer/footer';
// import Marquee from './pages/components/marquee/Marquee';


function App() {
  return (
    <BrowserRouter>
    <Head1/>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/about" element={<About1 />}/>
        <Route path="/Aboutbanner" element={< Aboutbanner/>}/>
        <Route path="/Eduction" element={< Eduction/>}/>
        <Route path="/Skill" element={<Skills/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
