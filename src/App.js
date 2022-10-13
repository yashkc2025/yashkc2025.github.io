import './App.css';

import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  return (
    <div>
      <h1 className='mobile-only'>Mobile Version is under construction. Please use desktop version!</h1>
      <div className="App">
        <Navbar />
        <Hero />
        <About/>
        <Quotes />
        <Contact/>
        <h3 className='footer'>«/» by Yash</h3>
      </div>
    </div>
  );
}

export default App;
