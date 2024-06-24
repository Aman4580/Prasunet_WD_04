import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Servise from './components/Servise';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav/>
      <About/>
      <Servise/>
      <Portfolio/>
      <Contact/>
      <Routes>
       <Route path="/blog" element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
