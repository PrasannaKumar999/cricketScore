import './App.css';
import Home from './components/Home';
import Utility from './components/Utility';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Scorecard from './components/scorecard';
import Ongoing from './components/OngoingMatches';
import Menu from './components/Menu/Menu';
import Ipl from './components/IPL/Ipl';
import FeederIPL from './components/IPL/FeederIPL';
import Feeder from './components/Feeder';

function App() {
  return (
    <div style={{ width: "980px", margin: "auto" }}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Scorecard />} />
          <Route path='/createNewMatch' element={<Utility />} />
          <Route path='feeder' element={<Ongoing />} />
          <Route path="/feeder/:matchId" element={<Home />} />
          <Route path="/scorecard" element={<Scorecard />} />
          {/* <Route path="/scorecard/:matchId" element={<Scorecard />} /> */}
          <Route path="/matches" element={<Ongoing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/ipl" element={<Ipl />} />
          <Route path="/feederIpl/:matchId" element={<FeederIPL />} />
          <Route path="/scorecard/:matchId" element={<Menu />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
