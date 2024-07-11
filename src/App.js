import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Servise from './components/Servise';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Nav/>
      <About/>
      <Servise/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
