
import './App.css'
import About from './components/About';
import Feature from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pricing from './components/pricing';

function App() {

  return (
    <div  >
    <Navbar />
    <Home/>
    <Feature/>
    <About/>
    <Pricing/>
  </div>
);
}

export default App
