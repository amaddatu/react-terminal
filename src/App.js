import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Interactive from './pages/Interactive';
import Navbar from './components/Navbar';
import TerminalProvider from './context/TerminalContext';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

function App() {

  return (
    <>
      <Router>
        <TerminalProvider>
          <main className="container-fluid">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/interactive" element={<Interactive />} />
            </Routes>
          </main>
        </TerminalProvider>
      </Router>
    </>
  );
}

export default App;
