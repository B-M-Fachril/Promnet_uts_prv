import './App.css';
import Nav from "./Komponen/Nav"; 
import Body from './Komponen/body';
import Footer from './Komponen/Footer';
import About from './Komponen/About';
import About_2 from './Komponen/About_2';
import Contact from './Komponen/Contact';
import Home from './Komponen/Home';
import About_Pg from './Komponen/About_Pg';
import Contact_Pg from './Komponen/Contact_Pg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/About" element={<About_Pg />} />
          <Route path="/contact" element={<Contact_Pg />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
