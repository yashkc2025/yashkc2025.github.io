import logo from './logo.svg';
import './App.css';
import Toolkit from './components/Toolkit';
import tools from './components/data/tools';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';

function App() {
  const tool = tools.map(item => <Toolkit {...item} />)

  return (
    <div className="App">
      <Navbar/>
      <div className='tool-drop'>
        <div className='tool-combo'>
          {tool}
        </div>
      </div>
      
      <Quotes/>
    </div>
  );
}

export default App;
