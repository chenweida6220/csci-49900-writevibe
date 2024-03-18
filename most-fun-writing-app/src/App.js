import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './components/Background';
import Settings from './components/Settings';

function App() {
  return (
    // <div className="App">
    //   <Background />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Background />} /> {/*Leave path for background empty bc it's rendered first */}
        <Route path="/path/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
