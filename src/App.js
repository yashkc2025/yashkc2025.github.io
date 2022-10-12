import './App.css';

import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import Hero from './components/Hero';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />

      <Quotes />
    </div>
  );
}

export default App;
