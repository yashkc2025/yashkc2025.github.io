import './App.css';

import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import Hero from './components/Hero';

function App() {

  return (
    <div>
      <h1 className='mobile-only'>Mobile Version is under construction. Please use desktop version!</h1>
      <div className="App">
        <Navbar />
        <Hero />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
