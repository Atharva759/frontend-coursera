import Reservation from './components/Reservation'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Confirmation from './components/Confirmation';




function App() {
  return (
    <div className="font-sans text-gray-800">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Menu />
              <About />
              <Contact />
            </>
          } />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation/confirmed" element={<Confirmation/>}/>
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App