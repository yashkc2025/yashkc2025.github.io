import './App.css';

import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import Hero from './components/Hero';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <h1 className='mobile-only'>Mobile Version is under construction. Please use desktop version!</h1>
      <div className="App">
        <Navbar />
        <Hero />
        <Quotes />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
