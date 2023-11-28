import './App.css';
import Navbar from './components/Navbar';
import CandleChart from './components/charts/CandleChart';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <CandleChart />
      </div>
    </div>
  );
}

export default App;
