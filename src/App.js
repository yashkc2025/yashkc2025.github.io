import logo from './logo.svg';
import './App.css';
import Toolkit from './components/Toolkit';
import tools from './components/data/tools';


function App() {
  const tool = tools.map(item => <Toolkit {...item} />)

  return (
    <div className="App">
      <div className='tool-drop'>
        <div className='tool-combo'>
          {tool}
        </div>
      </div>
    </div>
  );
}

export default App;
