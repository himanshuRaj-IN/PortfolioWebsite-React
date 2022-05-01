import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import bg from './bg1.jpg';
import Footer from './components/Footer/Footer';
import data from './data.json'
import { Route, Routes } from 'react-router-dom';
import About from './components/AboutPage/About';
function App() {
  return (
    <div className="home" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <Routes>
        <Route path="/"element={<Home />}></Route>
        <Route path="/Home"element={<Home />}></Route>
        <Route path="/Projects" element={<Projects projArr={data.projects}/>}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <>
        <div className="ani1"></div>
        <div className="ani2"></div>
        <div className="ani3"></div>
        <div className="ani4"></div>
        <div className="ani5"></div>
      </>
      <Footer />
    </div>
  );
}

export default App;
