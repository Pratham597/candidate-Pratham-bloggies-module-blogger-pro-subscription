import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './Pages/Pricing.jsx';
import ProDashboard from './Pages/ProDashboard.jsx';
import './App.css'; 
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import NotFound from './Components/NotFound.jsx';
import Home from './Pages/Home.jsx';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pro-dashboard" element={<ProDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

