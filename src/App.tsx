import './App.css';
import Navbar from './components/Navbar';
import ApexChart from './components/charts/ApexChart';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <ApexChart />
      </div>
    </div>
  );
}

export default App;
