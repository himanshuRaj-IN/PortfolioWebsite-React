import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import bg from './bg1.jpg';
import bg2 from './bg2.png';

function App() {
  return (
    <>
    <div className="home" style={{backgroundImage: `url(${bg})`}}>
     <Navbar />
     <Home />
     <div className="ani1"></div>
     <div className="ani2"></div>
     <div className="ani3"></div>
     <div className="ani4"></div>
     <div className="ani5"></div>
    </div>
    <div className="home" style={{backgroundImage: `url(${bg2})`}}>
     jhjfghhgfhfghfgh
    </div>
    </>
  );
}

export default App;
