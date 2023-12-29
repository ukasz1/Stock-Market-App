import './App.css';
import Navbar from './components/Navbar';
// import CandleChart from './components/charts/CandleChart';
import Wig20 from './components/Wig20';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Wig20 />
      </div>
    </div>
  );
}

export default App;
